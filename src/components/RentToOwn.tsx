import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface RentToOwnProps {
  scrollToContact: () => void;
}

const offPlanOptions = [
  {
    id: 1,
    title: 'Noble Apartments',
    deposit: 'R299,000',
    monthly: 'R7,000',
    units: 18,
    image: '/p&s.jpg'
  },

];

const benefits = [
  'No Credit Checks Required',
  'Affordability Check Available',
  'Flexible Payment Terms',
  'Choice of 10, 5, or 15-year Repayment Plans',
  'Occupation Available in 2024/5',
  'Located in Private Estates'
];

const RentToOwn: React.FC<RentToOwnProps> = ({ scrollToContact }) => {
  return (
    <section id="rent-to-own" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">For Sale Off Plan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Secure your dream home today - Off plan opportunities available!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {offPlanOptions.map((option, index) => (
            <motion.div 
              key={option.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={option.image} 
                  alt={option.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{option.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Deposit:</span>
                    <span className="font-semibold text-blue-600">{option.deposit}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly:</span>
                    <span className="font-semibold text-blue-600">{option.monthly}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Available Units:</span>
                    <span className="font-semibold text-blue-600">{option.units}</span>
                  </div>
                </div>
                
                <button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                  onClick={scrollToContact}
                >
                  <span>Enquire Now</span>
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Program Benefits</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <div className="flex-shrink-0 mt-1">
                  <Check size={18} className="text-white" />
                </div>
                <p className="ml-2 text-white">{benefit}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center text-white">
            <p className="font-semibold">Development Duration: 6 - 12 Months | Occupation in 2025/6</p>
          </div>
          
          <div className="mt-8 text-center">
            <motion.button
              className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors"
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us for More Information
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RentToOwn;