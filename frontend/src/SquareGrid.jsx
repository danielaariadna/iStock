import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImageContainer from './imageContainer';

export default function SquareGrid({ imageList }) {
  const navigate = useNavigate();

  const handleClick = (index) => {
    //navigate(`/editor/${index}`);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', padding: '20px' }}>
      {imageList.map((image, index) => (
        <div key={index} onClick={() => handleClick(index)} style={{ cursor: 'pointer' }}>
          <ImageContainer image={image} />
        </div>
      ))}
    </div>
  );
}