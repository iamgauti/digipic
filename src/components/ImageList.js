import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const newImageList = props.images.map((image)=> <ImageCard key={image.id} image={image}/> );
    {/*props.images.forEach((image)=>console.log(image.urls.regular));*/}
    return (
        <div className="image-list">
            {newImageList}
        </div>
    );
};

export default ImageList; 