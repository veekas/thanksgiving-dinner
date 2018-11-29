import React from 'react';

import Delayed from '../Delayed';

// image source: https://www.simplyrecipes.com/wp-content/uploads/2005/12/how-to-make-gravy-horiz-a-1600.jpg
import image from '../assets/gravy.jpg';

function Gravy() {
  return (
    <img
      alt="gravy by Elise Bauer"
      className="food-image"
      src={image}
    />
  );
}

export default function DelayedGravy() {
  return (
    <Delayed waitBeforeShow={2000}>
      <Gravy />
    </Delayed>
  )
}
