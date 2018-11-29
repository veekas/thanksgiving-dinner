import React from 'react';

// image source: https://www.simplyrecipes.com/wp-content/uploads/2005/12/how-to-make-gravy-horiz-a-1600.jpg
import image from '../assets/gravy.jpg';

export default function Gravy() {
  return (
    <img
      alt="gravy by Elise Bauer"
      className="food-image"
      src={image}
    />
  );
}
