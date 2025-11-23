import React from 'react';
import { CERTIFICATIONS, EDUCATION } from '../constants';
import { motion } from 'framer-motion';
import { Award, GraduationCap, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const getCertColor = (index: number) => {
      const colors = [
          'bg-pastel-blue border-primary-subtle',
          'bg-pastel-pink border-danger-subtle',
          'bg-pastel-green border-success-subtle',
          'bg-pastel-purple border-secondary-subtle',
          'bg-pastel-yellow border-warning-subtle',
          'bg-pastel-orange border-warning-subtle',
      ];
      return colors[index % colors.length];
  };

  return (
    <section id="education" className="py-5 bg-white">
      <div className="container py-5">
        
        <div className="row g-5">
          {/* Education Column */}
          <div className="col-lg-6">
            <div className="d-flex align-items-center mb-4">
              <div className="p-3 bg-pastel-rose text-danger rounded-3 me-3">
                <GraduationCap size={24} />
              </div>
              <h2 className="h2 fw-bold text-dark mb-0">Education</h2>
            </div>

            <div className="d-flex flex-column gap-3">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="card border-0 shadow-sm bg-pastel-cream overflow-hidden rounded-4">
                   <div className="card-body p-4 position-relative">
                      <div className="position-absolute top-0 start-0 bottom-0 bg-danger opacity-25" style={{ width: '4px' }}></div>
                      <h3 className="h5 fw-bold text-dark">{edu.institution}</h3>
                      <p className="text-teal fw-medium mb-2">{edu.degree}</p>
                      <div className="d-flex flex-wrap gap-2 text-secondary small mb-2">
                          <span>{edu.period}</span>
                          <span className="d-none d-sm-inline">•</span>
                          <span className="d-flex align-items-center"><MapPin size={14} className="me-1"/> {edu.location}</span>
                      </div>
                      {edu.grade && edu.grade !== 'NA' && (
                        <span className="badge bg-white text-secondary border fw-normal mt-2">
                          Grade: {edu.grade}
                        </span>
                      )}
                   </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="col-lg-6">
             <div className="d-flex align-items-center mb-4">
              <div className="p-3 bg-pastel-yellow text-warning-emphasis rounded-3 me-3">
                <Award size={24} />
              </div>
              <h2 className="h2 fw-bold text-dark mb-0">Certifications</h2>
            </div>

            <div className="row g-3">
              {CERTIFICATIONS.map((cert, index) => (
                <div className="col-sm-6" key={index}>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.03 }}
                    className={`h-100 p-3 rounded-4 border shadow-sm card-hover ${getCertColor(index)}`}
                  >
                    <h4 className="h6 fw-bold text-dark mb-2 text-truncate" title={cert.name}>{cert.name}</h4>
                    <p className="small text-secondary mb-0 opacity-75">{cert.issuer}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;