import React from 'react';

// image source: https://pioneerwoman.files.wordpress.com/2015/12/how-to-make-mashed-potatoes-14.jpg
import image from '../assets/mashed-potatoes.jpg';

export default function MashedPotatoes() {
  return (
    <img
      alt="mashed potatoes by Julie of thelittlekitchen.net"
      className="food-image"
      src={image}
    />
  );
}
