import { v2 as cloudinary } from 'cloudinary';

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });
  
 export  const generateSignedUrl = (publicId:string) => {
    return cloudinary.url(publicId, {
      sign_url: true,
      secure: true,
      type: 'authenticated',
      expires_at: Math.floor(Date.now() / 1000) + 3600 // URL valid for 1 hour
    });
  };
  