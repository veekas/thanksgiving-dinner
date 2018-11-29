import React from 'react';

import Delayed from '../Delayed';

// image source: https://images.unsplash.com/photo-1509461399763-ae67a981b254
import image from '../assets/pie.jpeg';

function Pie() {
  return (
    <img
      alt="pumpkin pie by Element5 Digital"
      className="food-image"
      src={image}
    />
  );
}

export default function DelayedPie() {
  return (
    <Delayed waitBeforeShow={500}>
      <Pie />
    </Delayed>
  )
}
