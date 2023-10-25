import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'XXX', 
  api_key: 'XXX', 
  api_secret: 'XXXX' 
});

const cdUpload = (file) => {
    const link = ""
    cloudinary.uploader.upload(file).then((result) => {
        console.log(result.secure_url);
        link = result.secure_url
    })
    return link
}

export default cdUpload