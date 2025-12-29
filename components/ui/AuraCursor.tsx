import React, { useEffect, useState } from 'react';

const AuraCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.tagName === 'INPUT'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  // Don't render on touch devices
  if (typeof navigator !== 'undefined' && typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Main blurred aura - Increased visibility (darker colors, less blur) */}
      <div 
        className="fixed pointer-events-none z-[9999] mix-blend-multiply transition-transform duration-200 ease-out will-change-transform hidden md:block"
        style={{
          left: 0,
          top: 0,
          transform: `translate(${position.x - (isHovering ? 40 : 24)}px, ${position.y - (isHovering ? 40 : 24)}px)`,
        }}
      >
        <div 
          className={`rounded-full bg-gradient-to-tr from-emerald-400 to-teal-500 blur-lg transition-all duration-300 ${
            isHovering ? 'w-20 h-20 opacity-50' : 'w-12 h-12 opacity-70'
          }`}
        />
      </div>
      
      {/* Small center dot - Made solid, slightly larger and fully opaque */}
      <div 
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          left: 0,
          top: 0,
          transform: `translate(${position.x - 5}px, ${position.y - 5}px)`,
        }}
      >
        <div className={`rounded-full bg-lumica-dark transition-all duration-300 ${
          isHovering ? 'w-2.5 h-2.5 scale-75' : 'w-2.5 h-2.5 scale-100'
        }`} />
      </div>
    </>
  );
};

export default AuraCursor;