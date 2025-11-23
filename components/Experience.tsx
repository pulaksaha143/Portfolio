import React from 'react';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-5 bg-pastel-cream">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mb-3">Experience & Job Simulations</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>
            Hands-on experience gained through professional simulations at top-tier organizations.
          </p>
        </div>

        <div className="position-relative" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Vertical Line */}
          <div className="position-absolute top-0 bottom-0 start-0 ms-4 border-start border-2 border-secondary opacity-25 d-md-none"></div>
          <div className="position-absolute top-0 bottom-0 start-50 border-start border-2 border-secondary opacity-25 d-none d-md-block"></div>

          <div className="d-flex flex-column gap-4">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`row g-0 align-items-center ${index % 2 === 0 ? '' : 'flex-md-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <div className="col-auto d-md-flex justify-content-center position-absolute start-50 translate-middle-x d-none" style={{ zIndex: 1 }}>
                  <div className="bg-light border border-white shadow-sm rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <div className="bg-secondary rounded-circle" style={{ width: '12px', height: '12px' }}></div>
                  </div>
                </div>

                {/* Mobile Dot */}
                <div className="col-auto d-md-none ps-2 pe-3" style={{ zIndex: 1 }}>
                   <div className="bg-light border border-white shadow-sm rounded-circle d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                    <div className="bg-secondary rounded-circle" style={{ width: '10px', height: '10px' }}></div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`col ${index % 2 === 0 ? 'pe-md-5' : 'ps-md-5'}`}>
                  <div className="bg-white p-4 rounded-4 shadow-sm border border-light card-hover h-100">
                    <div className="d-flex justify-content-between align-items-start mb-2 flex-wrap gap-2">
                       <h3 className="h5 fw-bold text-dark mb-0">{exp.role}</h3>
                       <span className="badge bg-pastel-blue text-primary border border-primary-subtle rounded-pill fw-medium text-wrap text-start">
                         {exp.type}
                       </span>
                    </div>
                    
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="text-teal fw-semibold">{exp.company}</span>
                      <span className="text-muted small d-flex align-items-center bg-light px-2 py-1 rounded">
                        <Calendar size={14} className="me-1" />
                        {exp.period}
                      </span>
                    </div>
                    
                    <ul className="list-unstyled mb-0">
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className="d-flex align-items-start mb-2 text-secondary small">
                          <span className="d-inline-block rounded-circle me-2 mt-2 flex-shrink-0" style={{ width: '6px', height: '6px', backgroundColor: 'var(--pastel-peach)' }}></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Spacer for alternate side on desktop */}
                <div className="col d-none d-md-block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;