import React from 'react';
import { motion } from 'framer-motion';

interface ChatButtonProps {
  text: string;
  onClick: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ text, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gray-700 hover:bg-gray-600 text-yellow-400 text-sm font-medium py-1 px-3 rounded-full border border-yellow-500 transition-colors"
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default ChatButton;