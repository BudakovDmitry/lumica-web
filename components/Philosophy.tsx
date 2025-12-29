import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import PhoneMockup from './ui/PhoneMockup';
import ScrollReveal from './ui/ScrollReveal';
import { phoneMockups } from '@/assets/phone-mockups';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <ScrollReveal>
            <span className="text-emerald-600 font-medium tracking-wider uppercase text-sm mb-2 block">Про ідею Lumica</span>
            <h2 className="text-3xl md:text-4xl font-bold text-lumica-dark mb-6">
              Не ще один “to-do” додаток
            </h2>
            <p className="text-lg text-lumica-subtext leading-relaxed max-w-2xl mx-auto">
              Lumica створена як противага поспіху. 
              Це простір, де не потрібно “встигати”, немає тиску продуктивності, 
              а важлива не кількість, а присутність.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center relative">
            {/* Background circle decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-lumica-green/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
            
            <ScrollReveal animation="fade-in" delay={200} className="w-[260px] md:w-[280px]">
              <div className="animate-float-delayed">
                <PhoneMockup 
                  src={phoneMockups.silence} 
                  alt="1 Minute Silence Practice Screen"
                  className="shadow-[0_20px_50px_-12px_rgba(16,185,129,0.25)]" 
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <ScrollReveal animation="slide-in-right">
              <h3 className="text-2xl font-semibold text-lumica-dark">Кожна практика — це маленька пауза для себе</h3>
            </ScrollReveal>
            
            <div className="space-y-6">
              {[
                "1 хвилина тиші для відновлення",
                "Чайний ритуал для заземлення",
                "Рефлексія дня для ясності",
                "Прості вправи без поспіху"
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100} animation="fade-up">
                  <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-stone-50 transition-colors cursor-default group">
                    <div className="w-8 h-8 rounded-full bg-lumica-green flex items-center justify-center shrink-0 text-emerald-700 group-hover:scale-110 transition-transform">
                       <CheckCircle2 size={18} />
                    </div>
                    <span className="text-lg text-lumica-dark font-medium pt-1">{item}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
