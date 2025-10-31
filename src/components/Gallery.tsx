import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const galleryImages = [
  // Interior Images
  ...Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
   
    category: 'Interior',
    image: `/interior${i + 1}.jpg`
  })),
  
  // Exterior Images
  ...Array.from({ length: 4 }, (_, i) => ({
    id: 17 + i,
    category: 'Exterior',
    image: `/exterior${i + 1}.jpg`
  }))
];

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<null | {
    id: number;
    image: string;
    title: string;
    category: string;
  }>(null);
  const [showAll, setShowAll] = useState(false);
  
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category.toLowerCase() === activeFilter.toLowerCase());

  const displayedImages = showAll ? filteredImages : filteredImages.slice(0, 8);

  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevImage();
    if (e.key === 'ArrowRight') handleNextImage();
    if (e.key === 'Escape') setSelectedImage(null);
  };

  React.useEffect(() => {
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, [selectedImage]);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Property Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of beautiful properties and interiors
          </p>
        </motion.div>
        
        <motion.div 
          className="flex justify-center mb-8 overflow-x-auto pb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="inline-flex rounded-lg shadow-md" role="group">
            <button
              type="button"
              className={`px-5 py-3 text-sm font-medium rounded-l-lg ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-colors duration-300 whitespace-nowrap`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button
              type="button"
              className={`px-5 py-3 text-sm font-medium ${
                activeFilter === 'interior'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-colors duration-300 whitespace-nowrap`}
              onClick={() => setActiveFilter('interior')}
            >
              Interior
            </button>
            <button
              type="button"
              className={`px-5 py-3 text-sm font-medium rounded-r-lg ${
                activeFilter === 'exterior'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition-colors duration-300 whitespace-nowrap`}
              onClick={() => setActiveFilter('exterior')}
            >
              Exterior
            </button>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedImages.map((img, index) => (
            <motion.div 
              key={img.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              onClick={() => setSelectedImage(img)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={img.image} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-900">{img.title}</h3>
                <p className="text-sm text-gray-600">{img.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredImages.length > 8 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
        
        {/* Image Preview Modal */}
{selectedImage && (
  <div className="fixed inset-0 bg-black bg-opacity-90 flex items-start justify-center z-50 p-4 pt-24">
    <motion.div
      className="relative max-w-5xl w-full max-h-[calc(100vh-6rem)] bg-white rounded-lg flex flex-col"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-800 hover:text-blue-600 transition-colors z-50 shadow-md"
        onClick={() => setSelectedImage(null)}
      >
        <X size={24} />
      </button>

      {/* Prev / Next Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 text-gray-800 hover:text-blue-600 transition-colors z-50 shadow-md"
        onClick={handlePrevImage}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 text-gray-800 hover:text-blue-600 transition-colors z-50 shadow-md"
        onClick={handleNextImage}
      >
        <ChevronRight size={24} />
      </button>

      {/* Image and Card */}
      <div className="flex flex-col w-full h-full">
        <img
          src={selectedImage.image}
          alt={selectedImage.title}
          className="w-full h-full object-contain rounded-t-lg"
          style={{ maxHeight: 'calc(100vh - 8rem)' }} // leave room for header + card
        />
        <div className="p-4 bg-white rounded-b-lg flex-shrink-0">
          <h3 className="text-xl font-bold text-blue-900">{selectedImage.title}</h3>
          <p className="text-gray-600">{selectedImage.category}</p>
        </div>
      </div>
    </motion.div>
  </div>
)}

      </div>
    </section>
  );
};

export default Gallery;