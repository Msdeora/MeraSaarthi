import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Gemini API proxy endpoint
app.post('/api/gemini', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    console.log('Received message:', message);

    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer AIzaSyAOSkTHcrbpFNX5dS2fhFhFOS_t4a7xsp0`
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `You are a helpful AI travel assistant for India. The user asked: "${message}". Please provide a helpful, informative response about travel in India, Indian culture, destinations, or any related topics. Keep responses concise but informative.`
          }]
        }]
      })
    });

    console.log('Gemini API response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', errorText);
      return res.status(response.status).json({ error: `Gemini API error: ${response.status}` });
    }

    const data = await response.json();
    console.log('Gemini API response data:', JSON.stringify(data, null, 2));
    
    if (data.error) {
      console.error('Gemini API returned error:', data.error);
      return res.status(400).json({ error: data.error.message });
    }
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      const responseText = data.candidates[0].content.parts[0].text;
      console.log('Sending response:', responseText);
      return res.json({ 
        response: responseText 
      });
    } else {
      console.error('Invalid response format from Gemini API:', data);
      return res.status(500).json({ error: 'Invalid response format from Gemini API' });
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return res.status(500).json({ error: 'Internal server error: ' + error.message });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`Gemini API endpoint: http://localhost:${PORT}/api/gemini`);
}); 