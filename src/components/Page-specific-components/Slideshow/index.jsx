import React, { useState } from 'react';
import logoLeft from './assets/arrow-left.png'
import logoRight from './assets/arrow-right.png'
import './assets/Slideshow.scss'

const Slide = (props) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === props.src.length - 1 ? 0 : prevIndex + 1
  )};

  const prevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? props.src.length - 1 : prevIndex - 1
      );
  }

  const currentImage = props.src[currentImageIndex];
        
  return (
      <div key={props.id} className='slideshow'>
          <img src={currentImage} alt={props.alt} />
          <h3 className='currentImg'>{currentImageIndex + 1}/{props.src.length}</h3>
        <div className='arrows'>
          <img src={logoLeft} alt="flèche droite" className='arrow-rigth' onClick={prevImage}/>
          <img src={logoRight}alt="flèche gauche" className='arrow-left' onClick={nextImage}/>
        </div>
      </div>
      )
}

export default Slide