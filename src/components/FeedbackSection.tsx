import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle, Mic, Send, ThumbsUp, Heart } from 'lucide-react';

const FeedbackSection: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const emojiOptions = [
    { emoji: '😍', label: 'Amazing' },
    { emoji: '😊', label: 'Great' },
    { emoji: '😐', label: 'Okay' },
    { emoji: '😔', label: 'Poor' },
    { emoji: '😡', label: 'Terrible' }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      text: 'MeraSaarthi made our family trip to Rajasthan absolutely magical! The AI recommendations were spot-on.',
      avatar: '👨'
    },
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'The cultural insights and local tips helped us experience authentic India. Highly recommended!',
      avatar: '👩'
    },
    {
      name: 'David Wilson',
      location: 'USA',
      rating: 5,
      text: 'As a foreign tourist, MeraSaarthi was my perfect guide to understanding Indian culture and traditions.',
      avatar: '👨‍💼'
    }
  ];

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle feedback submission
    alert('Thank you for your feedback! Your input helps us improve.');
    setRating(0);
    setFeedback('');
    setSelectedEmoji('');
  };

  const handleVoiceRecording = () => {
    setIsRecording(!isRecording);
    // Simulate voice recording
    if (!isRecording) {
      setTimeout(() => setIsRecording(false), 3000);
    }
  };

  return (
    <section id="feedback" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-poppins">
            Share Your <span className="bg-gradient-to-r from-indigo-600 to-saffron-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your feedback helps us create better travel experiences for everyone exploring India
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Feedback Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Rate Your Experience</h3>
              <p className="text-gray-600">Help us improve MeraSaarthi with your valuable feedback</p>
            </div>

            <form onSubmit={handleSubmitFeedback} className="space-y-6">
              {/* Star Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Overall Rating
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setRating(star)}
                      className={`text-3xl transition-all duration-200 ${
                        star <= rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      <Star className={star <= rating ? 'fill-current' : ''} />
                    </motion.button>
                  ))}
                </div>
                {rating > 0 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-gray-600 mt-2"
                  >
                    {rating === 5 ? 'Excellent!' : rating === 4 ? 'Very Good!' : rating === 3 ? 'Good!' : rating === 2 ? 'Fair' : 'Needs Improvement'}
                  </motion.p>
                )}
              </div>

              {/* Emoji Feedback */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Quick Feedback
                </label>
                <div className="flex space-x-4">
                  {emojiOptions.map((option) => (
                    <motion.button
                      key={option.emoji}
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedEmoji(option.emoji)}
                      className={`p-3 rounded-full text-2xl transition-all duration-200 ${
                        selectedEmoji === option.emoji
                          ? 'bg-indigo-100 border-2 border-indigo-500'
                          : 'bg-gray-100 border-2 border-transparent hover:bg-gray-200'
                      }`}
                      title={option.label}
                    >
                      {option.emoji}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Text Feedback */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us more about your experience
                </label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  placeholder="Share your thoughts, suggestions, or what you loved most about your journey..."
                />
              </div>

              {/* Voice Feedback */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Voice Feedback (Optional)
                </label>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleVoiceRecording}
                  className={`flex items-center space-x-3 p-4 rounded-xl border-2 border-dashed transition-all duration-300 ${
                    isRecording
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-300 bg-gray-50 text-gray-600 hover:border-indigo-500 hover:bg-indigo-50'
                  }`}
                >
                  <Mic className={`w-5 h-5 ${isRecording ? 'animate-pulse' : ''}`} />
                  <span>
                    {isRecording ? 'Recording... Click to stop' : 'Click to record voice feedback'}
                  </span>
                </motion.button>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Submit Feedback</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">What Travelers Say</h3>
              <p className="text-gray-600 mb-8">
                Join thousands of happy travelers who've discovered India with MeraSaarthi
              </p>
            </div>

            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-saffron-100 rounded-full flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                        <span className="text-gray-500 text-sm">from {testimonial.location}</span>
                      </div>
                      <div className="flex space-x-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">"{testimonial.text}"</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-2xl text-white"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold mb-1">4.9/5</div>
                  <div className="text-sm opacity-90">Average Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">10,000+</div>
                  <div className="text-sm opacity-90">Reviews</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">98%</div>
                  <div className="text-sm opacity-90">Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;