const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME_CLOUDINARY}/image/upload`;


const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "ECOMMERCE");

    const response = await fetch(`https://api.cloudinary.com/v1_1/dhmzr2uww/image/upload`, {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json" // Add this header
        }
    });

    return response.json();
};

export default uploadImage 