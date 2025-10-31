import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! I'm the Ekasi Noble Properties assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const companyKnowledge: { [key: string]: string } = {
    'company|about|who are you|what is ekasi':
      "Ekasi Noble Properties is a growing property developer in South Africa. We've overcome challenges to establish ourselves in the market. Our mission is to make history by changing lives and providing everyone an opportunity to own a home. We even assist financially restricted individuals through innovative solutions.",

    'properties|houses|homes|available':
      "We have several properties available:\n\n1. Ngonyama Lifestyle Estate (North Riding) - R450,000\n2. Nala Estate (Randfontein Greenhills) - R849,000\n3. P&S Noble Apartments (Randfontein Robinpark) - R350,000\n4. P&S Robin Park Estate (Randfontein) - R849,000\n5. Group Buying Opportunity (Randfontein) - R147,000 per investor",

    'rent to own|rent|renting|financing':
      "We offer a Rent-to-Own program! Start living in your home today while building towards ownership. You can rent initially with a portion going towards your deposit, making homeownership accessible even with limited upfront capital. This innovative solution helps financially restricted individuals achieve their dream of owning property.",

    'group buying|investment|invest':
      "Our Group Buying Opportunity allows multiple investors to pool resources and invest together. Starting at just R147,000 per investor in Randfontein. This makes property investment accessible to more people and reduces individual financial burden.",

    'location|where|areas|randfontein':
      "We operate in prime locations including:\n- North Riding\n- Randfontein Greenhills\n- Randfontein Robinpark\n- Randfontein General Area\n\nThese are strategic locations in developing areas with high growth potential.",

    'price|cost|affordable|cheap':
      "Our properties range from R147,000 (group investment) to R849,000. We offer:\n- Affordable apartments from R350,000\n- Houses from R450,000\n- Estate properties up to R849,000\n- Flexible payment options and financing solutions",

    'contact|phone|email|reach':
      "You can contact us:\n- Phone: 079 275 8821\n- Visit our Contact section on the website for a detailed inquiry form\n- We respond to all inquiries within 24 hours",

    'team|staff|who runs':
      "Our team includes experienced professionals:\n- Siyabonga Shandu - Estate Agent and Co-Founder\n- Mapaseka Majatladi - Sales and Marketing Manager, Co-Founder\n- Dennis Ngonyama - CEO & Founder\n\nWe're dedicated to helping you find your dream home!",

    'quality|modern|features':
      "All our developments are built to high standards ensuring:\n- Comfort and modern design\n- Security features\n- Long-term value\n- Quality construction\n- Well-planned communities",

    'process|how to buy|steps':
      "To buy a property with us:\n1. Browse our available properties\n2. Contact us for a viewing\n3. Discuss financing options (traditional mortgage, rent-to-own, or group buying)\n4. Complete the application process\n5. Move into your new home!\n\nWe guide you through every step.",

    'help|assistance|support':
      "I can help you with:\n- Information about available properties\n- Rent-to-Own program details\n- Group buying investment opportunities\n- Locations and pricing\n- Contact information\n- Our team and company information\n\nWhat would you like to know more about?"
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    for (const [keywords, response] of Object.entries(companyKnowledge)) {
      const keywordList = keywords.split('|');
      if (keywordList.some(keyword => lowerMessage.includes(keyword))) {
        return response;
      }
    }

    if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey')) {
      return "Hello! Welcome to Ekasi Noble Properties. I can help you with information about our properties, rent-to-own options, group buying opportunities, and more. What would you like to know?";
    }

    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're welcome! Feel free to ask if you have any other questions about our properties or services.";
    }

    return "I'd be happy to help! I can provide information about our properties, rent-to-own program, group buying opportunities, locations, pricing, and how to contact us. Could you please be more specific about what you'd like to know?";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    setTimeout(() => {
      const botResponse: Message = {
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-[90px] sm:bottom-[100px] right-3 sm:right-5 w-[95vw] max-w-[400px] sm:w-96 h-[70vh] max-h-[550px] sm:h-[500px] bg-white rounded-2xl shadow-2xl z-[9999] flex flex-col overflow-hidden border border-gray-200"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 sm:p-4 flex justify-between items-center flex-shrink-0">
              <div className="flex items-center min-w-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0">
                  <MessageCircle size={18} className="sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-sm sm:text-base truncate">Ekasi Noble Assistant</h3>
                  <p className="text-xs text-blue-100 hidden sm:block">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-1.5 sm:p-2 rounded-full transition-colors flex-shrink-0"
              >
                <X size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3 sm:p-4 bg-gray-50 overscroll-contain">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] p-2.5 sm:p-3 rounded-2xl break-words ${
                      message.isBot
                        ? 'bg-white text-gray-800 shadow-sm border border-gray-200'
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                    }`}
                  >
                    <p className="text-xs sm:text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                    <p
                      className={`text-[10px] sm:text-xs mt-1 ${
                        message.isBot ? 'text-gray-400' : 'text-blue-100'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 sm:p-4 bg-white border-t border-gray-200 flex-shrink-0">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 p-2.5 sm:p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-2.5 sm:p-3 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-[72px] right-3 sm:right-5 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-[9999] flex items-center justify-center"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <MessageCircle size={24} className="sm:w-7 sm:h-7" />}
      </motion.button>
    </>
  );
};

export default Chatbot;
