import React, { useState, useEffect } from 'react';
import { SliderContainer, SliderImage, SliderThumbs } from './styles';

function SliderProducts({ respAPI }) {
  const [imgToggle, setImgToggle] = useState();

  useEffect( () => {    
    setImgToggle(respAPI?.pictures[0].secure_url)
  },[respAPI])
  return (
    <>
      <SliderContainer>
        <SliderThumbs>
          <ul>
            {
              respAPI?.pictures.slice(0, 4).map((imgs, id) => (
                <li key={id}
                  
                  onClick={() => setImgToggle(imgs.secure_url)}
                >
                  <img src={imgs.secure_url} alt="" />
                </li>
              ))
            }            
          </ul>
        </SliderThumbs>
        <SliderImage>
          <img src={imgToggle} alt="" />          
        </SliderImage>
      </SliderContainer>
    </>
  );
}

export default SliderProducts;