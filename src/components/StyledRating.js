// src/components/StyledRating.js
import React from 'react';
import { Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

const EffortRating = (props) => {
  return (
    <StyledRating
      {...props}
      icon={<FitnessCenterIcon fontSize="inherit" />}
      emptyIcon={<FitnessCenterIcon fontSize="inherit" />}
      precision={1}
    />
  );
};

export default EffortRating;
