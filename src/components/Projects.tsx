import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, ExternalLink } from 'lucide-react';
import ThabaViewLodge from './ThabaViewLodge';
import GreenlandsEstate from './GreenlandsEstate';

interface ProjectsProps {
  scrollToContact: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ scrollToContact }) => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects = [
    {
      id: 'thaba-view',
      title: 'Thaba View Lodge',
      subtitle: 'Boutique Lodge',
      location: 'Hartbeespoort',
      image: '/thaba1.jpeg',
      description: 'A vibrant home to wild wonders and adventurous souls. Own a 500m² piece of paradise in a game lodge.',
      color: 'from-green-700 to-green-900'
    },
    {
      id: 'greenlands',
      title: 'Greenlands Lifestyle Private Estate',
      subtitle: 'Luxury Living',
      location: 'Randfontein Middelvei 255iQ',
      image: '/greenland1.jpeg',
      description: 'Where luxury meets security in the perfect harmony of a private oasis. Affordable housing solutions without compromising on luxury.',
      color: 'from-blue-700 to-blue-900',
      website: 'https://www.morekeyhome.com'
    }
  ];

  return (
    <>
      <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Our Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our exclusive developments designed to offer luxury, comfort, and exceptional investment opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-70 transition-opacity`}></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="text-sm font-semibold text-gray-800">{project.subtitle}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin size={18} className="mr-2 text-blue-600" />
                      <span>{project.location}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-semibold group-hover:text-blue-700">
                        View Details →
                      </span>
                      {project.website && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center text-gray-500 hover:text-blue-600 transition-colors"
                        >
                          <ExternalLink size={18} className="mr-1" />
                          <span className="text-sm">Website</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
  {selectedProject && (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center p-4 pt-24" // offset from top
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        className="relative w-full max-w-7xl max-h-[calc(100vh-6rem)] bg-white rounded-3xl shadow-2xl overflow-hidden"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-4 right-4 z-50 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110"
        >
          <X size={24} className="text-gray-700" />
        </button>

        <div className="overflow-y-auto max-h-[calc(100vh-8rem)]">
          {selectedProject === 'thaba-view' && <ThabaViewLodge scrollToContact={scrollToContact} />}
          {selectedProject === 'greenlands' && <GreenlandsEstate scrollToContact={scrollToContact} />}
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </>
  );
};

export default Projects;
