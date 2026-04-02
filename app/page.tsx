"use client";
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import StatsBanner from './components/StatsBanner/StatsBanner';
import ServicesSection from './components/ServicesSection/ServicesSection';
import SuccessMetrics from './components/SuccessMetrics/SuccessMetrics';
import BillingProcess from './components/BillingProcess/BillingProcess';
import AiSlider from './components/AiSlider/AiSlider';
import SpecialtiesGrid from './components/SpecialtiesGrid/SpecialtiesGrid';
import EhrPartners from './components/EhrPartners/EhrPartners';
import Testimonials from './components/Testimonials/Testimonials';
import CTASection from './components/CTASection/CTASection';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <main className="main-wrapper">
      <Navbar />
      <HeroSection />
      <StatsBanner />
      <ServicesSection />
      <SuccessMetrics />
      <BillingProcess />
      {/* <AiSlider /> */}
      <SpecialtiesGrid />
      <EhrPartners />
      <Testimonials />
      <CTASection />
      <FAQ />
      <Footer />
    </main>
  );
}