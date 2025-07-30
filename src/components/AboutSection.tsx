import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Users, Award, MapPin, Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const stats = [
    { icon: Users, label: 'Happy Travelers', value: '50,000+' },
    { icon: MapPin, label: 'Destinations Covered', value: '500+' },
    { icon: Award, label: 'Awards Won', value: '15+' },
    { icon: Heart, label: 'User Rating', value: '4.9/5' }
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-poppins">
            About <span className="bg-gradient-to-r from-indigo-600 to-saffron-500 bg-clip-text text-transparent">MeraSaarthi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-saffron-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Journey to Make Yours Easier
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-indigo-500 to-saffron-500 flex items-center justify-center">
                {!isVideoPlaying ? (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsVideoPlaying(true)}
                    className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-6 text-white hover:bg-white/30 transition-all duration-300"
                  >
                    <Play className="w-12 h-12 ml-1" />
                  </motion.button>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🎬</div>
                      <p className="text-xl">Introduction Video Playing...</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-saffron-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-800">
                Transforming Travel with AI
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                MeraSaarthi combines the wisdom of traditional Indian hospitality with cutting-edge AI technology to create personalized travel experiences that celebrate India's rich heritage and diverse culture.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to make every journey through Bharat meaningful, safe, and unforgettable by providing intelligent guidance that respects local traditions while embracing modern convenience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'AI-Powered', desc: 'Smart recommendations' },
                { title: 'Cultural Focus', desc: 'Heritage preservation' },
                { title: '24/7 Support', desc: 'Always available' },
                { title: 'Local Insights', desc: 'Authentic experiences' }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl"
                >
                  <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-indigo-500 to-saffron-500 rounded-3xl p-8 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-white/90 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technology Showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Powered by Advanced Technology</h3>
          <motion.div
            animate={{ 
              background: [
                'linear-gradient(45deg, #ff9933, #ffffff, #138808)',
                'linear-gradient(45deg, #138808, #ff9933, #ffffff)',
                'linear-gradient(45deg, #ffffff, #138808, #ff9933)'
              ]
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="w-64 h-40 mx-auto rounded-2xl shadow-lg flex items-center justify-center text-6xl"
          >
            🤖
          </motion.div>
          <p className="mt-4 text-gray-600">
            AI-driven insights for smarter travel decisions
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;