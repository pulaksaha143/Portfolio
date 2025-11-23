import React from 'react';
import { CERTIFICATIONS, EDUCATION } from '../constants';
import { motion } from 'framer-motion';
import { Award, GraduationCap, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const getCertColor = (index: number) => {
      const colors = [
          'bg-pastel-blue hover:bg-blue-100 border-blue-100',
          'bg-pastel-pink hover:bg-pink-100 border-pink-100',
          'bg-pastel-green hover:bg-green-100 border-green-100',
          'bg-pastel-purple hover:bg-purple-100 border-purple-100',
          'bg-pastel-yellow hover:bg-yellow-100 border-yellow-100',
          'bg-pastel-orange hover:bg-orange-100 border-orange-100',
      ];
      return colors[index % colors.length];
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education Column */}
          <div>
            <div className="flex items-center mb-8">
              <div className="p-3 bg-rose-100 text-rose-600 rounded-xl mr-4 shadow-sm">
                <GraduationCap size={24} />
              </div>
              <h2 className="font-heading text-3xl font-bold text-slate-800">Education</h2>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="bg-pastel-cream p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                   <div className="absolute top-0 left-0 w-1 h-full bg-rose-300 group-hover:bg-rose-400 transition-colors"></div>
                   <h3 className="font-heading text-lg font-bold text-slate-800">{edu.institution}</h3>
                   <p className="text-teal-600 font-medium mb-2">{edu.degree}</p>
                   <div className="flex flex-col sm:flex-row sm:items-center text-sm text-slate-500 gap-2 sm:gap-4">
                      <span>{edu.period}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="flex items-center"><MapPin size={14} className="mr-1"/> {edu.location}</span>
                   </div>
                   {edu.grade && edu.grade !== 'NA' && (
                     <div className="mt-3 inline-block px-3 py-1 bg-white text-slate-600 text-xs font-semibold rounded-full border border-slate-100">
                       Grade: {edu.grade}
                     </div>
                   )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
             <div className="flex items-center mb-8">
              <div className="p-3 bg-yellow-100 text-yellow-600 rounded-xl mr-4 shadow-sm">
                <Award size={24} />
              </div>
              <h2 className="font-heading text-3xl font-bold text-slate-800">Certifications</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CERTIFICATIONS.map((cert, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.03 }}
                  className={`${getCertColor(index)} p-4 rounded-xl border shadow-sm transition-all duration-300 hover:-translate-y-1`}
                >
                  <h4 className="font-medium text-slate-800 text-sm leading-tight mb-2 line-clamp-2" title={cert.name}>{cert.name}</h4>
                  <p className="text-xs text-slate-500 opacity-80">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;