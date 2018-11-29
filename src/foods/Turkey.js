import React from 'react';

// image source: https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/8/10/0/Thanksgiving-2011_LR0409-brined-herb-turkey_s4x3.jpg"
import image from '../assets/turkey.jpg';

export default function Turkey() {
  return (
    <img
      alt="thanksgiving turkey by Tara Donne"
      className="food-image"
      src={image}
    />
  );
}
