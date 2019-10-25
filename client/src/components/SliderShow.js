import React from 'react';
import SlideShow from 'react-image-show';
 
export default function SliderShow(){
    return (
      <SlideShow
        images={["/images/plastique.jpg","/images/plastique.jpg","/images/plastique.jpg","/images/plastique.jpg"]}
        width="920px"
        imagesWidth="800px"
        imagesHeight="450px"
        imagesHeightMobile="56vw"
        thumbnailsWidth="920px"
        thumbnailsHeight="12vw"
        arrows={false}
        indicators thumbnails fixedImagesHeight
      />
    );
}