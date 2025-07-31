import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from './config';

// User profile interface
export interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  country?: string;
  currency?: string;
  preferences?: {
    interests: string[];
    budget: string;
    travelStyle: string[];
  };
  createdAt: any;
  updatedAt: any;
}

// Chat message interface
export interface ChatMessage {
  id?: string;
  userId: string;
  message: string;
  isUser: boolean;
  timestamp: any;
  sessionId: string;
}

// Travel destination interface
export interface TravelDestination {
  id?: string;
  name: string;
  description: string;
  category: string;
  location: {
    state: string;
    city: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  rating: number;
  imageUrl?: string;
  tags: string[];
}

// User Profile Operations
export const createUserProfile = async (userData: UserProfile) => {
  try {
    const userRef = doc(db, 'users', userData.uid);
    await setDoc(userRef, {
      ...userData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return userData;
  } catch (error: any) {
    throw new Error(`Error creating user profile: ${error.message}`);
  }
};

export const getUserProfile = async (uid: string) => {
  try {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return userSnap.data() as UserProfile;
    } else {
      return null;
    }
  } catch (error: any) {
    throw new Error(`Error getting user profile: ${error.message}`);
  }
};

export const updateUserProfile = async (uid: string, updates: Partial<UserProfile>) => {
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      ...updates,
      updatedAt: serverTimestamp()
    });
  } catch (error: any) {
    throw new Error(`Error updating user profile: ${error.message}`);
  }
};

// Chat Operations
export const saveChatMessage = async (message: Omit<ChatMessage, 'id'>) => {
  try {
    const chatRef = collection(db, 'chat_messages');
    const docRef = await addDoc(chatRef, {
      ...message,
      timestamp: serverTimestamp()
    });
    return docRef.id;
  } catch (error: any) {
    throw new Error(`Error saving chat message: ${error.message}`);
  }
};

export const getChatHistory = async (userId: string, sessionId: string, limitCount: number = 50) => {
  try {
    const chatRef = collection(db, 'chat_messages');
    const q = query(
      chatRef,
      where('userId', '==', userId),
      where('sessionId', '==', sessionId),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    const messages: ChatMessage[] = [];
    
    querySnapshot.forEach((doc) => {
      messages.push({ id: doc.id, ...doc.data() } as ChatMessage);
    });
    
    return messages.reverse(); // Return in chronological order
  } catch (error: any) {
    throw new Error(`Error getting chat history: ${error.message}`);
  }
};

// Travel Destinations Operations
export const getDestinations = async (category?: string) => {
  try {
    const destRef = collection(db, 'destinations');
    let q = query(destRef, orderBy('rating', 'desc'));
    
    if (category) {
      q = query(destRef, where('category', '==', category), orderBy('rating', 'desc'));
    }
    
    const querySnapshot = await getDocs(q);
    const destinations: TravelDestination[] = [];
    
    querySnapshot.forEach((doc) => {
      destinations.push({ id: doc.id, ...doc.data() } as TravelDestination);
    });
    
    return destinations;
  } catch (error: any) {
    throw new Error(`Error getting destinations: ${error.message}`);
  }
};

export const searchDestinations = async (searchTerm: string) => {
  try {
    const destRef = collection(db, 'destinations');
    const q = query(
      destRef,
      where('tags', 'array-contains', searchTerm.toLowerCase())
    );
    
    const querySnapshot = await getDocs(q);
    const destinations: TravelDestination[] = [];
    
    querySnapshot.forEach((doc) => {
      destinations.push({ id: doc.id, ...doc.data() } as TravelDestination);
    });
    
    return destinations;
  } catch (error: any) {
    throw new Error(`Error searching destinations: ${error.message}`);
  }
};

// User Preferences Operations
export const saveUserPreferences = async (uid: string, preferences: any) => {
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      preferences,
      updatedAt: serverTimestamp()
    });
  } catch (error: any) {
    throw new Error(`Error saving user preferences: ${error.message}`);
  }
}; 