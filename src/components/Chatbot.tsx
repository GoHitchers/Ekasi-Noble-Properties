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
    'company|about|who are you|what is ekasi|who is ekasi|tell me about|your company|business':
      "Ekasi Noble Properties is a growing property developer in South Africa. We've overcome challenges to establish ourselves in the market. Our mission is to make history by changing lives and providing everyone an opportunity to own a home. We even assist financially restricted individuals through innovative solutions.",

    'properties|houses|homes|available|what properties|show properties|property list|listings':
      "We have several properties available:\n\n1. Ngonyama Lifestyle Estate (North Riding) - R450,000\n2. Nala Estate (Randfontein Greenhills) - R849,000\n3. P&S Noble Apartments (Randfontein Robinpark) - R350,000\n4. P&S Robin Park Estate (Randfontein) - R849,000\n5. Group Buying Opportunity (Randfontein) - R147,000 per investor\n\nWould you like more details about any specific property?",

    'rent to own|rent|renting|financing|payment plan|flexible payment|own a home|buy home':
      "We offer a Rent-to-Own program! Start living in your home today while building towards ownership. You can rent initially with a portion going towards your deposit, making homeownership accessible even with limited upfront capital. This innovative solution helps financially restricted individuals achieve their dream of owning property.\n\nKey benefits:\n- No credit checks required\n- Flexible payment terms\n- 10, 5, or 15-year repayment plans available",

    'group buying|investment|invest|stokvel|shares|property investment':
      "We offer two main investment opportunities:\n\n1. Noble Property Stokvel - 15% ROI after 12 months. Minimum investment: R10,000 + R500 joining fee\n\n2. Group Buying Opportunity - Pool resources with other investors. Starting at R147,000 per investor in Randfontein.\n\nBoth options make property investment accessible to more people!",

    'location|where|areas|randfontein|greenhills|robinpark|north riding|northriding':
      "We operate in prime locations including:\n- North Riding\n- Randfontein Greenhills\n- Randfontein Robinpark\n- Randfontein General Area\n\nThese are strategic locations in developing areas with high growth potential.",

    'price|cost|affordable|cheap|how much|budget|expensive':
      "Our properties range from R147,000 (group investment) to R950,000. We offer:\n- Affordable apartments from R350,000\n- Houses from R450,000\n- Estate properties up to R849,000\n- Flexible payment options and financing solutions\n\nWhat's your budget range? I can help you find suitable options!",

    'contact|phone|email|reach|call|get in touch|speak to someone':
      "You can contact us:\n- Phone: 011 527 1978\n- Mobile: 079 275 8821 / 065 921 3368\n- Email: info@ekasinobleproperties.com\n- Visit our Contact section on the website for a detailed inquiry form\n\nWe respond to all inquiries within 24 hours!",

    'team|staff|who runs|agents|estate agent|sales':
      "Our team includes experienced professionals:\n- Siyabonga Makhamba - Sales Person (7 years experience)\n- Mapaseka Mojaki - Rental Specialist (6 years experience)\n\nWe're dedicated to helping you find your dream home!",

    'quality|modern|features|amenities|facilities':
      "All our developments are built to high standards ensuring:\n- Comfort and modern design\n- Security features\n- Long-term value\n- Quality construction\n- Well-planned communities\n- Premium finishes",

    'process|how to buy|steps|buying process|purchase|procedure':
      "To buy a property with us:\n1. Browse our available properties\n2. Contact us for a viewing\n3. Discuss financing options (traditional mortgage, rent-to-own, or group buying)\n4. Complete the application process\n5. Move into your new home!\n\nWe guide you through every step of the journey.",

    'thaba view|thabakgolo|thaba|game lodge|hartbeespoort|wildlife':
      "Thaba View Lodge is our boutique game lodge in Hartbeespoort! It's a vibrant home to wild wonders and adventurous souls. You can own a 500m² piece of paradise in a game lodge.\n\nKey features:\n- Wildlife including Zebra, Sable, Nyala, Kudu, and more\n- Investment opportunity at R450,000 per 1ha share\n- Flexible payment plans available\n- Build your dream home or earn rental income",

    'greenlands|greenland|mkh|more key homes|middelvei':
      "Greenlands Lifestyle Private Estate is located in Randfontein Middelvei 255iQ. It's where luxury meets security in perfect harmony!\n\nFeatures:\n- Unparalleled security\n- Mini shopping center within estate\n- Affordable luxury housing\n- 10-minute drive to schools, shops, and town\n- 300m² land available at R250,000\n\nContact More Key Homes: 010 226 9061",

    'events|workshops|seminars|meetings':
      "We regularly host property investment workshops and events! Upcoming locations include:\n- Greengate (Beyers Naude)\n- Ngonyama (North Riding)\n- Robin Park (Randfontein)\n- Greenhills\n- Kocksoord\n\nThese events help you learn about investment opportunities and property ownership. Check our Events section for dates!",

    'blacklisted|bad credit|credit check|no credit|poor credit':
      "Great news! We specialize in helping blacklisted individuals secure properties. Our Rent-to-Own program doesn't require credit checks, making it accessible to those with poor credit history.\n\nWe offer:\n- No credit checks\n- Affordability checks instead\n- Flexible payment terms\n- Expert assistance throughout the process",

    'apartments|flats|1 bedroom|2 bedroom|studio':
      "We have beautiful apartments available:\n\n1. P&S Noble Apartments (Robinpark) - R350,000\n- 1 bedroom, 1 bathroom\n- 45m²\n- Modern finishes\n\n2. Various apartment options in Kocksoord starting from R250,000\n\nWould you like more details about any of these?",

    'ngonyama|lifestyle estate':
      "Ngonyama Lifestyle Estate in North Riding is available for R450,000!\n\nFeatures:\n- 2-4 bedrooms available\n- 250m² stand\n- Prime location in North Riding\n- Perfect for families\n- Modern development\n\nInterested in learning more or scheduling a viewing?",

    'nala|nala estate|bhubesi':
      "Nala Estate in Randfontein Greenhills is available for R950,000!\n\nFeatures:\n- 3 bedrooms, 2 bathrooms\n- 150m² living space\n- Available for sale or rent-to-own\n- Deposit: R299,000 with monthly repayments of R7,000\n- Beautiful modern property\n\nWould you like to schedule a viewing?",

    'deposit|down payment|initial payment|upfront':
      "Deposit requirements vary by property type:\n\n- 1-bedroom apartments: R120,000+\n- 2-bedroom homes: R250,000+\n- 3-bedroom homes: R300,000+\n- Group buying: R147,000\n- Stokvel investment: R10,000 + R500 fee\n\nWe offer flexible payment plans to make ownership accessible!",

    'faq|questions|common questions|frequently asked':
      "Common questions we answer:\n\n1. How does Rent-to-Own work?\n2. Can I qualify if I'm blacklisted?\n3. What areas do you have properties in?\n4. How much deposit do I need?\n5. What is the Noble Property Stokvel?\n6. How does group buying work?\n7. When will properties be ready?\n8. Do you offer property management?\n\nWhich topic would you like to know more about?",

    'viewing|see property|visit|tour|inspection':
      "I'd love to help you schedule a property viewing! To arrange a viewing:\n\n1. Let me know which property interests you\n2. Contact us at 079 275 8821 or 011 527 1978\n3. Or fill out our contact form on the website\n\nOur agents are available Monday-Friday 8:30 AM - 5:00 PM, and Saturday 9:00 AM - 1:00 PM.",

    'security|safe|crime|gated':
      "Security is a top priority in all our developments! We offer:\n- Gated communities\n- 24/7 security\n- Controlled access\n- CCTV surveillance (in select estates)\n- Well-lit areas\n- Private estate living\n\nYour safety and peace of mind are important to us!",

    'finance|loan|bond|mortgage|bank':
      "We offer multiple financing options:\n\n1. Traditional mortgage/bond\n2. Rent-to-Own program (no credit checks)\n3. Group buying opportunities\n4. Property investment stokvel\n5. Flexible payment plans\n\nOur team can help you find the best financing solution for your situation!",

    'help|assistance|support|what can you do':
      "I can help you with:\n- Available properties and pricing\n- Rent-to-Own program details\n- Group buying investment opportunities\n- Locations and areas we operate in\n- Contact information\n- Team and company information\n- Thaba View Lodge details\n- Greenlands Estate information\n- Events and workshops\n- Financing options\n- Viewing arrangements\n\nWhat would you like to know more about?"
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    for (const [keywords, response] of Object.entries(companyKnowledge)) {
      const keywordList = keywords.split('|');
      if (keywordList.some(keyword => lowerMessage.includes(keyword))) {
        return response;
      }
    }

    if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey') || lowerMessage.includes('greet')) {
      return "Hello! Welcome to Ekasi Noble Properties. I can help you with information about our properties, rent-to-own options, group buying opportunities, and more. What would you like to know?";
    }

    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks') || lowerMessage.includes('appreciate')) {
      return "You're welcome! Feel free to ask if you have any other questions about our properties or services. I'm here to help!";
    }

    if (lowerMessage.includes('yes') || lowerMessage.includes('yeah') || lowerMessage.includes('sure') || lowerMessage.includes('ok')) {
      return "Great! What specific information would you like to know? I can help with:\n- Property details and pricing\n- Financing options\n- Investment opportunities\n- Viewing arrangements\n- Contact information";
    }

    if (lowerMessage.includes('no') || lowerMessage.includes('not interested')) {
      return "No problem! If you change your mind or have any questions later, feel free to ask. Is there anything else I can help you with?";
    }

    return "I'd be happy to help! I can provide information about:\n\n• Available properties and pricing\n• Rent-to-Own program (no credit checks!)\n• Group buying & investment options\n• Thaba View Lodge & Greenlands Estate\n• Locations (North Riding, Randfontein, etc.)\n• Financing solutions\n• Contact information & viewings\n\nWhat would you like to know more about? Try asking about specific topics like 'properties', 'rent to own', 'investment', or 'contact'!";
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
