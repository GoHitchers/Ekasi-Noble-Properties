import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactTime: '',
    budget: '',
    employment: '',
    message: '',
    propertyInterest: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await axios.post('https://formspree.io/f/myzyably', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.status === 200) {
        setIsSubmitting(false);
        setSubmitted(true);
        
        // Reset form after submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          contactTime: '',
          budget: '',
          employment: '',
          message: '',
          propertyInterest: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setIsSubmitting(false);
      setError('There was an error sending your message. Please try again or contact us directly by phone.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with our expert team to find your dream property
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div 
            className="bg-white rounded-xl shadow-xl p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Send size={24} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  Your enquiry has been submitted successfully. One of our property experts will contact you shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                    <p>{error}</p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="propertyInterest" className="block text-gray-700 font-medium mb-2">Property Interest</label>
                    <select
                      id="propertyInterest"
                      name="propertyInterest"
                      value={formData.propertyInterest}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select property type</option>
                      <option value="sale">For Sale</option>
                      <option value="rent-to-own">Rent-to-Own</option>
                      <option value="group">Group Buying</option>
                      <option value="investment">Investment</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="contactTime" className="block text-gray-700 font-medium mb-2">Preferred Contact Time</label>
                    <select
                      id="contactTime"
                      name="contactTime"
                      value={formData.contactTime}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (8AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 5PM)</option>
                      <option value="evening">Evening (After 5PM)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-gray-700 font-medium mb-2">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select budget</option>
                      <option value="0-300000">R0 - R300,000</option>
                      <option value="300000-500000">R300,000 - R500,000</option>
                      <option value="500000-800000">R500,000 - R800,000</option>
                      <option value="800000-1000000">R800,000 - R1,000,000</option>
                      <option value="1000000+">R1,000,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="employment" className="block text-gray-700 font-medium mb-2">Employment Status</label>
                    <select
                      id="employment"
                      name="employment"
                      value={formData.employment}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select status</option>
                      <option value="employed">Employed</option>
                      <option value="self-employed">Self-Employed</option>
                      <option value="unemployed">Unemployed</option>
                      <option value="retired">Retired</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Additional Information</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Please include any specific questions or requirements you have..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Enquiry
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
          
          <div>
            <motion.div 
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl shadow-xl p-8 mb-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Phone size={20} className="text-blue-300" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold mb-2">Call Us:</h4>
                    <p className="mb-1">011 527 1978</p>
                    <p className="mb-1">065 921 3368</p>
                    <p>079 275 8821</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Mail size={20} className="text-blue-300" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold mb-2">Email Us:</h4>
                    <p>info@ekasinobleproperties.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin size={20} className="text-blue-300" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold mb-2">Visit Us:</h4>
                    <p>Ekasi Noble Properties Office</p>
                    <p>RANDFONTEIN MIDDELVEI 255-IQ</p>
                    <p>South Africa</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-xl p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-blue-900 mb-4">Office Hours</h3>
              
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 mt-1">
                  <Clock size={20} className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-gray-700 mb-1">Monday - Friday: 8:30 AM - 5:00 PM</p>
                  <p className="text-gray-700 mb-1">Saturday: 9:00 AM - 1:00 PM</p>
                  <p className="text-gray-700">Sunday: Closed</p>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-900 font-semibold">
                  We're committed to helping you find your dream property. Contact us today to schedule a consultation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;