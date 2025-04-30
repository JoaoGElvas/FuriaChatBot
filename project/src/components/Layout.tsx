import React, { useState } from "react";
import { motion } from "framer-motion";
import { useChatbot } from "../hooks/useChatbot";
import ChatInterface from "./Chat/ChatInterface";
import Button from "./UI/Button";
// Importe a imagem corretamente
import FuriaImage from "../images/furia.png";

const Layout: React.FC = () => {
  const { messages, isTyping, handleSendMessage, handleAction } = useChatbot();
  const [chatStarted, setChatStarted] = useState(false);

  const startChat = () => {
    setChatStarted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="bg-black border-b border-gray-800 py-4">
        <div className="container mx-auto px-4 flex items-center">
          <img src={FuriaImage} alt="FURIA logo" className="h-18 w-8 mr-2" />
          <h1 className="text-xl font-bold text-yellow-500">
            FURIA CS Fan Chat
          </h1>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 h-[calc(100vh-12rem)]">
          {/* Left side - Introduction */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Chat with</span> <br />
              <span className="text-yellow-500">FURIA CS</span> <br />
              <span className="text-white">fans</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Get the latest updates on matches, results, and team information.
              Test your knowledge with FURIA trivia and connect with other fans
              of Brazil's premier CS team.
            </p>

            {!chatStarted && (
              <div>
                <Button primary onClick={startChat}>
                  Start Chatting
                </Button>
              </div>
            )}

            <motion.div
              className="mt-12 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-yellow-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-yellow-500 rounded-full opacity-20 blur-xl"></div>
            </motion.div>
          </motion.div>

          {/* Right side - Chat */}
          <motion.div
            className={`h-full ${
              !chatStarted && "md:opacity-60 md:filter md:blur-sm"
            }`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: chatStarted ? "blur(0px)" : "blur(3px)",
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ChatInterface
              messages={messages}
              isTyping={isTyping}
              onSendMessage={handleSendMessage}
              onActionClick={handleAction}
            />
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-4">
        <div className="container mx-auto px-4">
          <p className="text-gray-500 text-sm text-center">
            FURIA Fan Chat © 2025 • Not officially affiliated with FURIA Esports
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
