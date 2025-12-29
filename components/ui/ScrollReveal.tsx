import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in ms
  animation?: 'fade-up' | 'fade-in' | 'slide-in-right' | 'slide-in-left';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  animation = 'fade-up' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Slightly offset so it triggers before bottom
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getAnimationClass = () => {
    switch(animation) {
      case 'fade-in': return 'opacity-0 scale-95';
      case 'slide-in-right': return 'opacity-0 translate-x-20';
      case 'slide-in-left': return 'opacity-0 -translate-x-20';
      case 'fade-up': default: return 'opacity-0 translate-y-10';
    }
  };

  const getVisibleClass = () => {
    switch(animation) {
      case 'fade-in': return 'opacity-100 scale-100';
      case 'slide-in-right': return 'opacity-100 translate-x-0';
      case 'slide-in-left': return 'opacity-100 translate-x-0';
      case 'fade-up': default: return 'opacity-100 translate-y-0';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className} ${isVisible ? getVisibleClass() : getAnimationClass()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;