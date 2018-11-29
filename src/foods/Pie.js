import React from 'react';

// image source: https://images.unsplash.com/photo-1509461399763-ae67a981b254
import image from '../assets/pie.jpeg';

export default function Pie() {
  return (
    <img
      alt="pumpkin pie by Element5 Digital"
      className="food-image"
      src={image}
    />
  );
}
