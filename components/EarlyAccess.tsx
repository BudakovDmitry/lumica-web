import React from 'react';
import EmailForm from './ui/EmailForm';
import ScrollReveal from './ui/ScrollReveal';

const EarlyAccess: React.FC = () => {
  return (
    <section id="early-access" className="py-24 bg-[#f4f4f2]">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <ScrollReveal>
          <div className="inline-block px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 mb-6">
            Ми відкриваємо Lumica поступово
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-lumica-dark mb-6">
            Ранній доступ
          </h2>
          
          <p className="text-lg text-lumica-subtext mb-10 leading-relaxed">
            Зараз додаток на фінальній стадії. <br className="hidden md:block"/>
            Люди, які залишать email, отримають ранній доступ, можливість першими спробувати всі практики та оновлення про запуск.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200} animation="fade-up">
          <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-500">
             <h3 className="text-xl font-semibold mb-6 text-lumica-dark">Приєднуйся до перших користувачів</h3>
             <EmailForm id="bottom-email" buttonText="Записатись у список очікування" fullWidth />
             <p className="mt-4 text-sm text-gray-500">
               Ми напишемо тобі, щойно доступ буде відкрито. Жодного спаму.
             </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EarlyAccess;