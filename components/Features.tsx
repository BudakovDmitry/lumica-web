import React from 'react';
import { Leaf, Brain, BookOpen } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Leaf className="w-6 h-6 text-emerald-700" />,
      title: "Щоденні практики",
      description: "Короткі, зрозумілі та реалістичні практики, які легко вбудувати в день.",
      items: ["1 хвилина тиші", "Усвідомлені ритуали", "Фокус і баланс", "Дихальні вправи"],
      color: "bg-lumica-green",
      textColor: "text-emerald-900",
      delay: 0
    },
    {
      icon: <Brain className="w-6 h-6 text-indigo-700" />,
      title: "Психологічні інсайти",
      description: "Контент, який допомагає краще розуміти свій стан та емоції.",
      items: ["Розуміння свого стану", "Помічати думки", "М’яка робота з собою", "Емоційний інтелект"],
      color: "bg-stone-100",
      textColor: "text-stone-900",
      delay: 200
    },
    {
      icon: <BookOpen className="w-6 h-6 text-orange-700" />,
      title: "Рефлексія без тиску",
      description: "Прості запитання і щоденні відмітки — без “правильних” відповідей.",
      items: ["Прості запитання", "Щоденні відмітки", "Без зобов’язань", "Особистий простір"],
      color: "bg-lumica-peach",
      textColor: "text-orange-900",
      delay: 400
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#fbfbf9]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-lumica-dark mb-4">Що всередині Lumica</h2>
            <p className="text-lumica-subtext max-w-xl mx-auto">
              Інструменти для повернення до себе, дбайливо зібрані в одному додатку.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <ScrollReveal key={idx} delay={feature.delay} className="h-full">
              <div 
                className={`rounded-[2.5rem] p-8 ${feature.color} transition-all duration-500 hover:-translate-y-2 hover:shadow-lg flex flex-col h-full group`}
              >
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className={`text-2xl font-bold mb-3 ${feature.textColor}`}>{feature.title}</h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-auto space-y-3">
                  {feature.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                      <span className="text-base font-medium opacity-80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;