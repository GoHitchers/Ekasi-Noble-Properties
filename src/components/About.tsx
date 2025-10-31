import React from 'react';
import { MapPin, Users, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-6">About Ekasi Noble Properties</h2>
          <p className="max-w-4xl mx-auto text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
            As growing property developers, we've overcome challenges to establish ourselves in the South African market.
            Our mission is to make history by changing lives and providing everyone an opportunity to own a home.
            We even assist financially restricted individuals through our innovative solutions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12">
          <motion.div
            className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg border-t-4 border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl mb-4 sm:mb-0 sm:mr-4 shadow-lg">
                <MapPin size={28} className="text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-blue-900 text-center sm:text-left">Strategic Locations</h3>
            </div>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed text-center sm:text-left">
              Prime properties in developing areas with high growth potential, carefully selected for maximum investment returns.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg border-t-4 border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl mb-4 sm:mb-0 sm:mr-4 shadow-lg">
                <Users size={28} className="text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-blue-900 text-center sm:text-left">Inclusive Solutions</h3>
            </div>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed text-center sm:text-left">
              Innovative financing options including Rent-to-Own and group investments, making homeownership accessible to everyone.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg border-t-4 border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl mb-4 sm:mb-0 sm:mr-4 shadow-lg">
                <Home size={28} className="text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-blue-900 text-center sm:text-left">Quality Developments</h3>
            </div>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed text-center sm:text-left">
              Modern homes and apartments built to high standards, ensuring comfort, security, and long-term value for our clients.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;