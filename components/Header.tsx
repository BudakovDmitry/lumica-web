import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Філософія', href: '#philosophy' },
    { name: 'Можливості', href: '#features' },
    { name: 'Для кого', href: '#audience' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-3xl font-semibold tracking-tight text-lumica-dark">
          Lumica
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lumica-subtext hover:text-lumica-dark transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#early-access" 
            className="px-6 py-2.5 bg-lumica-dark text-white rounded-full font-medium hover:bg-opacity-90 transition-transform hover:scale-105"
          >
            Ранній доступ
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-lumica-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-6 md:hidden flex flex-col space-y-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-medium text-lumica-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#early-access" 
            className="text-center px-6 py-3 bg-lumica-dark text-white rounded-full font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Ранній доступ
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;