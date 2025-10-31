import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Home, Trees, BadgeDollarSign, Building2, Palmtree, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ThabaViewLodgeProps {
  scrollToContact: () => void;
}

const wildlife = [
  'Zebra',
  'Sable',
  'Nyala',
  'Kudu',
  'Blesbok',
  'White Blesbok',
  'Warthog',
  'Wildebeest',
  'Impala',
  'Eland and more'
];

const whyUsPoints = [
  {
    title: 'Resort Amenities',
    description: "We're planning to enhance the experience with fantastic food restaurants and convenient stores offering visitors a perfect blend of nature, leisure, and convenience. This project isn't just about building a golf park; it's about creating a destination where adventure meets comfort."
  },
  {
    title: 'Flexible Home Options',
    description: "Choosing the perfect home is a big decision, and we're here to make it easy for you. Whether you opt for our cozy 2-bedroom house plan or decide to go big with a spacious 5-bedroom design, you're not just investing in a place to live."
  },
  {
    title: 'Lifetime Investment',
    description: "This is more than a home—it's an investment that can pay you back every month for the rest of your life. Imagine a space that not only provides comfort and security but also offers unlimited holidays and endless opportunities."
  }
];

const projectImages = [
<<<<<<< HEAD
  '/thaba1.jpeg',
  '/thaba2.jpeg',
  '/thaba3.jpeg',
  '/thaba4.jpeg',
  '/thaba5.jpeg'
=======
  '/thaba1.jpg',
  '/thaba2.jpg',
  '/thaba3.jpg',
  '/thaba4.jpg',
  '/thaba5.jpg'
>>>>>>> e89bc2bb7270cb6a977a97e0f0d48b4c51f84ace
];

const ThabaViewLodge: React.FC<ThabaViewLodgeProps> = ({ scrollToContact }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + projectImages.length) % projectImages.length);
    }
  };

  const handleNextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % projectImages.length);
    }
  };

  return (
    <section id="thaba-view" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <span className="text-green-600 font-semibold tracking-wider uppercase text-sm">Boutique Lodge</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            THABA VIEW LODGE
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-2">BOUTIQUE LODGE</p>
          <div className="flex items-center justify-center text-green-700 text-lg">
            <MapPin size={20} className="mr-2" />
            <span>Die Wildernis is Waar Die Huis is - HARTBEESPOORT</span>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {projectImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`Thaba View ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                    View
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Thaba View</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              Thabakgolo Boutique Game Lodge is not just any lodge—it's a vibrant home to wild wonders and adventurous souls like you.
            </p>
            <p>
              Imagine waking up every day feeling like you're on a thrilling wild venture holiday. Picture owning a 500m² land piece of this incredible place, where the beauty of the wild surrounds you and adventure is just outside your doorstep.
            </p>
            <p className="font-semibold text-green-700">
              This is your chance to own a slice of paradise in a game lodge that feels like home to both wildlife and adventurers. Don't miss out on making this dream a reality.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-green-700 to-green-900 rounded-2xl shadow-xl p-8 md:p-12 mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center mb-6">
            <Palmtree size={32} className="mr-3" />
            <h2 className="text-3xl font-bold">About Our Animals</h2>
          </div>
          <p className="text-lg mb-6">Our wildlife animals:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {wildlife.map((animal, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <p className="font-semibold">{animal}</p>
              </motion.div>
            ))}
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <p className="text-lg leading-relaxed">
              Imagine owning a piece of land – 500m² – where you can build your dream home and create a steady stream of income! By owning a share in this exclusive opportunity, you can design your personal retreat or use the space for short-term rentals, generating lifetime earnings.
            </p>
            <p className="mt-4 text-lg">
              This is more than just land; it's your chance to blend luxury living with smart investment. Don't miss out on turning your dream into reality while building lasting financial security.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center mb-8">
            <BadgeDollarSign size={32} className="mr-3 text-green-700" />
            <h2 className="text-3xl font-bold text-gray-900">How to Invest</h2>
          </div>
          <div className="space-y-6 text-gray-700">
            <p className="text-lg">
              Are you ready to invest in your dream game lodge? We're here to help you choose the perfect 500m² incredible land to suit your needs and lifestyle.
            </p>
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <p className="font-bold text-xl text-green-900 mb-2">Investment Details:</p>
              <p className="mb-2">Each 1ha share is currently available for <span className="font-bold text-2xl text-green-700">R450,000</span></p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 text-green-700">Payment Option 1:</h3>
                <p>50% down payment with balance settled within 2 to 3 months payment plan</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-3 text-green-700">Payment Option 2:</h3>
                <p>Share block financing available to ease your purchase process</p>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <p className="font-semibold text-lg text-blue-900 mb-2">Exciting news!</p>
              <p className="mb-3">Our building phase starts in the next 6 to 10 months. We will construct affordable, modern pots tailored for your convenience.</p>
              <p className="text-blue-800">Plus, if you're not using your house, the resort will rent it out on your behalf, generating income while you're away.</p>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {whyUsPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-green-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
              <p className="text-gray-700 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl shadow-xl p-8 md:p-12 mb-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex items-center mb-6">
            <Building2 size={32} className="mr-3" />
            <h2 className="text-3xl font-bold">Our Mission</h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Our mission is simple but powerful: to create a life that generates income for our communities, allowing you to transform your home into a source of ongoing revenue. Imagine a place where your property isn't just a retreat, but an investment that works for you—even when you're not using it.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-lg leading-relaxed mb-4">
                Welcome to a new kind of ownership. Our resort handles all the work, from maintenance to booming marketing efforts, so you can enjoy the benefits without any hassle. It's not just a timeshare; it's a lifetime share—granting you unlimited time at your stunning Boutique Lodge.
              </p>
              <p className="text-lg leading-relaxed">
                Experience the perfect blend of security and luxury, surrounded by the serene sounds of birdsong in the wild. This is more than a vacation spot—it's a lifestyle where your home becomes a haven that pays you back.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Wildlife Portfolio</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our wildlife portfolio offers a unique opportunity to connect deeply with the natural world. It's more than just land; it's a sanctuary where memories are made, where every day is a celebration of life's wonders.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Whether it's the thrill of spotting elusive creatures, the peaceful solitude of untouched landscapes, or the simple pleasure of watching the sun paint the horizon in golden hues, this experience is unparalleled.
          </p>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border-2 border-green-200">
            <p className="text-xl text-gray-800 leading-relaxed font-medium mb-4">
              Imagine yourself surrounded by the breathtaking beauty of nature, living in the heart of a vibrant ecosystem teeming with diverse game animals. Picture mornings awakened by the gentle rustling of leaves and the calls of majestic wildlife, evenings spent under starlit skies, and the joyous laughter of your loved ones echoing through the wilderness.
            </p>
            <p className="text-lg text-gray-700">
              Let your imagination run wild. See yourself and your family thriving in this heart of a beautiful wildlife haven—a place where every moment is infused with magic, wonder, and a profound sense of peace.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="text-xl text-gray-700 mb-6">
            We would love to share more details about how you can become part of this incredible journey.
          </p>
          <motion.button
            onClick={scrollToContact}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </div>

      {selectedImage !== null && (
<<<<<<< HEAD
  <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-start justify-center p-4 pt-24">
    <div className="relative max-w-6xl w-full max-h-[calc(100vh-6rem)] flex flex-col items-center">
      
      {/* Close Button */}
      <button
        className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-50 flex items-center justify-center"
        onClick={() => setSelectedImage(null)}
      >
        <X size={24} className="text-gray-800 hover:text-green-600" />
      </button>

      {/* Image wrapper */}
      <div className="relative w-full flex items-center justify-center">
        <img
          src={projectImages[selectedImage]}
          alt={`Thaba View ${selectedImage + 1}`}
          className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg shadow-xl"
        />

        {/* Desktop Prev / Next Buttons */}
        <button
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-50 hidden md:flex items-center justify-center"
          onClick={handlePrevImage}
        >
          <ChevronLeft size={28} className="text-gray-800 hover:text-green-600" />
        </button>
        <button
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110 z-50 hidden md:flex items-center justify-center"
          onClick={handleNextImage}
        >
          <ChevronRight size={28} className="text-gray-800 hover:text-green-600" />
        </button>
      </div>

      {/* Image Counter (Below image) */}
      <div className="mt-3 bg-white bg-opacity-90 px-4 py-1.5 rounded-full shadow-md">
        <p className="text-sm font-semibold text-gray-800">{selectedImage + 1} / {projectImages.length}</p>
      </div>

      {/* Mobile Prev / Next */}
      <div className="flex md:hidden gap-4 justify-center mt-4">
        <button
          className="bg-white/90 backdrop-blur-sm rounded-full p-3 text-gray-800 hover:text-green-600 hover:bg-white transition-all shadow-lg"
          onClick={handlePrevImage}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="bg-white/90 backdrop-blur-sm rounded-full p-3 text-gray-800 hover:text-green-600 hover:bg-white transition-all shadow-lg"
          onClick={handleNextImage}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  </div>
)}

=======
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-800 hover:text-green-600 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 text-gray-800 hover:text-green-600 transition-colors z-10 hidden md:block"
            onClick={handlePrevImage}
          >
            <ChevronLeft size={32} />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 text-gray-800 hover:text-green-600 transition-colors z-10 hidden md:block"
            onClick={handleNextImage}
          >
            <ChevronRight size={32} />
          </button>

          <div className="relative max-w-6xl w-full">
            <img
              src={projectImages[selectedImage]}
              alt={`Thaba View ${selectedImage + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white bg-opacity-90 px-4 py-2 rounded-full">
              <p className="text-sm font-semibold text-gray-800">
                {selectedImage + 1} / {projectImages.length}
              </p>
            </div>

            <div className="flex md:hidden gap-4 justify-center mt-4">
              <button
                className="bg-white rounded-full p-3 text-gray-800 hover:text-green-600 transition-colors"
                onClick={handlePrevImage}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="bg-white rounded-full p-3 text-gray-800 hover:text-green-600 transition-colors"
                onClick={handleNextImage}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
>>>>>>> e89bc2bb7270cb6a977a97e0f0d48b4c51f84ace
    </section>
  );
};

export default ThabaViewLodge;
