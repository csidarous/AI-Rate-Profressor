import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Help() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f7f7f7"
      padding="500px"
      textAlign="center"
    >
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: '#3f51b5',
          marginBottom: '30px',
        }}
      >
        AI Rate My Professor - Help & FAQs
      </Typography>

      <Box width="80%" maxWidth="800px">
        <Accordion>
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6" sx={{ color: '#3f51b5' }}>
              What is AI Rate My Professor?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{ color: '#555' }}>
              AI Rate My Professor is an AI-powered platform where you can ask questions about professors and receive accurate ratings and insights. Our chatbot is designed to help you make informed decisions about your classes and instructors.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6" sx={{ color: '#3f51b5' }}>
              How can I ask questions to the chatbot?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{ color: '#555' }}>
              Simply navigate to the chat page, type your question about a professor, and the AI will provide you with the best possible answer, including ratings, reviews, and more.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography variant="h6" sx={{ color: '#3f51b5' }}>
              Is AI Rate My Professor specific to my school?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{ color: '#555' }}>
              We are currently working on making the service specific to different schools, allowing you to get tailored ratings and insights about professors at your institution. Stay tuned for updates!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography variant="h6" sx={{ color: '#3f51b5' }}>
              What features are coming next?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" sx={{ color: '#555' }}>
              We're working on adding more features, including school-specific ratings, detailed professor reviews, and the ability to compare professors. Our goal is to make this the most comprehensive professor rating platform available.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}

export default Help;
