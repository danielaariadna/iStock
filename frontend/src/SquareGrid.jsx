import React from 'react'
import ImageContainer from './imageContainer';

export default function SquareGrid({imageList}) {
  return (
      
        <div style={{"display":"flex","flex-wrap": "wrap","gap":"10px"}}>
          {imageList.map(function (image){
            return <ImageContainer image={image} id={Math.floor(500+Math.random() * 9000)}/>
          })
          }
        </div>
  );
}
