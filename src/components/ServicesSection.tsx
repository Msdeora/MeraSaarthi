import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Compass, 
  Camera, 
  Shield, 
  Star, 
  Calendar,
  Headphones,
  Globe
} from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  const freeServices = [
    {
      title: 'Basic Recommendations',
      description: 'Get AI-powered suggestions for popular tourist destinations',
      icon: MapPin,
      features: [
        'Top 10 destinations in each state',
        'Basic travel information',
        'Weather updates',
        'Travel tips'
      ]
    },
    {
      title: 'Heritage Facts',
      description: 'Learn about Indian history and culture',
      icon: Star,
      features: [
        'Historical facts about monuments',
        'Cultural significance',
        'Local legends and stories',
        'Photo spots'
      ]
    }
  ];

  const premiumServices = [
    {
      title: 'Custom AI Itinerary',
      description: 'Personalized travel plans based on your preferences',
      icon: Calendar,
      price: '₹499',
      features: [
        'Personalized day-by-day itinerary',
        'Budget optimization',
        'Real-time adjustments',
        'Local insider tips',
        'Restaurant recommendations'
      ]
    },
    {
      title: 'Live Guide Mode',
      description: '24/7 AI assistant for real-time travel guidance',
      icon: Headphones,
      price: '₹299',
      features: [
        'Voice-activated assistance',
        'Real-time navigation',
        'Emergency support',
        'Language translation',
        'Local events updates'
      ]
    },
    {
      title: 'AR Navigation',
      description: 'Augmented reality guidance for temples and forts',
      icon: Compass,
      price: '₹799',
      features: [
        'AR-powered directions',
        'Interactive historical overlays',
        'Virtual tour guide',
        'Photo enhancement',
        'Offline capabilities'
      ]
    },
    {
      title: 'Safety & Support',
      description: 'Complete travel safety and emergency assistance',
      icon: Shield,
      price: '₹199',
      features: [
        'Emergency contact integration',
        'Real-time safety alerts',
        'Medical assistance',
        'Travel insurance guidance',
        'Local authority contacts'
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-3 h-3 bg-gradient-to-r from-orange-400 to-purple-600 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-poppins"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(99,102,241,0.3)",
                "0 0 40px rgba(99,102,241,0.6)",
                "0 0 20px rgba(99,102,241,0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Our <span className="bg-gradient-to-r from-indigo-600 to-saffron-500 bg-clip-text text-transparent">Services</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            animate={{ 
              opacity: [0.7, 1, 0.7],
              y: [0, -3, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Discover India with our comprehensive travel services, from free basic features to premium AI-powered experiences
          </motion.p>
        </motion.div>

        {/* Free Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center mb-8">
            <motion.div 
              className="bg-green-100 text-green-800 px-6 py-2 rounded-full font-semibold"
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 4px 15px rgba(34,197,94,0.3)",
                  "0 8px 25px rgba(34,197,94,0.5)",
                  "0 4px 15px rgba(34,197,94,0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎉 Free Services
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {freeServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Premium Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-8">
            <motion.div 
              className="bg-gradient-to-r from-royal-500 to-saffron-500 text-white px-6 py-2 rounded-full font-semibold"
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 4px 15px rgba(99,102,241,0.3)",
                  "0 8px 25px rgba(99,102,241,0.5)",
                  "0 4px 15px rgba(99,102,241,0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⭐ Premium Services
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {premiumServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
              >
                <ServiceCard {...service} isPremium />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div 
            className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden"
            animate={{ 
              background: [
                "linear-gradient(45deg, #6366f1, #8b5cf6)",
                "linear-gradient(45deg, #8b5cf6, #6366f1)",
                "linear-gradient(45deg, #6366f1, #8b5cf6)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {/* Floating Elements */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                  rotate: [0, 360],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 8 + i,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
                className="absolute text-2xl opacity-40"
                style={{
                  left: `${10 + (i * 15)}%`,
                  top: `${20 + (i % 3) * 20}%`
                }}
              >
                {['🚀', '⭐', '🎯', '💎', '🌟', '🏆'][i]}
              </motion.div>
            ))}
            
            <div className="relative z-10">
              <motion.h3 
                className="text-3xl font-bold mb-4"
                animate={{ 
                  scale: [1, 1.02, 1],
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.5)",
                    "0 0 40px rgba(255,255,255,0.8)",
                    "0 0 20px rgba(255,255,255,0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Ready to Start Your Journey?
              </motion.h3>
              <motion.p 
                className="text-xl mb-6 opacity-90"
                animate={{ 
                  opacity: [0.8, 1, 0.8],
                  y: [0, -2, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Join thousands of travelers exploring India with MeraSaarthi
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: [
                    "0 10px 30px rgba(255,255,255,0.2)",
                    "0 20px 40px rgba(255,255,255,0.4)",
                    "0 10px 30px rgba(255,255,255,0.2)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;