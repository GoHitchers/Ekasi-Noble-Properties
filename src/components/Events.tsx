import React, { useState, useRef } from 'react';
import { Calendar, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const events = [
  {
    id: 2,
    title: "Greengate Investment Workshop",
    date: "April 26, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Greengate, Beyers Naude",
    description: "Learn about investment opportunities in our Greengate development and get expert advice on property investment.",
    image: "/android-chrome-192x192.png"
  },
  {
    id: 3,
    title: "Ngonyama Property Workshop",
    date: "May 3, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "North Riding",
    description: "Discover the exclusive Ngonyama Lifestyle Estate development and learn about available investment options.",
    image: "/android-chrome-192x192.png"
  },
  {
    id: 4,
    title: "Robin Park Group Investors Meeting",
    date: "May 10, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Robin Park, Randfontein",
    description: "Special meeting for R147k Group Investors. Learn about the investment structure and expected returns.",
    image: "/android-chrome-192x192.png"
  },
  {
    id: 5,
    title: "Greenhills Investment Workshop",
    date: "May 17, 2025",
    time: "10:00 AM - 1:00 PM",
    location: "Greenhills",
    description: "Comprehensive workshop about investment opportunities in the Greenhills area.",
    image: "/android-chrome-192x192.png"
  },
  {
    id: 6,
    title: "Kocksoord Apartments Workshop",
    date: "May 24, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Kocksoord",
    description: "Learn about our new apartment development in Kocksoord and various investment options available.",
    image: "/android-chrome-192x192.png"
  },
  

  
];

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const Events: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth());
  const currentYear = new Date().getFullYear();
  const monthsContainerRef = useRef<HTMLDivElement>(null);

  // Filter events by selected month
  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getMonth() === selectedMonth;
  });

  return (
    <section id="events" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">Upcoming Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Join us at our upcoming events to learn more about property investment and homeownership.
          </p>
        </div>

        <div className="mb-10 sm:mb-12">
          <div
            ref={monthsContainerRef}
            className="flex justify-start md:justify-center overflow-x-auto py-3 px-4 md:px-0 scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="inline-flex rounded-lg shadow-md bg-white p-1" role="group">
              {monthNames.map((month, index) => (
                <button
                  key={index}
                  type="button"
                  className={`px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition-all duration-200 ${
                    index === 0 ? 'rounded-l-md' : ''
                  } ${
                    index === 11 ? 'rounded-r-md' : ''
                  } ${
                    selectedMonth === index
                      ? 'bg-blue-600 text-white shadow-md scale-105'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  } whitespace-nowrap`}
                  onClick={() => setSelectedMonth(index)}
                >
                  {month}
                </button>
              ))}
            </div>
          </div>

          <div className="text-center text-gray-600 mt-4">
            <p className="text-sm sm:text-base font-medium">Showing events for {monthNames[selectedMonth]} {currentYear}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredEvents.map(event => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
              <div className="h-56 sm:h-64 overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">{event.title}</h3>

                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-start group/item">
                    <Calendar size={20} className="text-blue-600 mt-0.5 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700 text-sm sm:text-base">{event.date}</span>
                  </div>

                  <div className="flex items-start group/item">
                    <Clock size={20} className="text-blue-600 mt-0.5 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700 text-sm sm:text-base">{event.time}</span>
                  </div>

                  <div className="flex items-start group/item">
                    <MapPin size={20} className="text-blue-600 mt-0.5 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-700 text-sm sm:text-base">{event.location}</span>
                  </div>

                  <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {event.link ? (
  <a
    href={event.link}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-3.5 px-6 rounded-lg transition-all duration-200 text-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
  >
    Register Now
  </a>
) : (
  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-3.5 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
    Register Now
  </button>
)}

              </div>
            </div>
          ))}

          {filteredEvents.length === 0 && (
            <div className="col-span-full text-center py-12 sm:py-16 bg-white rounded-xl shadow-md">
              <Calendar size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-600 text-base sm:text-lg font-medium">No events scheduled for {monthNames[selectedMonth]} {currentYear}</p>
              <p className="text-gray-500 text-sm sm:text-base mt-2">Check back soon for upcoming events</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;
