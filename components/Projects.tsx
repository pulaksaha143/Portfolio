import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const getCardStyle = (index: number) => {
    const styles = [
      { bg: 'bg-pastel-cream', hoverBorder: 'hover:border-yellow-200' },
      { bg: 'bg-pastel-mint', hoverBorder: 'hover:border-teal-200' },
      { bg: 'bg-pastel-lavender', hoverBorder: 'hover:border-purple-200' },
    ];
    return styles[index % styles.length];
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A selection of projects demonstrating my skills in AI, Data Analysis, and Software Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => {
             const style = getCardStyle(index);
             return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group flex flex-col ${style.bg} rounded-2xl overflow-hidden border border-transparent ${style.hoverBorder} hover:shadow-xl transition-all duration-300`}
              >
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-heading text-xl font-bold text-slate-800 group-hover:text-teal-600 transition-colors">
                      {project.title}
                    </h3>
                    {project.links?.repo && (
                      <a 
                        href={project.links.repo}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ArrowUpRight size={20} className="text-slate-400 group-hover:text-teal-600 transition-colors opacity-0 group-hover:opacity-100" />
                      </a>
                    )}
                  </div>
                  
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-white/60 backdrop-blur-sm text-xs font-semibold text-slate-700 rounded-md border border-white/40">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {project.description.map((desc, idx) => (
                      <li key={idx} className="text-slate-600 text-sm leading-relaxed flex items-start">
                        <span className="mr-2 mt-1.5 w-1 h-1 bg-teal-400 rounded-full flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="px-8 py-4 bg-white/50 border-t border-slate-100 mt-auto">
                  {project.links?.repo ? (
                    <a 
                      href={project.links.repo}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
                    >
                      <Github size={16} className="mr-2" />
                      View Source Code
                    </a>
                  ) : (
                    <span className="flex items-center text-sm font-medium text-slate-400 cursor-not-allowed">
                      <Github size={16} className="mr-2" />
                      Source Code Private
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;