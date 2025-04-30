import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
  small?: boolean;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  primary = false, 
  small = false,
  className = '',
  disabled = false
}) => {
  const baseClasses = 'rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50';
  const sizeClasses = small ? 'px-4 py-1 text-sm' : 'px-6 py-3 text-base';
  const colorClasses = primary 
    ? 'bg-yellow-500 text-black hover:bg-yellow-400' 
    : 'bg-gray-800 text-white border border-yellow-500 hover:bg-gray-700';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${sizeClasses} ${colorClasses} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default Button;