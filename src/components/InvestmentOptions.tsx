import React from 'react';
import { DollarSign, Download, Send, CreditCard, CheckCircle } from 'lucide-react';

const InvestmentOptions: React.FC = () => {
  return (
    <section id="investment" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Investment Opportunities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Grow your wealth through our innovative property investment options
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Noble Property Stokvel */}
          <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-900 text-white p-6">
              <h3 className="text-2xl font-bold mb-2">Noble Property Stokvel</h3>
              <p>Join our property investment stokvel and earn a 15% return on investment after 31 months</p>
            </div>
            
            <div className="p-6">
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-900 mb-4">Investment Details</h4>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-700">Minimum Investment</span>
                    <span className="font-semibold text-blue-900">R10,000 + R500 joining fee</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-700">Return on Investment</span>
                    <span className="font-semibold text-blue-900">15% after 12 months</span>
                  </div>
                  
                  <div className="bg-blue-100 p-3 rounded-md text-blue-800 text-sm">
                    Example: R100,000 investment = R15,000 ROI
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Download size={20} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold text-blue-900">Download & Sign Up</h5>
                    <p className="text-gray-600 text-sm">Download Stokfella app or visit www.stokfella.com and sign up. Choose Noble Property Stokvel Group.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold text-blue-900">Complete Documentation</h5>
                    <p className="text-gray-600 text-sm">Fill out the beneficiary form with accurate details, especially email and contact numbers.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CreditCard size={20} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold text-blue-900">Make Payment</h5>
                    <p className="text-gray-600 text-sm">Minimum investment: R10,000 + R500 joining fee. Use the "pay" tab for EFT payments.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Send size={20} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold text-blue-900">Submit Proof</h5>
                    <p className="text-gray-600 text-sm">Email proof of payment to info@ekasinobleproperties.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-100 p-4 rounded-md">
                <h5 className="font-semibold text-blue-900 mb-2">Important Information</h5>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Electronic payments (EFT) may take 2-3 working days to reflect</li>
                  <li>• StokFella is an authorised Financial (FSP48812) and Credit service provider (NCRCP17277)</li>
                  <li>• T&Cs Apply</li>
                </ul>
                <div className="mt-3 text-sm text-gray-700">
                  <p>011 527 1978 / 079 275 8821 / 065 921 3368</p>
                  <p>info@ekasinobleproperties.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Noble Property Public Shares */}
          <div className="bg-blue-50 rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-900 text-white p-6">
              <h3 className="text-2xl font-bold mb-2">Noble Property Public Shares</h3>
              <p>Become a property investor through our Noble Property Public shares program</p>
            </div>
            
            <div className="p-6">
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-900 mb-4">Investment Details</h4>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-700">Share Investment</span>
                    <span className="font-semibold text-blue-900">R1,000 per share + R500 joining fee</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span className="text-gray-700">Payment Process</span>
                    <span className="font-semibold text-blue-900">Simple EFT payment system</span>
                  </div>
                  
                  <div className="bg-blue-100 p-3 rounded-md text-blue-800 text-sm">
                    Processing time: 2-3 working days
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-blue-900 mb-4">Contact Information</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-blue-900 mb-2">Call Us</h5>
                    <p className="text-gray-700">011 527 1978</p>
                    <p className="text-gray-700">079 275 8821</p>
                    <p className="text-gray-700">065 921 3368</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-blue-900 mb-2">Email Us</h5>
                    <p className="text-gray-700">info@ekasinobleproperties.com</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Download size={20} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold text-blue-900">Visit & Sign Up</h5>
                    <p className="text-gray-600 text-sm">Visit www.ekasinobleproperties.com/shares and complete the registration process.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={20} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold text-blue-900">Choose Investment</h5>
                    <p className="text-gray-600 text-sm">Select the number of shares you wish to purchase. Minimum R1,000 per share plus R500 joining fee.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CreditCard size={20} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold text-blue-900">Make Payment</h5>
                    <p className="text-gray-600 text-sm">Use the "pay" tab for EFT payments. Banking details will be sent via email.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Send size={20} className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h5 className="font-semibold text-blue-900">Submit Proof</h5>
                    <p className="text-gray-600 text-sm">Email proof of payment to info@ekasinobleproperties.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-100 p-4 rounded-md">
                <h5 className="font-semibold text-blue-900 mb-2">Important Information</h5>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Electronic payments (EFT) may take 2-3 working days to reflect</li>
                  <li>• Your profile will include three tabs: pay, buy, and more</li>
                  <li>• Payment reference will be provided via email</li>
                  <li>• StokFella is an authorised Financial (FSP48812) and Credit service provider (NCRCP17277)</li>
                  <li>• T&Cs Apply</li>
                </ul>
              </div>
              
              <div className="mt-8 text-center">
                <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors">
                  Contact Us for More Information
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOptions;