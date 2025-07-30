import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Heart, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:hello@merasaarthi.com', color: 'hover:text-red-500' },
    { icon: Phone, label: 'Phone', href: 'tel:+919876543210', color: 'hover:text-green-500' },
    { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-pink-500' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-600' },
    { icon: Youtube, label: 'YouTube', href: '#', color: 'hover:text-red-600' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Support', href: '#' }
  ];

  const destinations = [
    'Golden Triangle',
    'Kerala Backwaters',
    'Rajasthan Heritage',
    'Himalayan Adventures',
    'Goa Beaches',
    'South India Temples'
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1
            }}
            className="absolute text-4xl"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i % 3) * 25}%`
            }}
          >
            {['🕌', '🏛️', '⛩️', '🏰', '🎭', '🗿'][i]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-saffron-400 to-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">MS</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-saffron-300 to-indigo-300 bg-clip-text text-transparent font-poppins">
                    MeraSaarthi
                  </h2>
                  <p className="text-sm text-gray-300">AI Travel Companion</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted AI-powered guide to exploring the incredible diversity and rich heritage of Bharat.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-saffron-400" />
                  <span className="text-sm">hello@merasaarthi.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-saffron-400" />
                  <span className="text-sm">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-saffron-400" />
                  <span className="text-sm">Bangalore, Karnataka, India</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-saffron-300">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-white transition-all duration-300 text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-saffron-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Popular Destinations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-saffron-300">Popular Destinations</h3>
              <ul className="space-y-3">
                {destinations.map((destination) => (
                  <li key={destination}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-gray-300 hover:text-white transition-all duration-300 text-sm flex items-center group"
                    >
                      <span className="w-1 h-1 bg-indigo-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                      {destination}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-saffron-300">Stay Connected</h3>
              
              {/* Newsletter */}
              <div className="mb-6">
                <p className="text-gray-300 text-sm mb-4">
                  Get travel tips and destination updates delivered to your inbox.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent text-sm"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-saffron-500 to-indigo-600 rounded-r-lg hover:shadow-lg transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-medium mb-4 text-gray-300">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20`}
                      title={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-6"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <span>Built with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </motion.div>
                <span>by Team SaarthiX</span>
              </div>
              
              <div className="text-sm text-gray-300">
                © 2024 MeraSaarthi. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-300">
                <span>Made in</span>
                <motion.span
                  animate={{ 
                    background: ['linear-gradient(45deg, #ff9933, #ffffff, #138808)', 
                               'linear-gradient(45deg, #138808, #ff9933, #ffffff)',
                               'linear-gradient(45deg, #ffffff, #138808, #ff9933)']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="px-2 py-1 rounded text-black font-semibold"
                  style={{ background: 'linear-gradient(45deg, #ff9933, #ffffff, #138808)' }}
                >
                  🇮🇳 India
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Wave Animation */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-saffron-500 via-indigo-500 to-purple-500">
          <motion.div
            animate={{ x: [-100, 100, -100] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="w-20 h-full bg-white/30 rounded-full blur-sm"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;