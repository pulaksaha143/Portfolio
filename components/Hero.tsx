import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { CONTACT, PROFILE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="position-relative min-vh-100 d-flex align-items-center pt-5 overflow-hidden">
      {/* Background Gradient */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{
        background: 'linear-gradient(135deg, var(--pastel-pink) 0%, var(--pastel-cream) 50%, var(--pastel-blue) 100%)',
        zIndex: -2
      }}></div>

      {/* Decorative Blobs */}
      <div className="blob bg-pastel-purple" style={{ width: '300px', height: '300px', top: '10%', left: '5%' }}></div>
      <div className="blob bg-pastel-yellow animation-delay-2000" style={{ width: '300px', height: '300px', top: '20%', right: '5%' }}></div>
      <div className="blob bg-pastel-peach animation-delay-4000" style={{ width: '350px', height: '350px', bottom: '-5%', left: '40%' }}></div>
      <div className="blob bg-pastel-mint animation-delay-2000" style={{ width: '250px', height: '250px', top: '50%', left: '20%' }}></div>

      <div className="container position-relative z-1">
        <div className="row align-items-center gy-5">
          
          {/* Text Content */}
          <div className="col-lg-6 text-center text-lg-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="d-inline-block px-3 py-1 rounded-pill bg-white border text-secondary text-sm fw-bold mb-4 shadow-sm">
                Hello, I'm
              </span>
              <h1 className="display-3 fw-bold text-dark mb-3 lh-1">
                {PROFILE.name}
              </h1>
              <h2 className="h3 text-secondary fw-normal mb-4">
                Aspiring <span className="text-teal">AI & ML Developer</span>
              </h2>
              <p className="lead text-secondary mb-5 mx-auto mx-lg-0" style={{ maxWidth: '600px' }}>
                {PROFILE.about}
              </p>
              
              <div className="d-flex justify-content-center justify-content-lg-start gap-3 mb-5">
                <a 
                  href={CONTACT.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-light rounded-circle p-2 shadow-sm d-flex align-items-center justify-content-center"
                  style={{ width: '45px', height: '45px' }}
                >
                  <Linkedin size={20} className="text-secondary" />
                </a>
                <a 
                  href={CONTACT.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-light rounded-circle p-2 shadow-sm d-flex align-items-center justify-content-center"
                  style={{ width: '45px', height: '45px' }}
                >
                  <Github size={20} className="text-secondary" />
                </a>
                <a 
                  href={`mailto:${CONTACT.email}`}
                  className="btn btn-light rounded-circle p-2 shadow-sm d-flex align-items-center justify-content-center"
                  style={{ width: '45px', height: '45px' }}
                >
                  <Mail size={20} className="text-secondary" />
                </a>
              </div>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <a href="#contact" className="btn btn-dark-custom rounded-pill px-4 py-2 fw-medium shadow">
                  Contact Me
                </a>
                <button className="btn btn-light border rounded-pill px-4 py-2 fw-medium shadow-sm d-inline-flex align-items-center justify-content-center gap-2">
                  <Download size={18} />
                  Download Resume
                </button>
              </div>
            </motion.div>
          </div>

          {/* Image/Visual */}
          <div className="col-lg-6">
             <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="position-relative mx-auto"
              style={{ maxWidth: '500px' }}
            >
              <div className="position-absolute w-100 h-100 rounded-5" style={{
                background: 'linear-gradient(to top right, var(--pastel-teal), var(--pastel-purple))',
                transform: 'rotate(6deg) scale(1.05)',
                opacity: 0.8,
                filter: 'blur(10px)',
                top: 0,
                left: 0,
                zIndex: -1
              }}></div>
              <div className="bg-white p-2 rounded-5 shadow-lg border border-4 border-white overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?q=80&w=800&auto=format&fit=crop" 
                  alt="Cute Tech Workspace" 
                  className="img-fluid rounded-5 w-100"
                  style={{ objectFit: 'cover' }}
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