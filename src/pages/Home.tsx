import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PhilosophySection from '../components/PhilosophySection';
import FormSection from '../components/FormSection';
import MatterSection from '../components/MatterSection';
import ColorSection from '../components/ColorSection';
// import CollectionSection from '../components/CollectionSection';
import ProductionSection from '../components/ProductionSection';
import FinalSection from '../components/FinalSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="bg-zinc-900">
      <Header />
      <HeroSection />
      <PhilosophySection />
      <FormSection />
      <MatterSection />
      <ColorSection />
      {/* <CollectionSection /> */}
      <ProductionSection />
      <FinalSection />
      <Footer />
    </div>
  );
};

export default Home;