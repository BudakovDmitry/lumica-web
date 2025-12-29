import React from 'react';

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ src, alt, className = '' }) => {
  return (
    <div className={`relative mx-auto border-gray-900 bg-gray-900 border-[8px] rounded-[2.5rem] shadow-2xl ${className}`}>
      {/* Side buttons */}
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[11px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[11px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[11px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[11px] top-[142px] rounded-r-lg"></div>
      
      {/* Screen container */}
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white relative aspect-[9/19.5]">
         <img 
           src={src} 
           alt={alt} 
           className="w-full h-full object-cover" 
           loading="lazy"
         />
         {/* Glossy reflection effect */}
         <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-50 rounded-[2rem]"></div>
      </div>
    </div>
  );
};

export default PhoneMockup;