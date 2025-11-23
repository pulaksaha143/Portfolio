import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { CONTACT, PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-pastel-pink via-pastel-cream to-pastel-blue">
      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pastel-purple rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-pastel-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-80 h-80 bg-pastel-peach rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pastel-mint rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-100 text-slate-500 text-sm font-medium mb-6 shadow-sm">
                Hello, I'm
              </span>
              <h1 className="font-heading text-5xl md:text-7xl font-bold text-slate-800 mb-4 leading-tight">
                {PROFILE.name}
              </h1>
              <h2 className="text-xl md:text-2xl text-slate-600 font-medium mb-6 leading-relaxed">
                Aspiring <span className="text-teal-500">AI & ML Developer</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 max-w-2xl leading-relaxed mx-auto md:mx-0">
                {PROFILE.about}
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
                <a 
                  href={CONTACT.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full text-slate-600 hover:text-blue-600 hover:shadow-md transition-all duration-300 border border-slate-100 ring-4 ring-transparent hover:ring-blue-50"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={CONTACT.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full text-slate-600 hover:text-gray-900 hover:shadow-md transition-all duration-300 border border-slate-100 ring-4 ring-transparent hover:ring-gray-50"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={`mailto:${CONTACT.email}`}
                  className="p-3 bg-white rounded-full text-slate-600 hover:text-red-500 hover:shadow-md transition-all duration-300 border border-slate-100 ring-4 ring-transparent hover:ring-red-50"
                >
                  <Mail size={20} />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="#contact" className="px-8 py-3 bg-slate-800 text-white rounded-full font-medium hover:bg-slate-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
                  Contact Me
                </a>
                <button className="px-8 py-3 bg-white text-slate-800 border border-slate-200 rounded-full font-medium hover:bg-pastel-blue transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2 group">
                  <Download size={18} className="group-hover:text-teal-600 transition-colors" />
                  Download Resume
                </button>
              </div>
            </motion.div>
          </div>

          {/* Image/Visual */}
          <div className="flex-1 w-full max-w-md md:max-w-lg relative">
             <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-pastel-teal to-pastel-purple rounded-[2rem] transform rotate-6 scale-105 opacity-80 blur-xl"></div>
              <div className="relative bg-white p-3 rounded-[2rem] shadow-2xl border-4 border-white overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?q=80&w=800&auto=format&fit=crop" 
                  alt="Cute Tech Workspace" 
                  className="rounded-[1.5rem] w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;