import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    component="button" // Use 'component' instead of 'type'
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
      borderTop: bodyPart === item ? '4px solid #FF2625' : 'none',
      background: '#fff',
      borderBottomLeftRadius: '20px',
      width: '270px',
      height: '282px',
      cursor: 'pointer',
      gap: '47px',
      '&:hover': {
        // Add any hover styles if needed
      },
      '@media (max-width: 600px)': {
        // Adjust styles for screens with a width of 600px or less
        width: '100%', // Example: Stack takes full width on smaller screens
      },
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
