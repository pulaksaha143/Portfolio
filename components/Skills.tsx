import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const getColors = (idx: number) => {
    const colors = [
      { bg: 'bg-pastel-rose', accent: '#fb7185', border: 'border-danger-subtle' },
      { bg: 'bg-pastel-blue', accent: '#60a5fa', border: 'border-primary-subtle' },
      { bg: 'bg-pastel-yellow', accent: '#facc15', border: 'border-warning-subtle' },
      { bg: 'bg-pastel-mint', accent: '#2dd4bf', border: 'border-info-subtle' },
      { bg: 'bg-pastel-lavender', accent: '#c084fc', border: 'border-secondary-subtle' },
    ];
    return colors[idx % colors.length];
  };

  return (
    <section id="skills" className="py-5 bg-white">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark mb-3">Technical Skills</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>
            A comprehensive overview of my technical abilities and tools I use to build solutions.
          </p>
        </div>

        <div className="row g-4">
          {SKILLS.map((category, idx) => {
            const colors = getColors(idx);
            return (
              <div className="col-md-6" key={category.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`h-100 p-4 rounded-4 border ${colors.border} shadow-sm card-hover ${colors.bg}`}
                >
                  <h3 className="h4 fw-bold text-dark mb-4 d-flex align-items-center">
                    <span 
                      className="d-inline-block rounded-pill me-3" 
                      style={{ width: '6px', height: '32px', backgroundColor: colors.accent }}
                    ></span>
                    {category.name}
                  </h3>
                  <div className="d-flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-2 bg-white rounded-pill text-dark small fw-medium border border-light shadow-sm"
                        style={{ backdropFilter: 'blur(5px)', background: 'rgba(255,255,255,0.8)' }}
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;