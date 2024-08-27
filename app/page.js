"use client";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Help from './pages/Help';
import Settings from './pages/Settings';
import Navbar from './components/Navbar'; 
import { Box } from '@mui/material';

function App() {
  return (
    <Router>
      <Box position="absolute" top="30px" left="20px" zIndex={1}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/help" element={<Help />} />
          {/* <Route path="/settings" element={<Settings />} /> */}
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
