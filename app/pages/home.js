import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleChatNavigation = () => {
    navigate('/chat');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="#f0f0f0"
      textAlign="center"
      padding="500px"
    >
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: '#3f51b5',
        }}
      >
        Welcome to AI Rate My Professor
      </Typography>
      <Typography
        variant="h5"
        component="p"
        gutterBottom
        sx={{
          marginBottom: '40px',
          color: '#555',
        }}
      >
        Get accurate ratings and insights about your professors. Powered by AI.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleChatNavigation}
        sx={{
          backgroundColor: '#3f51b5',
          padding: '10px 20px',
          fontSize: '16px',
        }}
      >
        Chat with AI to Get Ratings
      </Button>
    </Box>
  );
}

export default Home;
