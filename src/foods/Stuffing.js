import React from 'react';

// image source: https://www.seriouseats.com/images/2015/11/20150923-Thanksgiving-spread-vicky-wasik-003-thumb-1500xauto-427107.jpg
import image from '../assets/stuffing.jpg';

export default function Stuffing() {
  return (
    <img
      alt="stuffing by Vicky Wasik"
      className="food-image"
      src={image}
    />
  );
}
