'use client';

import Carousel from './components/Carousel';
import Features from './components/Features';
import ServiceCard from './components/ServiceCard';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Hero Section - Carousel */}
      <Carousel />

      {/* Services Section */}
      <section className="container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <ServiceCard
            title="Plâtrerie"
            image="/img/20230916_161757.jpg"
            description="Découvrez notre service plaquiste, où qualité et simplicité se rencontrent."
          />
          <ServiceCard
            title="Isolation"
            image="/img/20170529_113659.jpg"
            description="Choisissez le calme et la chaleur, des économies d'énergie sans effort."
          />
          <ServiceCard
            title="Peinture"
            image="/img/20230930_171211.jpg"
            description="Notre expertise fait la différence : des finitions exceptionnelles."
          />
          <ServiceCard
            title="Revêtement"
            image="/img/122550388_1026785171127827_1203943277819427436_n.jpg"
            description="Optez pour notre revêtement, chaque détail pris en compte."
          />
        </div>
      </section>

      {/* Features Section */}
      <Features />
    </main>
  );
}
