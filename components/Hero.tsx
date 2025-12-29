import React from 'react';
import EmailForm from './ui/EmailForm';
import PhoneMockup from './ui/PhoneMockup';
import { Sparkles } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';
import { phoneMockups } from '@/assets/phone-mockups';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration with animation */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-lumica-green/40 rounded-full blur-[100px] -z-10 opacity-60 pointer-events-none animate-blob" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-lumica-peach/50 rounded-full blur-[100px] -z-10 opacity-60 pointer-events-none animate-blob animation-delay-2000" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <ScrollReveal animation="fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lumica-dark leading-[1.15] mb-6">
                Lumica — простір для <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">тиші</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-lumica-green/50 -z-0 rounded-full"></span>
                </span>, ясності та щоденних практик
              </h1>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-lg md:text-xl text-lumica-subtext mb-8 leading-relaxed">
                Lumica — це мобільний додаток для усвідомленості, самопізнання та внутрішнього балансу.
                Короткі щоденні практики, м’які ритуали та психологічні інсайти допомагають зупинитись, почути себе і бути в контакті з теперішнім моментом.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400}>
              <div className="bg-white/60 backdrop-blur-sm border border-white p-6 rounded-3xl shadow-sm mb-8 inline-block w-full max-w-xl hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-3 text-sm font-medium text-emerald-700">
                  <Sparkles size={16} className="animate-pulse" />
                  <span>Ми вже майже завершили розробку</span>
                </div>
                <p className="text-lumica-dark mb-4 text-sm">
                  Залиш email — і ти отримаєш ранній доступ до Lumica одним із перших.
                </p>
                <EmailForm id="hero-email" buttonText="Отримати ранній доступ" fullWidth />
              </div>
            </ScrollReveal>
          </div>

          {/* Visual Content (Phone Mockup) */}
          <div className="flex-1 w-full max-w-md md:max-w-full relative flex justify-center md:justify-end">
             <div className="relative w-[280px] md:w-[320px] animate-float">
                {/* Decorative blob behind phone */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[105%] bg-gradient-to-b from-lumica-peach/30 to-lumica-green/30 rounded-full blur-3xl -z-10 animate-breathe"></div>
                
                <PhoneMockup 
                  src={phoneMockups.dashboard} 
                  alt="Lumica Dashboard Screen" 
                  className="rotate-[-2deg] hover:rotate-0 transition-transform duration-700 hover:scale-[1.02]"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
