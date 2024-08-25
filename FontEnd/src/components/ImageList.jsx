// src/components/ImageList.tsx
import{ useEffect, useState } from 'react';

const ImageList = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const response = await fetch('http://localhost:8080/api/images');
            const data = await response.json();
            setImages(data);
        };

        fetchImages();
    }, []);

    return (
        <div>
            {images.map(image => (
                <img height={100} key={image.id} src={image.url} alt={image.name} />
            ))}
        </div>
    );
};

export default ImageList;
