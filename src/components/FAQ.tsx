import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqItems = [
  {
    id: 1,
    question: "What is Rent-to-Own and how does it work?",
    answer: "Rent-to-Own is a program that allows you to rent a property with the option to buy it later. You pay a deposit upfront and monthly payments that contribute toward the purchase price. After a set period, you can exercise your option to buy the property, with your previous payments counting toward the purchase price."
  },
  {
    id: 2,
    question: "Can I qualify for a property if I'm blacklisted?",
    answer: "Yes, we specialize in helping blacklisted individuals secure properties. Our Rent-to-Own program doesn't require credit checks, making it accessible to those with poor credit history or who are blacklisted."
  },
  {
    id: 3,
    question: "What areas do you have properties in?",
    answer: "We currently have properties in Greenhills, Robinpark, North Riding, and various locations around Randfontein. We're constantly expanding to new areas in Johannesburg and surroundings."
  },
  {
    id: 4,
    question: "How much deposit do I need for Rent-to-Own?",
    answer: "Deposit requirements vary depending on the property type. For 1-bedroom apartments, deposits start at R120,000. For 2-bedroom homes, deposits start at R250,000, and for 3-bedroom homes, deposits start at R300,000."
  },
  {
    id: 5,
    question: "What is the Noble Property Stokvel?",
    answer: "The Noble Property Stokvel is our property investment group that allows members to earn a 15% return on investment after 12 months. The minimum investment is R10,000 plus a R500 joining fee."
  },
  {
    id: 6,
    question: "How does the group buying initiative work?",
    answer: "Our group buying initiative allows multiple investors to pool resources to acquire premium properties. Each investor contributes a one-time investment (starting at R147,000), and the returns are shared proportionally among the group members."
  },
  {
    id: 7,
    question: "When will the properties be ready for occupation?",
    answer: "Development duration varies from 6-12 months, with occupation expected in 2025/6 for most of our current projects."
  },
  {
    id: 8,
    question: "Do you offer property management services?",
    answer: "Yes, we offer comprehensive property management services for investors who purchase our properties as rental investments."
  }
];

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  
  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our properties and services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map(item => (
              <div 
                key={item.id} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => toggleItem(item.id)}
                >
                  <span className="text-lg font-semibold text-blue-900">{item.question}</span>
                  {openItem === item.id ? (
                    <ChevronUp className="flex-shrink-0 text-blue-600" size={20} />
                  ) : (
                    <ChevronDown className="flex-shrink-0 text-blue-600" size={20} />
                  )}
                </button>
                
                {openItem === item.id && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">
              Don't see your question here? Contact us directly and we'll be happy to help.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;