"use client";
import React, { useState, useEffect, useCallback } from 'react';
import './styles.css';
import Image from 'next/image';

const AiSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      agentTitle: "CLAIR – AI Claim Scrubbing Agent",
      description: "CLAIR is your intelligent claim scrubbing AI agent designed to eliminate denials before they happen. It analyzes codes, modifiers, and payer rules in real-time.",
      extraInfo: "This AI agent auto-fixes minor issues like modifier errors or code mismatches using historical denial patterns.",
      image: "/dashboard1.png"
    },
    {
      agentTitle: "NOVA – AI Prior Authorization Agent",
      description: "NOVA automates the complex prior authorization workflow by connecting directly with payers to secure approvals instantly.",
      extraInfo: "Reduce wait times by 70% and ensure your specialty services are covered before the patient arrives.",
      image: "/dashboard1.png" 
    },
    {
      agentTitle: "ELARA – AI Patient Engagement Agent",
      description: "ELARA manages patient collections and inquiries, providing a seamless financial experience with automated payment plans.",
      extraInfo: "Our AI helps patients understand their bills and resolves disputes without human intervention.",
      image: "/dashboard1.png"
    },
    {
      agentTitle: "AURA – AI Audit & Compliance Agent",
      description: "AURA continuously monitors your billing records to ensure 100% HIPAA compliance and identifies internal coding risks.",
      extraInfo: "Stay audit-ready 24/7 with automated risk scoring and clinical documentation improvement (CDI) suggestions.",
      image: "/dashboard1.png"
    },
    {
      agentTitle: "ZEPHYR – AI Revenue Analytics Agent",
      description: "ZEPHYR provides deep-dive financial insights, predicting future cash flows and identifying bottlenecked departments.",
      extraInfo: "Identify exactly where you are losing money with real-time RCM dashboards and predictive modeling.",
      image: "/dashboard1.png"
    },
    {
      agentTitle: "ATLAS – AI Insurance Credentialing Agent",
      description: "ATLAS handles the tedious process of provider enrollment and credentialing with all major insurance payers.",
      extraInfo: "Never miss a re-credentialing deadline again with automated tracking and application submissions.",
      image: "/dashboard1.png"
    },
    {
      agentTitle: "LYRA – AI Denial Management Agent",
      description: "LYRA automatically categorizes denials and generates custom appeal letters based on payer-specific requirements.",
      extraInfo: "Increase your success rate on appeals by 40% using AI-generated clinical arguments.",
      image: "/dashboard1.png"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="ai-slider-wrapper">
      <div className="ai-slider-container">
        <h2 className="ai-main-heading">How Transcure’s AI Agents Can Help You Automate Medical Billing?</h2>

        <div className="slider-content-area">
          <button className="nav-arrow left" onClick={prevSlide}>❮</button>

          <div className="slide-active-content" key={currentIndex}>
            <div className="slide-text animate-fade">
              <h3 className="agent-name">{slides[currentIndex].agentTitle}</h3>
              <p className="agent-desc">{slides[currentIndex].description}</p>
              <p className="agent-extra">{slides[currentIndex].extraInfo}</p>
              
              <button className="ai-cta-btn">See How AI Agents Can Help</button>
            </div>

            <div className="slide-image animate-pop">
              <div className="image-glow-box">
                <Image 
                  src={slides[currentIndex].image} 
                  alt="AI Agent Interface" 
                  width={620} 
                  height={420} 
                  className="dashboard-img"
                  priority
                />
              </div>
            </div>
          </div>

          <button className="nav-arrow right" onClick={nextSlide}>❯</button>
        </div>

        <div className="slider-dots">
          {slides.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiSlider;