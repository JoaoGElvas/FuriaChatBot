import React from 'react';
import { motion } from 'framer-motion';
import { Message } from '../../types';
import ChatButton from './ChatButton';

interface ChatMessageProps {
  message: Message;
  onActionClick: (action: string, payload?: any) => void;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, onActionClick }) => {
  const isBot = message.sender === 'bot';
  
  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.div
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.3 }}
    >
      <div 
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isBot 
            ? 'bg-gray-800 text-white rounded-bl-none' 
            : 'bg-yellow-500 text-black rounded-br-none'
        }`}
      >
        <div className="whitespace-pre-line">{message.text}</div>
        
        {message.options && message.options.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {message.options.map(option => (
              <ChatButton 
                key={option.id}
                text={option.text}
                onClick={() => onActionClick(option.action, option.id)}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ChatMessage;