import React from 'react';

import Delayed from '../Delayed';

// image source: https://www.seriouseats.com/images/2015/11/20150923-Thanksgiving-spread-vicky-wasik-003-thumb-1500xauto-427107.jpg
import image from '../assets/stuffing.jpg';

function Stuffing() {
  return (
    <img
      alt="stuffing by Vicky Wasik"
      className="food-image"
      src={image}
    />
  );
}

export default function DelayedStuffing() {
  return (
    <Delayed waitBeforeShow={1800}>
      <Stuffing />
    </Delayed>
  )
}
