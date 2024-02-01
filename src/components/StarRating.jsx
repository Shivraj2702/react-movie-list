import React from 'react';
import { Rating } from '@mui/material';

const StarRating = ({ rating }) => {
  return (
    <Rating
      name="half-rating"
      value={rating / 2} 
      precision={0.5}
      readOnly
    />
  );
};

export default StarRating;
