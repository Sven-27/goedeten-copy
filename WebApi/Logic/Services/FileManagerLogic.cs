using System.IO;
using System.Threading.Tasks;
using Azure.Storage.Blobs;
using Logic.DataTransferObjects;
using System;

namespace Logic.Services
{    
    public interface IFileManagerLogic
    {
        Task<string> Upload(ImageFileDto image, string prefix);
        Task<byte[]> Get(string imageName);
        Task Delete(string imageName);
    }
        
    public class FileManagerLogic : IFileManagerLogic
    {
        private readonly BlobServiceClient _blobServiceClient;
        public FileManagerLogic(BlobServiceClient blobServiceClient)
        {
            _blobServiceClient = blobServiceClient;
        }

        public async Task<string> Upload(ImageFileDto image, string prefix)
        {
            
            var blobContainer = _blobServiceClient.GetBlobContainerClient("goed-eten");
            await blobContainer.CreateIfNotExistsAsync(Azure.Storage.Blobs.Models.PublicAccessType.Blob);
            var newFileName = GenerateFileName(image.ImageFile.FileName, prefix);


            
            var blobClient = blobContainer.GetBlobClient(newFileName);

            await blobClient.UploadAsync(image.ImageFile.OpenReadStream());
            return blobClient.Uri.ToString();
        }

        public async Task<byte[]> Get(string imageName)
        {
            var blobContainer = _blobServiceClient.GetBlobContainerClient("goed-eten");

            var blobClient = blobContainer.GetBlobClient(imageName);
            var downloadContent = await blobClient.DownloadAsync();
            using (MemoryStream ms = new MemoryStream())
            {
                await downloadContent.Value.Content.CopyToAsync(ms);
                return ms.ToArray();
            }
        }

        public async Task Delete(string imageName)
        {
            var blobContainer = _blobServiceClient.GetBlobContainerClient("goed-eten");
           
            var imageNameWithPrefix= imageName.Replace("%2F", "/");

            var blobClient = blobContainer.GetBlobClient(imageNameWithPrefix);
           
            await blobClient.DeleteIfExistsAsync();
        }
        private string GenerateFileName(string fileName, string prefix)
        {
            string strFileName = string.Empty;
            string[] strName = fileName.Split('.');
                        strFileName = prefix+"/"+"ge" + Path.GetRandomFileName().Replace(".","")+"." + strName[strName.Length - 1];
            return strFileName;
        }
    }
}