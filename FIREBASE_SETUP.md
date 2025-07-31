# Firebase Setup Guide for MeraSaarthi

## Project Details
- **Project Name**: MeraSaarthi - AI Travel Companion
- **Gmail ID**: maheshwarsinghdeora@gmail.com
- **Purpose**: Travel recommendation and AI chatbot platform

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter project name: `merasaarthi-travel`
4. Enable Google Analytics (optional but recommended)
5. Choose your Analytics account or create a new one
6. Click "Create project"

## Step 2: Enable Authentication

1. In Firebase Console, go to "Authentication" in the left sidebar
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Email/Password" authentication
5. Click "Save"

## Step 3: Create Firestore Database

1. In Firebase Console, go to "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location closest to your users (e.g., "asia-south1" for India)
5. Click "Done"

## Step 4: Get Firebase Configuration

1. In Firebase Console, click the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>)
5. Register app with name: "MeraSaarthi Web App"
6. Copy the firebaseConfig object

## Step 5: Update Configuration

Replace the placeholder values in `src/firebase/config.ts` with your actual Firebase configuration:

```typescript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

## Step 6: Install Firebase Dependencies

Run this command in your project directory:
```bash
npm install firebase
```

## Step 7: Set Up Firestore Security Rules

In Firebase Console > Firestore Database > Rules, replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own profile
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Users can read/write their own chat messages
    match /chat_messages/{messageId} {
      allow read, write: if request.auth != null && 
        request.auth.uid == resource.data.userId;
    }
    
    // Anyone can read destinations
    match /destinations/{destinationId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Step 8: Create Sample Data

You can add sample destinations to your Firestore database:

1. Go to Firestore Database in Firebase Console
2. Click "Start collection"
3. Collection ID: `destinations`
4. Add documents with fields:
   - name: "Taj Mahal"
   - description: "Iconic white marble mausoleum"
   - category: "Heritage"
   - location: { state: "Uttar Pradesh", city: "Agra" }
   - rating: 4.8
   - tags: ["taj mahal", "agra", "heritage", "monument"]

## Step 9: Environment Variables (Optional)

Create a `.env` file in your project root:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

Then update `src/firebase/config.ts`:

```typescript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
```

## Features Implemented

### Authentication
- User registration with email/password
- User login/logout
- Profile management with country and currency preferences

### Database Collections
- `users`: User profiles and preferences
- `chat_messages`: AI chatbot conversation history
- `destinations`: Travel destinations and recommendations

### Key Features
- Country-based currency detection during signup
- Chat history persistence
- User preference storage
- Travel destination database
- Real-time authentication state management

## Testing

1. Start your development server: `npm run dev`
2. Test user registration with different countries
3. Test AI chatbot conversations
4. Verify data is saved to Firestore

## Deployment

When deploying to Netlify:
1. Add your Firebase configuration to environment variables
2. Ensure Firestore security rules are properly set
3. Test authentication and database operations in production

## Support

For Firebase-related issues:
- Check Firebase Console for error logs
- Verify security rules are correct
- Ensure API keys are properly configured
- Check network connectivity and CORS settings 