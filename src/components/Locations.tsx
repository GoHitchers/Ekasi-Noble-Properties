import React, { useState } from 'react';
import { MapPin, X } from 'lucide-react';
import { motion } from 'framer-motion';

interface Location {
  id: number;
  name: string;
  units: number;
  soldOut?: boolean;
  image: string;
  properties: Array<{
    id: number;
    title: string;
    price: string;
    beds: number;
    baths: number;
    area: string;
    image: string;
    description: string;
  }>;
}

const locations: Location[] = [
  {
    id: 1,
    name: 'Greenhills',
    units: 16,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80',
    properties: [
      {
        id: 101,
        title: 'Modern Family Home',
        price: 'R849,000',
        beds: 3,
        baths: 2,
        area: '150m²',
        image: '/bhubesi.jpg',
        description: 'Beautiful property in Greenhills with modern finishes and spacious living areas.'
      },
      {
        id: 102,
        title: 'Cozy Starter Home',
        price: 'R650,000',
        beds: 2,
        baths: 1,
        area: '120m²',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80',
        description: 'Perfect starter home in the desirable Greenhills area.'
      }
    ]
  },
  {
    id: 2,
    name: 'Robinpark',
    units: 4,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80',
    properties: [
      {
        id: 201,
        title: 'P&S Robin Park Estate',
        price: 'R849,000',
        beds: 3,
        baths: 2,
        area: '150m²',
        image: '/p&s2.jpg',
        description: 'Luxurious 3-bedroom home in our successful P&S Robinpark Estate development.'
      },
      {
        id: 202,
        title: 'P&S Noble Apartments',
        price: 'R350,000',
        beds: 1,
        baths: 1,
        area: '45m²',
        image: '/p&s.jpg',
        description: 'Modern 1-bedroom apartments in the successful P&S Robinpark Estate development.'
      },
      {
        id: 203,
        title: 'Spacious Family Home',
        price: 'R950,000',
        beds: 4,
        baths: 2.5,
        area: '180m²',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80',
        description: 'Spacious family home with modern finishes and a large garden.'
      }
    ]
  },
  {
    id: 3,
    name: 'Kocksoord',
    units: 18,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80',
    properties: [
      {
        id: 301,
        title: 'Modern Studio Apartment',
        price: 'R250,000',
        beds: 0,
        baths: 1,
        area: '35m²',
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        description: 'Compact and stylish studio apartment, perfect for young professionals.'
      },
      {
        id: 302,
        title: 'P&S Noble Apartments',
        price: 'R350,000',
        beds: 1,
        baths: 1,
        area: '45m²',
        image: '/p&s.jpg',
        description: 'Modern 1-bedroom apartments in the successful P&S development.'
      },
      {
        id: 303,
        title: 'Luxury Penthouse',
        price: 'R1,200,000',
        beds: 2,
        baths: 2,
        area: '90m²',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        description: 'Stunning penthouse apartment with panoramic views and premium finishes.'
      }
    ]
  },
  {
    id: 4,
  name: 'Northriding',
  units: 1,
  soldOut: false,
  image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?...',
  properties: [
      {
        id: 401,
        title: 'Ngonyama Lifestyle Estate',
        price: 'R450,000',
        beds: 3,
        baths: 2,
        area: '250m²',
        image: '/ngonyama.jpg',
        description: 'Exclusive investment opportunity in our upcoming private estate.'
      },
      {
        id: 402,
        title: 'Executive Home',
        price: 'R1,500,000',
        beds: 4,
        baths: 3,
        area: '300m²',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80',
        description: 'Luxurious executive home in the prestigious Northriding area.'
      },
      {
        id: 403,
        title: 'Modern Townhouse',
        price: 'R950,000',
        beds: 3,
        baths: 2.5,
        area: '180m²',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80',
        description: 'Contemporary townhouse with high-end finishes in a secure complex.'
      }
    ]
  }
];

const Locations: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  
  const handleViewProperties = (locationId: number) => {
    setSelectedLocation(locationId);
  };
  
  const closeModal = () => {
    setSelectedLocation(null);
  };
  
  const selectedLocationData = selectedLocation !== null 
    ? locations.find(loc => loc.id === selectedLocation) 
    : null;

  return (
    <section id="locations" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Available Locations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our strategically located properties in growing communities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map(location => (
            <div key={location.id} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              
              <img 
                src={location.image} 
                alt={location.name} 
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                <div className="flex items-center mb-2">
                  <MapPin size={18} className="text-white mr-2" />
                  <h3 className="text-xl font-bold text-white">{location.name}</h3>
                </div>

                {location.soldOut ? (
                  <div>
                    <p className="text-red-400 font-bold mb-1">Stands Sold Out</p>
                    <p className="text-white text-sm">Full building package coming soon</p>
                  </div>
                ) : (
                  <p className="text-white">
                    <span className="font-semibold">{location.units}</span> units available
                  </p>
                )}

                {/*
<button
  className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
  onClick={() => handleViewProperties(location.id)}
>
  View Properties
</button>
*/}

              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Location Properties Modal */}
      {selectedLocationData && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <motion.div 
            className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-blue-900">
                Properties in {selectedLocationData.name}
              </h2>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedLocationData.properties.map(property => (
                  <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={property.image} 
                        alt={property.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-blue-900">{property.title}</h3>
                        <p className="text-blue-600 font-semibold">{property.price}</p>
                      </div>
                      
                      <p className="text-gray-600 mb-3">{property.description}</p>
                      
                      <div className="flex justify-between text-gray-600 mb-4">
                        <div className="flex items-center">
                          <span>{property.beds} {property.beds === 1 ? 'Bed' : 'Beds'}</span>
                        </div>
                        <div className="flex items-center">
                          <span>{property.baths} {property.baths === 1 ? 'Bath' : 'Baths'}</span>
                        </div>
                        <div className="flex items-center">
                          <span>{property.area}</span>
                        </div>
                      </div>
                      
                      <a 
                        href="#contact" 
                        className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors text-center"
                        onClick={closeModal}
                      >
                        Enquire Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Locations;