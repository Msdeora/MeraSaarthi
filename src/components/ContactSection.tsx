import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Show success message (you could use a toast library here)
    alert('Message sent successfully! We\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 98765 43210',
      subtext: 'Mon-Sun 6AM-11PM IST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@merasaarthi.com',
      subtext: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: 'Bangalore, Karnataka',
      subtext: 'Silicon Valley of India'
    }
  ];

  const socialLinks = [
    { platform: 'Instagram', icon: '📸', color: 'from-pink-500 to-purple-600' },
    { platform: 'Twitter', icon: '🐦', color: 'from-blue-400 to-blue-600' },
    { platform: 'LinkedIn', icon: '💼', color: 'from-blue-600 to-blue-800' },
    { platform: 'YouTube', icon: '🎥', color: 'from-red-500 to-red-600' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 80, 0],
              y: [0, -80, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full"
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
            Get in <span className="bg-gradient-to-r from-indigo-600 to-saffron-500 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            animate={{ 
              opacity: [0.7, 1, 0.7],
              y: [0, -3, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Have questions about your next adventure? We're here to help you plan the perfect journey through India.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h3 
                className="text-3xl font-bold text-gray-800 mb-6"
                animate={{ 
                  scale: [1, 1.02, 1],
                  textShadow: [
                    "0 0 10px rgba(99,102,241,0.2)",
                    "0 0 20px rgba(99,102,241,0.4)",
                    "0 0 10px rgba(99,102,241,0.2)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Let's Connect
              </motion.h3>
              <motion.p 
                className="text-lg text-gray-600 mb-8"
                animate={{ 
                  opacity: [0.8, 1, 0.8],
                  y: [0, -2, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Our team of travel experts is ready to assist you in creating unforgettable memories across India.
              </motion.p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.03,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    animate={{
                      background: [
                        "linear-gradient(45deg, #e0e7ff, #f3e8ff)",
                        "linear-gradient(45deg, #f3e8ff, #e0e7ff)",
                        "linear-gradient(45deg, #e0e7ff, #f3e8ff)"
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  
                  <div className="flex items-start space-x-4 relative z-10">
                    <motion.div 
                      className="bg-gradient-to-br from-indigo-100 to-saffron-100 p-3 rounded-full"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <info.icon className="w-6 h-6 text-indigo-600" />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">{info.title}</h4>
                      <p className="text-indigo-600 font-medium mb-1">{info.details}</p>
                      <p className="text-gray-500 text-sm">{info.subtext}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <motion.h4 
                className="text-xl font-semibold text-gray-800 mb-4"
                animate={{ 
                  opacity: [0.8, 1, 0.8],
                  x: [0, 5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Follow Our Journey
              </motion.h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={social.platform}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 2, repeat: Infinity }}
                    whileHover={{ 
                      scale: 1.15, 
                      y: -5,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      y: [0, -3, 0]
                    }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${social.color} text-white flex items-center justify-center text-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    {social.icon}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 relative overflow-hidden"
          >
            {/* Floating elements in form */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
                className="absolute text-2xl"
                style={{
                  left: `${20 + (i * 20)}%`,
                  top: `${30 + (i % 2) * 30}%`
                }}
              >
                {['💌', '📧', '📞', '📍'][i]}
              </motion.div>
            ))}

            <div className="mb-8 relative z-10">
              <motion.h3 
                className="text-2xl font-bold text-gray-800 mb-2"
                animate={{ 
                  scale: [1, 1.02, 1],
                  textShadow: [
                    "0 0 10px rgba(99,102,241,0.2)",
                    "0 0 20px rgba(99,102,241,0.4)",
                    "0 0 10px rgba(99,102,241,0.2)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Send us a Message
              </motion.h3>
              <motion.p 
                className="text-gray-600"
                animate={{ 
                  opacity: [0.7, 1, 0.7],
                  y: [0, -2, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                We'd love to hear about your travel plans!
              </motion.p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your travel plans or questions..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(99,102,241,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: [
                    "0 10px 30px rgba(99,102,241,0.2)",
                    "0 20px 40px rgba(99,102,241,0.4)",
                    "0 10px 30px rgba(99,102,241,0.2)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>

            {/* Quick Response Info */}
            <motion.div 
              className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200"
              whileHover={{ scale: 1.02 }}
              animate={{ 
                boxShadow: [
                  "0 4px 15px rgba(34,197,94,0.2)",
                  "0 8px 25px rgba(34,197,94,0.4)",
                  "0 4px 15px rgba(34,197,94,0.2)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex items-center space-x-2 text-green-700">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Clock className="w-4 h-4" />
                </motion.div>
                <span className="text-sm font-medium">Quick Response Guaranteed</span>
              </div>
              <p className="text-sm text-green-600 mt-1">
                We typically respond within 2-4 hours during business hours
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;