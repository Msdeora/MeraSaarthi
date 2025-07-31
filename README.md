# MeraSaarthi - AI Travel Assistant

A modern travel website with an AI-powered chatbot that helps users explore India using the Gemini AI API.

## Features

- **Beautiful UI/UX**: Modern gradient designs with smooth animations
- **AI Chatbot**: Powered by Google's Gemini AI API for intelligent travel assistance
- **Responsive Design**: Works perfectly on all devices
- **Interactive Elements**: Smooth animations and transitions
- **Country-based Pricing**: Currency selection for international users
- **Comprehensive Travel Info**: Covers destinations, culture, food, safety, and more

## Recent Updates

✅ **Gradient Backgrounds**: Full website background gradient with distinct hero section
✅ **Header Styling**: Beautiful gradient header with enhanced navigation
✅ **Text Animations**: Animated text effects throughout the website
✅ **Content Updates**: Removed "Experience Bharat in Motion" and "Explore Every Corner of Bharat"
✅ **AI Chatbot**: Integrated Gemini AI-powered chatbot for travel assistance
✅ **International Support**: Country selection and currency handling for global users

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + Framer Motion
- **AI**: Google Gemini AI API
- **Backend**: Express.js (for API proxy)
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Icons**: Lucide React

## Installation

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Firebase Setup**:
   - Follow the detailed setup guide in `FIREBASE_SETUP.md`
   - Create a Firebase project with your Gmail ID: `maheshwarsinghdeora@gmail.com`
   - Update the Firebase configuration in `src/firebase/config.ts`

3. **Start the Development Server**:
   ```bash
   npm run dev:full
   ```
   This will start both the frontend (Vite) and backend (Express) servers.

4. **Access the Application**:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001

## AI Chatbot Features

The chatbot can answer questions about:
- **Destinations**: Taj Mahal, Delhi, Mumbai, Kerala, Rajasthan, Goa
- **Culture**: Indian traditions, festivals, languages
- **Food**: Regional cuisines, street food, restaurants
- **Transportation**: Trains, buses, metro, local transport
- **Safety**: Travel tips, emergency contacts
- **Weather**: Best time to visit, climate information
- **Visa**: Requirements, application process
- **Currency**: Exchange rates, payment methods
- **Language**: Basic phrases, communication tips

## API Configuration

The application uses the Gemini AI API with the provided key. The backend server acts as a proxy to handle CORS issues and provide better error handling.

## Project Structure

```
src/
├── components/
│   ├── Chatbot.tsx          # AI Chatbot component
│   ├── Header.tsx           # Navigation header
│   ├── AuthScreen.tsx       # Login/Signup with country selection
│   └── ...                  # Other components
├── firebase/
│   ├── config.ts            # Firebase configuration
│   ├── auth.ts              # Authentication utilities
│   └── firestore.ts         # Database operations
├── utils/
│   └── geminiApi.ts         # Gemini API integration
└── App.tsx                  # Main application
```

## Usage

1. **Navigation**: Use the header to navigate between sections
2. **Chatbot**: Click the floating bot icon in the bottom-right corner
3. **Authentication**: Sign up with country selection for international users
4. **AI Assistance**: Ask the chatbot any travel-related questions about India

## Development

- **Frontend Only**: `npm run dev`
- **Backend Only**: `npm run server`
- **Full Stack**: `npm run dev:full`

## Environment Variables

For production, consider using environment variables:

```env
# Gemini API
GEMINI_API_KEY=your_api_key_here

# Firebase Configuration
VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is for educational purposes. Please ensure you comply with Google's Gemini API terms of service. 