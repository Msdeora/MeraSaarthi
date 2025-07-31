import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import AuthScreen from './components/AuthScreen';
import Header from './components/Header';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import AnimationsSection from './components/AnimationsSection';
import FeedbackSection from './components/FeedbackSection';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

type AppState = 'splash' | 'auth' | 'main';

function App() {
  const [appState, setAppState] = useState<AppState>('splash');

  const handleSplashComplete = () => {
    setAppState('auth');
  };

  const handleAuthComplete = () => {
    setAppState('main');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 font-poppins">
      <AnimatePresence mode="wait">
        {appState === 'splash' && (
          <SplashScreen onComplete={handleSplashComplete} />
        )}
        
        {appState === 'auth' && (
          <AuthScreen onAuthComplete={handleAuthComplete} />
        )}
        
        {appState === 'main' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            
            {/* Hero Section */}
            <section id="home" className="pt-16 pb-20 bg-gradient-to-br from-orange-400 via-red-500 to-purple-600 overflow-hidden relative">
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      x: [0, 100, 0],
                      y: [0, -100, 0],
                      rotate: [0, 180, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 15 + i * 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute w-2 h-2 bg-white/20 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`
                    } as React.CSSProperties}
                  />
                ))}
              </div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                  >
                    <motion.h1 
                      className="text-5xl md:text-7xl font-bold text-white mb-6 font-poppins"
                      animate={{ 
                        textShadow: [
                          "0 0 20px rgba(255,255,255,0.5)",
                          "0 0 40px rgba(255,255,255,0.8)",
                          "0 0 20px rgba(255,255,255,0.5)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Explore{' '}
                      <motion.span 
                        className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent"
                        animate={{ 
                          scale: [1, 1.05, 1],
                          rotate: [0, 2, -2, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        Bharat
                      </motion.span>
                      <br />
                      <motion.span
                        animate={{ 
                          opacity: [0.8, 1, 0.8],
                          y: [0, -5, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      >
                        with AI Guidance
                      </motion.span>
                    </motion.h1>
                    <motion.p 
                      className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed"
                      animate={{ 
                        opacity: [0.7, 1, 0.7],
                        y: [0, -3, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    >
                      Your intelligent travel companion for discovering India's rich heritage, 
                      vibrant culture, and hidden gems through personalized AI recommendations
                    </motion.p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      animate={{ 
                        boxShadow: [
                          "0 10px 30px rgba(0,0,0,0.2)",
                          "0 20px 40px rgba(0,0,0,0.4)",
                          "0 10px 30px rgba(0,0,0,0.2)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                    >
                      Start Your Journey
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      animate={{ 
                        borderColor: ["rgba(255,255,255,0.5)", "rgba(255,255,255,1)", "rgba(255,255,255,0.5)"]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="bg-white/20 backdrop-blur-lg text-white px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-white/50 hover:border-white hover:shadow-xl transition-all duration-300"
                    >
                      Watch Demo
                    </motion.button>
                  </motion.div>

                  {/* Animated Pagadi Guide Character */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative"
                  >
                    <div className="w-64 h-64 mx-auto relative">
                      <motion.div
                        animate={{ 
                          y: [-10, 10, -10],
                          rotate: [-2, 2, -2],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-full h-full bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 rounded-full flex items-center justify-center text-8xl shadow-2xl"
                      >
                        👳‍♂️
                      </motion.div>
                      
                      {/* Floating Elements Around Guide */}
                      {[
                        { emoji: '🕌', delay: 0, radius: 120, angle: 0 },
                        { emoji: '🏛️', delay: 1, radius: 100, angle: 72 },
                        { emoji: '⛩️', delay: 2, radius: 110, angle: 144 },
                        { emoji: '🏰', delay: 3, radius: 130, angle: 216 },
                        { emoji: '🎭', delay: 4, radius: 105, angle: 288 }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          animate={{
                            x: [
                              Math.cos((item.angle * Math.PI) / 180) * item.radius,
                              Math.cos(((item.angle + 360) * Math.PI) / 180) * item.radius
                            ],
                            y: [
                              Math.sin((item.angle * Math.PI) / 180) * item.radius,
                              Math.sin(((item.angle + 360) * Math.PI) / 180) * item.radius
                            ],
                            rotate: [0, 360],
                            scale: [1, 1.2, 1]
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            delay: item.delay
                          }}
                          className="absolute top-1/2 left-1/2 text-4xl"
                          style={{ transformOrigin: 'center' } as React.CSSProperties}
                        >
                          {item.emoji}
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="mt-6 text-lg text-white/90 italic"
                    >
                      "Namaste! I'm your AI guide ready to show you incredible India"
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </section>

            <ServicesSection />
            <AboutSection />
            <AnimationsSection />
            <ContactSection />
            <FeedbackSection />
            <Footer />
            
            {/* AI Chatbot */}
            <Chatbot />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;