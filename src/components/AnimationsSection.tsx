import React from 'react';
import { motion } from 'framer-motion';

const AnimationsSection: React.FC = () => {
  const touristSpots = [
    { name: 'Taj Mahal', emoji: '🕌', region: 'North India' },
    { name: 'Gateway of India', emoji: '🏛️', region: 'West India' },
    { name: 'Meenakshi Temple', emoji: '⛩️', region: 'South India' },
    { name: 'Victoria Memorial', emoji: '🏰', region: 'East India' },
    { name: 'Hawa Mahal', emoji: '🏮', region: 'Rajasthan' },
    { name: 'Konark Temple', emoji: '☀️', region: 'Odisha' }
  ];

  const culturalElements = [
    { item: 'Classical Dance', emoji: '💃', tradition: 'Bharatanatyam' },
    { item: 'Traditional Music', emoji: '🎵', tradition: 'Ragas' },
    { item: 'Festival Celebrations', emoji: '🎉', tradition: 'Diwali' },
    { item: 'Yoga & Meditation', emoji: '🧘', tradition: 'Ancient Practice' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-saffron-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
            Discover <span className="text-saffron-300">India's Magic</span> Through Technology
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Immerse yourself in India's rich heritage through interactive animations and cultural experiences
          </p>
        </motion.div>

        {/* 3D India Map Simulation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-center mb-8">Interactive India Map</h3>
            
            <div className="relative w-full max-w-2xl mx-auto">
              {/* Simulated 3D Map */}
              <motion.div
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-64 h-48 mx-auto bg-gradient-to-br from-green-400 via-yellow-500 to-orange-600 rounded-2xl shadow-2xl flex items-center justify-center text-6xl relative"
                style={{
                  background: 'linear-gradient(45deg, #ff9933, #ffffff, #138808)',
                  backgroundSize: '300% 300%',
                  animation: 'gradient 6s ease infinite'
                }}
              >
                🗺️
                
                {/* Floating Tourist Spots */}
                {touristSpots.map((spot, index) => (
                  <motion.div
                    key={spot.name}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      y: [-20, 20, -20],
                      x: [Math.cos(index * 60) * 50, Math.cos((index * 60) + 180) * 50]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    className="absolute text-2xl"
                    style={{
                      left: `${20 + (index % 3) * 30}%`,
                      top: `${20 + Math.floor(index / 3) * 40}%`
                    }}
                  >
                    {spot.emoji}
                  </motion.div>
                ))}
              </motion.div>
              
              <p className="text-center mt-4 text-white/80">
                Click on regions to explore destinations
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cultural Animations Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {culturalElements.map((element, index) => (
            <motion.div
              key={element.item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
                className="text-4xl mb-4"
              >
                {element.emoji}
              </motion.div>
              <h4 className="text-lg font-semibold mb-2">{element.item}</h4>
              <p className="text-white/70 text-sm">{element.tradition}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Parallax Scrolling Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative h-64 rounded-3xl overflow-hidden bg-gradient-to-r from-saffron-500 to-indigo-600"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ x: [-100, 100, -100] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="text-8xl opacity-30"
            >
              🚂
            </motion.div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center z-10">
              <h3 className="text-3xl font-bold mb-2">Journey Through Time</h3>
              <p className="text-white/90">Experience India's heritage come alive</p>
            </div>
          </div>
          
          {/* Floating Elements */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.sin(i) * 20, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5
              }}
              className="absolute text-2xl opacity-40"
              style={{
                left: `${10 + (i * 10)}%`,
                top: `${20 + (i % 3) * 20}%`
              }}
            >
              {['🏛️', '🕌', '⛩️', '🏰', '🎭', '🎨', '🪔', '🎪'][i]}
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Feature Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold mb-8">Interactive Features Coming Soon</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'AR Navigation', desc: 'Point your camera to discover history', icon: '📱' },
              { title: 'Voice Guide', desc: 'Listen to stories in your language', icon: '🎧' },
              { title: 'Virtual Tours', desc: 'Explore monuments from anywhere', icon: '🥽' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-white/80">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default AnimationsSection;