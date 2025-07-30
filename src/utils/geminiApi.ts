export interface GeminiResponse {
  response?: string;
  error?: string;
}

export const callGeminiAPI = async (userMessage: string): Promise<string> => {
  try {
    const response = await fetch('http://localhost:3001/api/gemini', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userMessage
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: GeminiResponse = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }
    
    if (data.response) {
      return data.response;
    } else {
      throw new Error('Invalid response format from server');
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    
    // Enhanced fallback responses for common travel questions
    const fallbackResponses: { [key: string]: string } = {
      'capital': 'Delhi is the capital of India. It\'s a fascinating city that serves as the seat of government and is home to important landmarks like the Red Fort, India Gate, and Rashtrapati Bhavan.',
      'delhi': 'Delhi, India\'s capital, is a fascinating blend of old and new. Visit the historic Red Fort, Humayun\'s Tomb, and Qutub Minar. Don\'t miss the bustling markets of Chandni Chowk and the modern Connaught Place.',
      'taj mahal': 'The Taj Mahal in Agra is one of India\'s most iconic monuments. Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, it\'s a UNESCO World Heritage site and a symbol of eternal love. Best visited at sunrise or sunset for the most beautiful views.',
      'mumbai': 'Mumbai, the financial capital, offers Gateway of India, Marine Drive, and the famous Juhu Beach. The city is known for Bollywood, street food, and the iconic local trains.',
      'kerala': 'Kerala, "God\'s Own Country," is famous for its backwaters, Ayurveda, and beautiful beaches. Take a houseboat ride in Alleppey, visit Munnar\'s tea gardens, and enjoy the serene beaches of Kovalam.',
      'rajasthan': 'Rajasthan is known for its royal heritage, colorful cities, and desert landscapes. Visit Jaipur\'s Pink City, Udaipur\'s Lake Palace, Jodhpur\'s Blue City, and the golden sands of Jaisalmer.',
      'goa': 'Goa is India\'s beach paradise, famous for its Portuguese heritage, beautiful beaches, and vibrant nightlife. Visit Old Goa churches, enjoy water sports, and savor the delicious seafood.',
      'food': 'Indian cuisine is incredibly diverse! Try butter chicken in Delhi, dosa in South India, biryani in Hyderabad, and street food like pani puri and chaat. Each region has its unique flavors and specialties.',
      'culture': 'India\'s culture is rich and diverse, with over 1.3 billion people speaking 22 official languages. From classical dance forms like Bharatanatyam to festivals like Diwali and Holi, there\'s always something to celebrate.',
      'transport': 'India has extensive rail and bus networks. For long distances, consider trains (book in advance) or domestic flights. In cities, use metro systems, auto-rickshaws, or ride-sharing apps.',
      'safety': 'India is generally safe for tourists. Use common sense, avoid isolated areas at night, and be cautious with street food. Keep emergency numbers handy and consider travel insurance.',
      'weather': 'India has diverse climate zones. The best time to visit most of India is from October to March (winter). Monsoon season is June-September, and summer is April-June. Check specific regions for optimal timing.',
      'visa': 'Most foreign nationals need a visa to visit India. Apply online through the Indian government\'s e-Visa portal. Processing usually takes 3-5 business days. Keep your passport valid for at least 6 months beyond your stay.',
      'currency': 'India uses the Indian Rupee (INR). Major cities have ATMs and card acceptance. Carry some cash for smaller vendors and rural areas. Exchange rates are usually better at banks than airports.',
      'language': 'India has 22 official languages, with Hindi and English being most widely spoken. English is commonly used in tourist areas. Learning basic Hindi phrases like "Namaste" (hello) and "Dhanyavaad" (thank you) is appreciated.',
      'population': 'India is the world\'s most populous country with over 1.4 billion people. It\'s incredibly diverse with people from various ethnicities, religions, and cultures living together.',
      'religion': 'India is the birthplace of major religions including Hinduism, Buddhism, Jainism, and Sikhism. It\'s also home to significant Muslim, Christian, and other religious communities.',
      'festival': 'India celebrates numerous festivals throughout the year. Diwali (Festival of Lights), Holi (Festival of Colors), Eid, Christmas, and many regional festivals showcase the country\'s cultural diversity.',
      'clothing': 'Traditional Indian clothing includes sarees for women and kurta-pajama or dhoti for men. Western clothing is also common in cities. Modest dress is appreciated, especially when visiting religious sites.',
      'music': 'Indian classical music has two main traditions: Hindustani (North) and Carnatic (South). Bollywood music is popular worldwide. Traditional instruments include sitar, tabla, and veena.',
      'dance': 'India has eight classical dance forms including Bharatanatyam, Kathak, and Odissi. Folk dances vary by region, from Bhangra in Punjab to Garba in Gujarat.',
      'yoga': 'Yoga originated in India over 5,000 years ago. Rishikesh is known as the "Yoga Capital of the World" and offers many ashrams and yoga schools for visitors.',
      'ayurveda': 'Ayurveda is India\'s traditional system of medicine. Kerala is famous for Ayurvedic treatments and wellness retreats. Many resorts offer authentic Ayurvedic therapies.',
      'spice': 'India is famous for its spices! Visit spice markets in cities like Kochi, Mumbai, and Delhi. Popular spices include turmeric, cardamom, cinnamon, and black pepper.',
      'tea': 'India is the world\'s second-largest tea producer. Assam and Darjeeling are famous tea regions. Visit tea gardens in Darjeeling or enjoy masala chai anywhere in India.',
      'beach': 'India has beautiful beaches on both coasts. Popular ones include Goa beaches, Kovalam in Kerala, Andaman Islands, and beaches in Maharashtra and Karnataka.',
      'mountain': 'The Himalayas offer incredible trekking opportunities. Popular destinations include Manali, Shimla, Darjeeling, and Ladakh. The Western Ghats also have scenic hill stations.',
      'wildlife': 'India has diverse wildlife and many national parks. Visit Ranthambore for tigers, Kaziranga for rhinos, and Periyar for elephants. Jim Corbett and Bandhavgarh are famous tiger reserves.',
      'shopping': 'India offers incredible shopping experiences! Buy textiles in Jaipur, spices in Kochi, jewelry in Delhi, and handicrafts everywhere. Remember to bargain in local markets.',
      'hospitality': 'Indian hospitality is legendary with the concept of "Atithi Devo Bhava" (Guest is God). You\'ll find warm welcomes, generous hospitality, and genuine care for visitors throughout India.'
    };

    const lowerMessage = userMessage.toLowerCase();
    
    // Check for exact matches first
    for (const [keyword, response] of Object.entries(fallbackResponses)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }

    // Check for common question patterns
    if (lowerMessage.includes('what is') || lowerMessage.includes('what\'s')) {
      if (lowerMessage.includes('capital')) {
        return fallbackResponses['capital'];
      }
      if (lowerMessage.includes('population')) {
        return fallbackResponses['population'];
      }
      if (lowerMessage.includes('currency')) {
        return fallbackResponses['currency'];
      }
    }

    if (lowerMessage.includes('how to') || lowerMessage.includes('how do')) {
      if (lowerMessage.includes('travel') || lowerMessage.includes('transport')) {
        return fallbackResponses['transport'];
      }
      if (lowerMessage.includes('visa')) {
        return fallbackResponses['visa'];
      }
      if (lowerMessage.includes('safe')) {
        return fallbackResponses['safety'];
      }
    }

    return 'I\'m here to help you explore India! You can ask me about destinations, culture, food, transportation, safety tips, weather, visas, currency, language, population, religion, festivals, clothing, music, dance, yoga, Ayurveda, spices, tea, beaches, mountains, wildlife, shopping, or hospitality. What would you like to know?';
  }
}; 