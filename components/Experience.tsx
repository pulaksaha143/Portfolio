import React from 'react';
import { EXPERIENCE } from '../constants';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-pastel-cream/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-800 mb-4">Experience & Job Simulations</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Hands-on experience gained through professional simulations at top-tier organizations.
          </p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-hover:bg-teal-50 text-slate-500 group-hover:text-teal-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors">
                 <div className="w-3 h-3 bg-current rounded-full"></div>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col gap-2 mb-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                     <h3 className="font-heading text-lg font-bold text-slate-800">{exp.role}</h3>
                     <span className="text-sm px-3 py-1 bg-pastel-blue text-blue-700 rounded-full font-medium border border-blue-100">{exp.type}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-teal-600">{exp.company}</span>
                    <span className="text-slate-500 flex items-center bg-slate-50 px-2 py-0.5 rounded">
                      <Calendar size={14} className="mr-1.5" />
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-2 mt-4">
                  {exp.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-slate-600 text-sm">
                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-pastel-peach rounded-full flex-shrink-0 ring-2 ring-orange-100"></span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;