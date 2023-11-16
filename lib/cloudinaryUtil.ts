const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with your credentials
cloudinary.config({
    cloud_name: 'dm7gmrkki',
    api_key: '398486115139613',
    api_secret: 'R7wAMNqAU3WCOG5eZgT_DOjBg8Y',
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
