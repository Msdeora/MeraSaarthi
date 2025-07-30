import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  isPremium?: boolean;
  features: string[];
  price?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  isPremium = false,
  features,
  price
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={`relative p-6 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 ${
        isPremium
          ? 'bg-gradient-to-br from-royal-500 to-saffron-500 text-white'
          : 'bg-white hover:shadow-xl border border-gray-100'
      }`}
    >
      {isPremium && (
        <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
          PREMIUM
        </div>
      )}

      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-full ${
          isPremium ? 'bg-white/20' : 'bg-gradient-to-br from-indigo-100 to-saffron-100'
        }`}>
          <Icon className={`w-6 h-6 ${isPremium ? 'text-white' : 'text-indigo-600'}`} />
        </div>
        {price && (
          <div className="ml-auto text-right">
            <span className={`text-2xl font-bold ${isPremium ? 'text-white' : 'text-indigo-600'}`}>
              {price}
            </span>
            <span className={`text-sm ${isPremium ? 'text-white/80' : 'text-gray-500'}`}>
              /month
            </span>
          </div>
        )}
      </div>

      <h3 className={`text-xl font-bold mb-2 ${isPremium ? 'text-white' : 'text-gray-800'}`}>
        {title}
      </h3>
      
      <p className={`mb-4 ${isPremium ? 'text-white/90' : 'text-gray-600'}`}>
        {description}
      </p>

      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className={`mr-2 ${isPremium ? 'text-white' : 'text-green-500'}`}>✓</span>
            <span className={`text-sm ${isPremium ? 'text-white/90' : 'text-gray-600'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
          isPremium
            ? 'bg-white text-indigo-600 hover:bg-gray-100'
            : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-lg'
        }`}
      >
        {isPremium ? 'Upgrade Now' : 'Get Started'}
      </motion.button>
    </motion.div>
  );
};

export default ServiceCard;