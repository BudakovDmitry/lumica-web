import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
           <p className="text-lumica-dark font-medium">Lumica</p>
           <p className="text-sm text-gray-500 mt-1">Простір турботи, тиші та балансу.</p>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Lumica, all rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;