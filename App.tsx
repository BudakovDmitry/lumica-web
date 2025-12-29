import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Features from './components/Features';
import TargetAudience from './components/TargetAudience';
import EarlyAccess from './components/EarlyAccess';
import Footer from './components/Footer';
import AuraCursor from './components/ui/AuraCursor';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden selection:bg-lumica-green selection:text-lumica-dark cursor-none">
      <AuraCursor />
      <Header />
      <main className="flex-grow">
        <Hero />
        <Philosophy />
        <Features />
        <TargetAudience />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
};

export default App;