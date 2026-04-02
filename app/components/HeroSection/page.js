"use client";
import React from 'react';
import './styles.css';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, Play, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="hero-section-new">
      <div className="hero-grid-pattern"></div>
      <div className="hero-bg-gradient"></div>
      
      <div className="container hero-grid">
        <div className="hero-content-new">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-badge"
          >
            <Star size={14} fill="currentColor" />
            <span>#1 Top-rated Medical Billing Company</span>
          </motion.div>

          <h1 className="hero-title">
            Maximize Your Revenue with <span className="text-accent">Precision Billing</span>
          </h1>
          
          <p className="hero-description">
            Reduce claim denials by 98% and get paid faster with Transcure's expert 
            AI-driven medical billing and coding services.
          </p>

          <div className="hero-features-new">
            <div className="feature-pill">
              <CheckCircle2 size={18} className="text-accent" />
              <span>HIPAA-Compliant</span>
            </div>
            <div className="feature-pill">
              <CheckCircle2 size={18} className="text-accent" />
              <span>98% Clean Claim Rate</span>
            </div>
            <div className="feature-pill">
              <CheckCircle2 size={18} className="text-accent" />
              <span>Certified Coders</span>
            </div>
          </div>

          <div className="hero-cta-group">
          </div>
        </div>

        <div className="hero-visual">
          <div className="main-image-wrapper">
            <Image 
              src="/hero-doctor.jpg" 
              alt="Medical Professional" 
              width={600} 
              height={550} 
              className="hero-img"
              priority
            />
            
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="floating-card card-1"
            >
              <div className="card-info">
                <span className="card-label">Claim Accuracy</span>
                <span className="card-value">99.2%</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="floating-card card-2"
            >
              <div className="card-icon-box">
                <CheckCircle2 size={20} className="text-success" />
              </div>
              <div className="card-info">
                <span className="card-label">Revenue Growth</span>
                <span className="card-value text-success">+24%</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;