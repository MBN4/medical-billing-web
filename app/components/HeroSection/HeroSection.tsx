"use client";
import React from 'react';
import './styles.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-section-new">
      <div className="container hero-grid">
        <div className="hero-bg-gradient"></div>
        <div className="hero-grid-pattern"></div>
        
        <div className="hero-content-new">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-badge"
          >
            <Star size={14} className="star-icon" />
            <span>#1 Top-rated Medical Billing Company</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-title"
          >
            Maximize Your Revenue with <span className="gradient-text">Precision Billing</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-description"
          >
            Reduce claim denials by 98% and get paid faster with Transcure's expert 
            AI-driven medical billing and coding services.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-features-new"
          >
            {['HIPAA-Compliant', '98% Clean Claim Rate', 'Certified Coders'].map((feature, i) => (
              <div key={i} className="feature-pill">
                <CheckCircle2 size={18} className="check-icon" />
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-cta-group"
          >
           
          </motion.div>
        </div>

        <div className="hero-visual">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="main-image-wrapper"
          >
            <Image 
              src="/hero-image.png" 
              alt="Medical Professional" 
              width={600} 
              height={600} 
              className="hero-img"
              priority
            />
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="floating-card card-1"
            >
              <div className="status-dot"></div>
              <div>
                <p className="card-label">Claim Accuracy</p>
                <p className="card-value">99.2%</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="floating-card card-2"
            >
              <CheckCircle2 size={24} color="#10b981" />
              <div>
                <p className="card-label">Revenue Growth</p>
                <p className="card-value">+24%</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
