"use client";
import React, { useState, useEffect, useCallback } from 'react';
import './styles.css';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Cpu, Bot, ShieldCheck, Zap, BarChart } from 'lucide-react';

const AiSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { title: "CLAIR – Claim Scrubbing Agent", desc: "Eliminate denials before they happen by analyzing codes and payer rules in real-time.", icon: <Bot /> },
    { title: "NOVA – Prior Auth Agent", desc: "Automate complex prior authorization by connecting directly with payers for instant approval.", icon: <ShieldCheck /> },
    { title: "ELARA – Patient Engagement Agent", desc: "Seamless patient collections with automated fixed payment plans and AI resolutions.", icon: <Users /> },
    { title: "AURA – Compliance Agent", desc: "Monitor records 24/7 for 100% HIPAA compliance and clinical documentation improvement.", icon: <ShieldCheck /> },
    { title: "ZEPHYR – Analytics Agent", desc: "Deep financial insights predicting cash flows and bottlenecked revenue departments.", icon: <BarChart /> }
  ];

  const nextSlide = useCallback(() => setCurrentIndex(p => (p + 1) % slides.length), [slides.length]);
  const prevSlide = () => setCurrentIndex(p => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(nextSlide, 6000);
    return () => clearInterval(t);
  }, [nextSlide]);

  return (
    <section className="ai-section-new section-padding">
      <div className="container">
        <div className="section-header-centered">
          <motion.span className="section-subtitle">ARTIFICIAL INTELLIGENCE</motion.span>
          <motion.h2 className="section-title">Automate Your Workflow with <span className="gradient-text">AI Agents</span></motion.h2>
        </div>

        <div className="ai-slider-card">
          <div className="ai-slider-content">
            <div className="ai-text-side">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="ai-info-active"
                >
                  <div className="ai-icon-large">
                    <Cpu size={40} />
                  </div>
                  <h3 className="ai-agent-title">{slides[currentIndex].title}</h3>
                  <p className="ai-agent-desc">{slides[currentIndex].desc}</p>
                  
                  <div className="ai-feature-list">
                    <div className="ai-f-item"><Zap size={16} /> Real-time Processing</div>
                    <div className="ai-f-item"><ShieldCheck size={16} /> 100% Compliance</div>
                  </div>
                  
                  <button className="btn-primary-new">See AI Agent in Action</button>
                </motion.div>
              </AnimatePresence>

              <div className="ai-controls">
                <button onClick={prevSlide} className="ctrl-btn"><ChevronLeft /></button>
                <div className="ai-dots-new">
                  {slides.map((_, i) => (
                    <div key={i} onClick={() => setCurrentIndex(i)} className={`ai-dot ${i === currentIndex ? 'active' : ''}`} />
                  ))}
                </div>
                <button onClick={nextSlide} className="ctrl-btn"><ChevronRight /></button>
              </div>
            </div>

            <div className="ai-visual-side">
              <motion.div 
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="ai-dashboard-mockup"
              >
                <div className="mockup-glow"></div>
                <Image src="/dashboard1.png" alt="Dashboard" width={700} height={450} className="mockup-img" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Dummy component for missing icon
const Users = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;

export default AiSlider;
