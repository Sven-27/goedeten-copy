using CrossCuttingConcerns.EntityFrameworkGenerics;
using CrossCuttingConcerns.Exceptions;
using Data.DataObjects;
using DataLayer;
using Microsoft.EntityFrameworkCore;
using System;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace Data.Repositories
{
    public interface IUserRepository
    {
        IQueryable<User> GetAll();
        Task<User> GetById(int id);
        Task<User> GetByUserName(string userName);
        Task<bool> UserNameExists(string username);
        Task CreateUser(User entity);
        Task Update( User entity);
        Task Delete(int id);
        Task<int> TotalNumberOfUsers();
    }
    public class UserRepository : GenericRepository<User>, IUserRepository
    {
        private readonly MainDbContext _mainDbContext;
        public UserRepository(MainDbContext mainDbContext) : base(mainDbContext)
        {
            _mainDbContext = mainDbContext;
        }

       public async Task<User> GetByUserName(string userName)
        {
            try
            {
                return await _mainDbContext.Users                   
                    .SingleOrDefaultAsync(x => x.Username == userName)
                    .ConfigureAwait(false);               
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                throw new AppException("Couldn't get this user by username!");
            }
        }

        public async Task<bool> UserNameExists(string username)
        {
            try
            {
                return await _mainDbContext.Users
                    .AnyAsync(x => x.Username == username)
                    .ConfigureAwait(false);
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                throw new AppException("UserNameExists error!");
            }
        }


        public async Task<int> TotalNumberOfUsers()
        {
            return await _mainDbContext.Users
                .CountAsync().ConfigureAwait(false);
        }

        public async Task CreateUser(User entity)
        {
            try
            {
                await _mainDbContext.Set<User>().AddAsync(entity);
                await _mainDbContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                throw new AppException("Creating User error!");
            }
            
        }
    }

      
      
    }

