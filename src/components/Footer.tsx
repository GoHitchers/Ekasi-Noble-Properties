import React, { useState } from 'react';
import { Home, Info, Building, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-blue-100 mb-4">
              Ekasi Noble Properties is committed to transforming the real estate landscape in South Africa's townships.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors flex items-center">
                  <Home size={16} className="mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-100 hover:text-white transition-colors flex items-center">
                  <Info size={16} className="mr-2" />
                  About
                </a>
              </li>
              <li>
                <a href="#properties" className="text-blue-100 hover:text-white transition-colors flex items-center">
                  <Building size={16} className="mr-2" />
                  Properties
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white transition-colors flex items-center">
                  <Phone size={16} className="mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-blue-100">Property Sales</li>
              <li className="text-blue-100">Property Rentals</li>
              <li className="text-blue-100">Property Management</li>
              <li className="text-blue-100">Group Buying</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-blue-100 mb-4">Subscribe to our newsletter for updates</p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-2 rounded-md bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors w-full flex items-center justify-center"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-6 text-center space-y-2">
          <p className="text-blue-200">© 2025 Ekasi Noble Properties. All rights reserved.</p>
          <p className="text-blue-300 text-sm">
            Crafted by{' '}
            <a
              href="https://xannietechs.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 font-semibold transition-colors underline"
            >
              Xannie Techs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;