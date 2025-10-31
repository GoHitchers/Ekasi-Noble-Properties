import React, { useState } from 'react';
import {
  Bed,
  Bath,
  Maximize,
  ChevronRight,
  Home,
  X,
  ArrowRight,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';

interface FeaturedPropertiesProps {
  scrollToContact: () => void;
}

const properties = [
  {
    id: 1,
    title: 'Ngonyama Lifestyle Estate (Stand)',
    location: 'North Riding',
    price: 'R450,000',
    type: 'sale',
    image: '/ngonyama.jpg',
    beds: '2 - 4',
    area: '250m²',
    description:
      'Beautiful property available for sale or rent-to-own. Deposit R299,000 with monthly repayments of R7,000.',
  },
  {
    id: 2,
    title: 'Nala Estate',
    location: 'Randfontein Greenhills',
    price: 'R950,000',
    type: ['rent-to-own', 'sale'],
    image: '/bhubesi.jpg',
    beds: 3,
    baths: 2,
    area: '150m²',
    description:
      'Beautiful property available for sale or rent-to-own. Deposit R299,000 with monthly repayments of R7,000.',
  },
  {
    id: 3,
    title: 'P&S Noble Apartments',
    location: 'Randfontein Robinpark',
    price: 'R350,000',
    type: 'sale',
    image: '/p&s.jpg',
    beds: 1,
    baths: 1,
    area: '45m²',
    description:
      'Modern 1-bedroom apartments in the successful P&S Robinpark Estate development.',
  },
  {
    id: 4,
    title: 'P&S Robin Park Estate',
    location: 'Randfontein',
    price: 'R849,000',
    type: 'sale',
    image: '/p&s2.jpg',
    beds: 2,
    baths: 1,
    area: '65m²',
    description:
      'Luxurious 2-bedroom home in our successful P&S Robinpark Estate development. Perfect for families seeking comfort and security.',
  },
  {
    id: 5,
    title: 'Group Buying Opportunity',
    location: 'Randfontein',
    price: 'R147,000 per investor',
    type: 'group',
    image: '/group.jpg',
    properties: 8,
    description:
      'Join our group buying initiative to acquire 8 premium properties. One-time investment of R147,000.',
  },
];

const PropertyCard: React.FC<{
  property: any;
  onImageClick: (image: string, title: string) => void;
  scrollToContact: () => void;
  index: number;
}> = ({ property, onImageClick, scrollToContact, index }) => {
  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in ${property.title} at ${property.price}. Can you provide more information?`;
    const whatsappUrl = `https://wa.me/27792758821?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-64 object-cover cursor-pointer transition-transform duration-500 hover:scale-105"
          onClick={() => onImageClick(property.image, property.title)}
        />
        {Array.isArray(property.type) ? (
          <div className="absolute top-4 right-4 flex gap-2">
            <div className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
              For Sale
            </div>
            <div className="bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
              Rent to Own
            </div>
          </div>
        ) : (
          property.type === 'rent-to-own' && (
            <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
              Rent to Own
            </div>
          )
        )}
        {property.type === 'group' && (
          <div className="absolute top-4 right-4 bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
            Group Buying
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-blue-900 mb-2">
            {property.title}
          </h3>
          <div className="flex justify-between items-center">
            <p className="text-gray-600 flex items-center">
              <MapPin size={16} className="mr-1 text-blue-600" />
              {property.location}
            </p>
            <p className="text-lg font-bold text-blue-600">{property.price}</p>
          </div>
        </div>

        <p className="text-gray-700 mb-4">{property.description}</p>

        {property.type !== 'group' ? (
          <div className="flex justify-between text-gray-600 mb-4">
            <div className="flex items-center">
              <Bed size={18} className="mr-1 text-blue-600" />
              <span>{property.beds} Beds</span>
            </div>
            <div className="flex items-center">
              <Bath size={18} className="mr-1 text-blue-600" />
              <span>{property.baths} Baths</span>
            </div>
            <div className="flex items-center">
              <Maximize size={18} className="mr-1 text-blue-600" />
              <span>{property.area}</span>
            </div>
          </div>
        ) : (
          <div className="flex justify-center text-gray-600 mb-4">
            <div className="flex items-center">
              <Home size={18} className="mr-1 text-blue-600" />
              <span>{property.properties} Properties</span>
            </div>
          </div>
        )}

       
      </div>
    </motion.div>
  );
};

const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  scrollToContact,
}) => {
  const [activeTab, setActiveTab] = useState('all');
  const [previewImage, setPreviewImage] = useState<{
    url: string;
    title: string;
  } | null>(null);

  const filteredProperties =
    activeTab === 'all'
      ? properties
      : properties.filter((property) => {
          if (Array.isArray(property.type)) {
            return property.type.includes(activeTab);
          }
          return property.type === activeTab;
        });

  const handleImageClick = (url: string, title: string) => {
    setPreviewImage({ url, title });
  };

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Exclusive properties and investment opportunities in prime locations
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-flex rounded-lg shadow-md" role="group">
            <button
              type="button"
              className={`px-5 py-3 text-sm font-medium rounded-l-lg ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-colors duration-300`}
              onClick={() => setActiveTab('all')}
            >
              All Properties
            </button>
            <button
              type="button"
              className={`px-5 py-3 text-sm font-medium ${
                activeTab === 'sale'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-colors duration-300`}
              onClick={() => setActiveTab('sale')}
            >
              For Sale
            </button>
            <button
              type="button"
              className={`px-5 py-3 text-sm font-medium ${
                activeTab === 'rent-to-own'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-colors duration-300`}
              onClick={() => setActiveTab('rent-to-own')}
            >
              Rent to Own
            </button>
            <button
              type="button"
              className={`px-5 py-3 text-sm font-medium rounded-r-lg ${
                activeTab === 'group'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-colors duration-300`}
              onClick={() => setActiveTab('group')}
            >
              Group Buying
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              onImageClick={handleImageClick}
              scrollToContact={scrollToContact}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.a
            href="#"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group"
            whileHover={{ x: 5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            View All Properties
            <ChevronRight
              size={16}
              className="ml-1 group-hover:ml-2 transition-all"
            />
          </motion.a>
        </div>
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-5xl w-full">
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setPreviewImage(null)}
            >
              <X size={24} />
            </button>
            <img
              src={previewImage.url}
              alt={previewImage.title}
              className="w-full rounded-lg"
            />
            <div className="bg-white p-4 rounded-b-lg">
              <h3 className="text-xl font-bold text-blue-900">
                {previewImage.title}
              </h3>
              <button
                className="mt-2 text-blue-600 hover:text-blue-800 flex items-center"
                onClick={() => {
                  setPreviewImage(null);
                  scrollToContact();
                }}
              >
                Enquire about this property{' '}
                <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProperties;