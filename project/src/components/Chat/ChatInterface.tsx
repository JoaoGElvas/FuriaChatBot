import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import { Message } from "../../types";
import { MessageSquare } from "lucide-react";

interface ChatInterfaceProps {
  messages: Message[];
  isTyping: boolean;
  onSendMessage: (message: string) => void;
  onActionClick: (action: string, payload?: any) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  messages,
  isTyping,
  onSendMessage,
  onActionClick,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <motion.div
      className="flex flex-col bg-black border border-gray-800 rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        height: "500px", // Altura fixa
        width: "600px", // Largura fixa
      }}
    >
      {/* Chat header */}
      <div className="bg-gray-900 px-4 py-3 border-b border-gray-800 flex items-center">
        <MessageSquare className="h-6 w-6 text-yellow-500 mr-2" />
        <h2 className="text-white font-semibold">FURIA Fan Chat</h2>
      </div>

      {/* Messages container with scroll */}
      <div
        className="flex-1 p-4 overflow-y-auto bg-black"
        style={{ maxHeight: "calc(100% - 120px)" }}
      >
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            onActionClick={onActionClick}
          />
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="bg-gray-800 text-white rounded-2xl rounded-bl-none px-4 py-3">
              <div className="flex space-x-1">
                <motion.div
                  className="w-2 h-2 bg-gray-500 rounded-full"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
                <motion.div
                  className="w-2 h-2 bg-gray-500 rounded-full"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
                <motion.div
                  className="w-2 h-2 bg-gray-500 rounded-full"
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="px-4 py-3 border-t border-gray-800">
        <ChatInput onSendMessage={onSendMessage} disabled={isTyping} />
      </div>
    </motion.div>
  );
};

export default ChatInterface;
