import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar navbar-expand-md fixed-top transition-all duration-300 ${
      isScrolled ? 'glass-nav py-2 shadow-sm' : 'bg-transparent py-3'
    }`}>
      <div className="container">
        <a className="navbar-brand fw-bold fs-4 text-dark" href="#">
          Pulak<span className="text-teal">.</span>
        </a>
        
        <button 
          className="navbar-toggler border-0 focus-ring focus-ring-light" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''} justify-content-end`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            {navLinks.map((link) => (
              <li className="nav-item px-2" key={link.name}>
                <a 
                  className="nav-link fw-medium text-secondary hover-text-teal" 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{ transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-teal)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;