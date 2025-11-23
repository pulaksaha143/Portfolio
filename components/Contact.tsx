
import React from 'react';
import { CONTACT } from '../constants';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-pastel-blue to-pastel-purple rounded-[2.5rem] p-8 md:p-12 text-center shadow-lg">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-800 mb-6">Let's Connect</h2>
          <p className="text-slate-600 mb-10 max-w-xl mx-auto">
            I'm currently looking for new opportunities in AI & Machine Learning. 
            Whether you have a question or just want to say hi, my inbox is always open!
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
             <div className="flex items-center justify-center bg-white/60 backdrop-blur-sm p-4 rounded-xl">
               <Mail className="text-teal-600 mr-3" size={20} />
               <a href={`mailto:${CONTACT.email}`} className="text-slate-700 font-medium hover:text-teal-700 transition-colors">{CONTACT.email}</a>
             </div>
          </div>

           <div className="flex justify-center gap-6">
                <a 
                  href={CONTACT.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-white text-blue-600 rounded-full shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300"
                  title="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href={CONTACT.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-white text-slate-800 rounded-full shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300"
                  title="GitHub"
                >
                  <Github size={24} />
                </a>
          </div>
          
          <div className="mt-10 pt-10 border-t border-slate-200/50 flex flex-col items-center text-slate-500 text-sm">
             <div className="flex items-center mb-2">
               <MapPin size={16} className="mr-2" />
               {CONTACT.location}
             </div>
             <p>© {new Date().getFullYear()} Pulak Saha. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
