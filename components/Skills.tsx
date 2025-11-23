import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const getColors = (idx: number) => {
    const colors = [
      { bg: 'bg-pastel-rose', accent: 'bg-rose-400', border: 'border-rose-100' },
      { bg: 'bg-pastel-blue', accent: 'bg-blue-400', border: 'border-blue-100' },
      { bg: 'bg-pastel-yellow', accent: 'bg-yellow-400', border: 'border-yellow-100' },
      { bg: 'bg-pastel-mint', accent: 'bg-teal-400', border: 'border-teal-100' },
      { bg: 'bg-pastel-lavender', accent: 'bg-purple-400', border: 'border-purple-100' },
    ];
    return colors[idx % colors.length];
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and tools I use to build solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((category, idx) => {
            const colors = getColors(idx);
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${colors.bg} rounded-2xl p-8 border ${colors.border} shadow-sm hover:shadow-md transition-shadow`}
              >
                <h3 className="font-heading text-xl font-bold text-slate-800 mb-6 flex items-center">
                  <span className={`w-2 h-8 rounded-full mr-3 ${colors.accent}`}></span>
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-700 text-sm font-medium border border-white/50 shadow-sm hover:bg-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;