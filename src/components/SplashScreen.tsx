import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-saffron-400 via-royal-500 to-indigo-600 relative overflow-hidden"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Floating Cultural Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {['🕌', '🏛️', '⛩️', '🗿', '🎭', '🎨', '🪔', '🎪'].map((icon, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            className="absolute text-3xl"
            style={{
              left: `${10 + (i * 10)}%`,
              top: `${20 + (i % 4) * 20}%`
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Animated Guide Character */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.6 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto relative">
            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-4 border-white border-t-transparent"
            />
            
            {/* Middle Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border-2 border-white/50 border-b-transparent"
            />
            
            {/* Inner Circle */}
            <div className="absolute inset-4 bg-gradient-to-br from-royal-400 to-saffron-500 rounded-full flex items-center justify-center shadow-2xl">
              <motion.div
                animate={{ 
                  y: [-5, 5, -5],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-white text-4xl"
              >
                🧳
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Welcome Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4 font-poppins"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 40px rgba(255,255,255,0.8)",
                "0 0 20px rgba(255,255,255,0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            MeraSaarthi
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 font-poppins"
            animate={{ 
              opacity: [0.7, 1, 0.7],
              y: [0, -3, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Explore Bharat with AI Guidance
          </motion.p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "300px", opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mx-auto bg-white/20 rounded-full h-3 overflow-hidden shadow-lg"
        >
          <motion.div
            style={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-white to-white/80 rounded-full transition-all duration-100 relative overflow-hidden"
          >
            {/* Progress Bar Shimmer */}
            <motion.div
              animate={{ x: [-100, 100, -100] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
            />
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-4"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/80 text-sm"
          >
            Loading your journey...
          </motion.p>
        </motion.div>

        {/* Progress Percentage */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.4 }}
          className="mt-2"
        >
          <motion.span
            className="text-white/90 font-semibold"
            animate={{ 
              scale: [1, 1.1, 1],
              color: ["rgba(255,255,255,0.9)", "rgba(255,255,255,1)", "rgba(255,255,255,0.9)"]
            }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {progress}%
          </motion.span>
        </motion.div>

        {/* Iconic Landmarks Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-8 flex justify-center space-x-6 text-3xl"
        >
          {['🕌', '🏛️', '⛩️', '🗿', '🎭', '🎨'].map((icon, index) => (
            <motion.span
              key={index}
              animate={{ 
                y: [-10, 10, -10],
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.3
              }}
              className="text-white/80 hover:text-white cursor-pointer"
            >
              {icon}
            </motion.span>
          ))}
        </motion.div>

        {/* Bottom Wave Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/60 text-sm"
          >
            ↓ Scroll to explore ↓
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;