const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with your credentials
cloudinary.config({
    cloud_name:process.env.cloud_name!,
    api_key:  process.env.api_key!,
    api_secret:process.env.api_secret!,
  });
   

  

// Function to upload a file to Cloudinary
export const uploadToCloudinary = (file:any) => {
  return new Promise<any>((resolve, reject) => {
    cloudinary.uploader.upload(file, (error: any, result: any) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = { uploadToCloudinary };
