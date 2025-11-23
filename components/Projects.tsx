import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const getCardStyle = (index: number) => {
    const styles = [
      { bg: 'bg-pastel-cream', border: 'border-warning-subtle' },
      { bg: 'bg-pastel-mint', border: 'border-info-subtle' },
      { bg: 'bg-pastel-lavender', border: 'border-secondary-subtle' },
    ];
    return styles[index % styles.length];
  };

  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mb-3">Featured Projects</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>
            A selection of projects demonstrating my skills in AI, Data Analysis, and Software Engineering.
          </p>
        </div>

        <div className="row g-4">
          {PROJECTS.map((project, index) => {
             const style = getCardStyle(index);
             return (
              <div className="col-lg-4 col-md-6" key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`card h-100 border rounded-4 overflow-hidden card-hover ${style.bg}`}
                >
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h3 className="h5 fw-bold text-dark mb-0">
                        {project.title}
                      </h3>
                      {project.links?.repo && (
                        <a 
                          href={project.links.repo}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted hover-text-teal"
                        >
                          <ArrowUpRight size={20} />
                        </a>
                      )}
                    </div>
                    
                    <div className="mb-4 d-flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="badge bg-white text-secondary border fw-normal">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <ul className="list-unstyled mb-4 flex-grow-1">
                      {project.description.map((desc, idx) => (
                        <li key={idx} className="d-flex align-items-start mb-2 text-secondary small">
                          <span className="d-inline-block rounded-circle me-2 mt-2 flex-shrink-0 bg-info" style={{ width: '5px', height: '5px' }}></span>
                          {desc}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-3 border-top border-light-subtle">
                      {project.links?.repo ? (
                        <a 
                          href={project.links.repo}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="d-flex align-items-center text-secondary text-decoration-none small fw-medium"
                          style={{ transition: 'color 0.2s' }}
                          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-teal)'}
                          onMouseLeave={(e) => e.currentTarget.style.color = ''}
                        >
                          <Github size={16} className="me-2" />
                          View Source Code
                        </a>
                      ) : (
                        <span className="d-flex align-items-center text-muted small fw-medium opacity-50">
                          <Github size={16} className="me-2" />
                          Source Code Private
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;