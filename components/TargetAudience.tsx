import React from 'react';
import PhoneMockup from './ui/PhoneMockup';
import ScrollReveal from './ui/ScrollReveal';
import { phoneMockups } from '@/assets/phone-mockups';

const TargetAudience: React.FC = () => {
  return (
    <section id="audience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fade-up" className="bg-lumica-dark rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-lumica-green/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-blob" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center md:px-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Для кого Lumica</h2>
              <p className="text-gray-300 text-lg mb-8">
                Це не про ідеальну версію себе. <br/>
                Це про живу, справжню присутність.
              </p>
              
              <div className="space-y-6">
                {[
                  "Часто відчуваєш перевантаження",
                  "Хочеш більше внутрішньої тиші",
                  "Шукаєш баланс між розумом і тілом",
                  "Хочеш піклуватися про себе без крайнощів"
                ].map((item, idx) => (
                  <ScrollReveal key={idx} delay={idx * 100} animation="slide-in-right">
                    <div className="flex items-center gap-4 group">
                      <div className="min-w-6 w-6 h-6 rounded-full border border-lumica-green/50 flex items-center justify-center group-hover:bg-lumica-green/20 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-lumica-green" />
                      </div>
                      <span className="text-lg font-light tracking-wide group-hover:text-lumica-green transition-colors">{item}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div className="flex justify-center relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl transform scale-110 animate-breathe"></div>
               <div className="w-[260px] md:w-[280px] relative z-10 animate-float">
                 <PhoneMockup 
                    src={phoneMockups.onboarding} 
                    alt="Lumica Onboarding Screen"
                    className="rotate-3 hover:rotate-0 transition-transform duration-500"
                 />
               </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TargetAudience;
