import React from 'react';
import { Mail, Phone } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'SIYABONGA MAKHAMBA',
    position: 'Sales Person',
    experience: '7 years of experience',
    description: 'An expert in finding the perfect property for his clients. His dedication to customer satisfaction and exceptional communication skills make him an asset to our team.',
    email: 'siyabonga@ekasinobleproperties.com',
    image: '/siyabonga.jpeg'
  },
  {
    id: 3,
    name: 'MAPASEKA MOJAKI',
    position: 'Rental Specialist',
    experience: '6 years of experience',
    description: 'Mapaseka specializes in helping blacklisted clients secure properties. With her expertise in negotiation and commitment to finding the best deals, she is a valuable member of our team.',
    email: 'mapaseka@ekasinobleproperties.com',
    image: '/mapaseka.jpeg'
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert agents dedicated to finding your perfect property
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map(member => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.position}</p>
                
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <span>{member.experience}</span>
                </div>
                
                <p className="text-gray-700 mb-4">{member.description}</p>
                
                <div className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  <Mail size={16} className="mr-2" />
                  <a href={`mailto:${member.email}`}>{member.email}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;