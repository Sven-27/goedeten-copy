using AutoMapper;
using CrossCuttingConcerns.Enums;
using CrossCuttingConcerns.Exceptions;
using CrossCuttingConcerns.Functional;
using Data.DataObjects;
using Data.Repositories;
using Logic.DataTransferObjects;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Logic.Services
{

    public interface IUserService
    {
        Task<UserDto> Authenticate(string username, string password, bool login);
        Task<IEnumerable<UserDto>> GetAll();
        Task<UserDto> GetById(int id);
        Task<UserDto> Create(UserDto userDto, string password);
        Task Update(UserDto userDto, string password = null);
        Task<UserDto> UpdatePass(int id);
        Task Delete(int id);
        Task<int> NumberOfUsers();
        Task<UserDto> GetByUserName(string username);
      
    }
    public class UserService : IUserService
    {

        private readonly IUserRepository _repository;
        private readonly IMapper _mapper;

        public UserService(
            IUserRepository repository,
            IMapper mapper)
        {
            _repository = repository; 
            _mapper = mapper;
        }

        public async Task<UserDto> Authenticate(string username, string password, bool login )
        {
            if(string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
                return null;

            var result = await _repository.GetByUserName(username).ConfigureAwait(false);

            // check if username exists
            if (result == null)
                return null;
            
            if (login) 
            {
                return !VerifyPasswordHash(password, result.PasswordHash, result.PasswordSalt) ?
                null :
                _mapper.Map<UserDto>(result);
            }
            return !VerifyPasswordHash(password, result.ResetCodeHash, result.ResetCodeSalt) ?
            null :
            _mapper.Map<UserDto>(result);

        }

        public async Task<UserDto> Create(UserDto userDto, string password)
        {
            password = "Pa$$w0rd"; // just for NOT NULL
            // validation
            if (string.IsNullOrWhiteSpace(password))
                throw new AppException("Password is required");


            if (await _repository.UserNameExists(userDto.Username).ConfigureAwait(false))
                throw new AppException("Username \"" + userDto.Username + "\" is already taken");

            UserHelpers.CreatePasswordHash(password, out var passwordHash, out var passwordSalt);
            UserHelpers.CreatePasswordHash(userDto.ResetCode, out var resetCodeHash, out var resetCodeSalt);

            var user = _mapper.Map<User>(userDto);
            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;
            user.ResetCodeHash = resetCodeHash;
            user.ResetCodeSalt = resetCodeSalt;
            user.Role = Enum.TryParse(userDto.Role, out UserRole role) ? role : UserRole.NoAccess;
            await _repository.CreateUser(user).ConfigureAwait(false);

            return _mapper.Map<UserDto>(user);
        }

        public async Task Delete(int id)
        {
            var user = await _repository.GetById(id).ConfigureAwait(false);
            if (user == null)
            {
                return;
            }
            await _repository.Delete(id).ConfigureAwait(false);
        }

        public async Task<IEnumerable<UserDto>> GetAll()
        { 
            var list = await _repository.GetAll().ToListAsync().ConfigureAwait(false);
            return _mapper.Map<List<UserDto>>(list);                
        }

        public async Task<UserDto> GetById(int id)
        {
            var res = await _repository.GetById(id).ConfigureAwait(false);
            return _mapper.Map<UserDto>(res);
        }

        public async Task<UserDto> GetByUserName(string username)
        {
            var user = await _repository.GetByUserName(username).ConfigureAwait(false);
            return user != null ? _mapper.Map<UserDto>(user) : null;
        }

        public async Task<int> NumberOfUsers()
        {
            return await _repository.TotalNumberOfUsers().ConfigureAwait(false);
        }

        public async Task Update(UserDto userDto, string password = null)
        {
            if (userDto.Id == null)
                throw new AppException("User id can not be null!");

            var user = await _repository.GetById((int)userDto.Id).ConfigureAwait(false);

            if (user == null)
                throw new AppException("User not found");

            if (userDto.Username != user.Username)
            {
                // username has changed so check if the new username is already taken
                if (await _repository.UserNameExists(userDto.Username).ConfigureAwait(false))
                    throw new AppException("Username " + userDto.Username + " is already taken");
            }

            // update user properties
            user.Name = userDto.Name;

            // make sure the reset code is removed etc.
            user.NeedsPasswordReset = false;
            user.ResetCodeHash = null;
            user.ResetCodeSalt= null;

            // update password if it was entered
            if (!string.IsNullOrWhiteSpace(password))
            {
                UserHelpers.CreatePasswordHash(password, out var passwordHash, out var passwordSalt);

                user.PasswordHash = passwordHash;
                user.PasswordSalt = passwordSalt;
            }

            user.Role = Enum.TryParse(userDto.Role, out UserRole role) ? role : UserRole.NoAccess;

            await _repository.Update(user).ConfigureAwait(false);
        }
        
        public async Task<UserDto> UpdatePass(int id)
        {
            var user = await _repository.GetById(id).ConfigureAwait(false);
            if (user == null)
                return null;

            user.NeedsPasswordReset = true;
            user.ResetCodeHash = null;
            user.ResetCodeSalt = null;
            await _repository.Update(user).ConfigureAwait(false);

            return _mapper.Map<UserDto>(user);
        }


        private static bool VerifyPasswordHash(string password, IReadOnlyList<byte> storedHash, byte[] storedSalt)
        {
            if (password == null) { throw new ArgumentNullException(nameof(password)); }

            if (string.IsNullOrWhiteSpace(password))
            {
                throw new ArgumentException(
                    "Value cannot be empty or whitespace only string.",
                    nameof(password));
            }

            if (storedHash.Count != 64)
            {
                throw new ArgumentException(
                    "Invalid length of password hash (64 bytes expected).",
                    "passwordHash");
            }

            if (storedSalt.Length != 128)
            {
                throw new ArgumentException(
                    "Invalid length of password salt (128 bytes expected).",
                    "passwordHash");
            }

            using (var hmac = new System.Security.Cryptography.HMACSHA512(storedSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                if (computedHash.Where((t, i) => t != storedHash[i]).Any())
                {
                    return false;
                }
            }
            return true;
        }

       
    }
}
