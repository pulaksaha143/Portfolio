import React from 'react';
import { CONTACT } from '../constants';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-5 bg-white">
      <div className="container py-5">
        <div className="card border-0 rounded-5 p-4 p-md-5 text-center shadow" 
             style={{ 
               background: 'linear-gradient(135deg, var(--pastel-blue), var(--pastel-purple))' 
             }}>
          <div className="card-body p-0">
            <h2 className="display-5 fw-bold text-dark mb-4">Let's Connect</h2>
            <p className="lead text-secondary mb-5 mx-auto" style={{ maxWidth: '600px' }}>
              I'm currently looking for new opportunities in AI & Machine Learning. 
              Whether you have a question or just want to say hi, my inbox is always open!
            </p>
            
            <div className="d-flex justify-content-center mb-5">
               <div className="bg-white bg-opacity-75 p-3 rounded-4 d-flex align-items-center shadow-sm">
                 <Mail className="text-teal me-3" size={20} />
                 <a href={`mailto:${CONTACT.email}`} className="text-dark fw-medium text-decoration-none">{CONTACT.email}</a>
               </div>
            </div>

             <div className="d-flex justify-content-center gap-4">
                  <a 
                    href={CONTACT.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-light rounded-circle p-3 shadow-sm card-hover d-flex align-items-center justify-content-center"
                    style={{ width: '60px', height: '60px' }}
                    title="LinkedIn"
                  >
                    <Linkedin size={28} className="text-primary" />
                  </a>
                  <a 
                    href={CONTACT.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-light rounded-circle p-3 shadow-sm card-hover d-flex align-items-center justify-content-center"
                    style={{ width: '60px', height: '60px' }}
                    title="GitHub"
                  >
                    <Github size={28} className="text-dark" />
                  </a>
            </div>
            
            <div className="mt-5 pt-4 border-top border-secondary border-opacity-10">
               <div className="d-flex justify-content-center align-items-center text-secondary small mb-2">
                 <MapPin size={16} className="me-2" />
                 {CONTACT.location}
               </div>
               <p className="text-secondary small mb-0">© {new Date().getFullYear()} Pulak Saha. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;