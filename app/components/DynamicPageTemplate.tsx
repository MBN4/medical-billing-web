"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { PAGE_DATA } from '../lib/pageData';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import './DynamicPageTemplate.css';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function DynamicPageTemplate({ category, slug }: { category: string, slug: string }) {
  const data = PAGE_DATA[slug] || {
    title: slug.replace(/-/g, ' '),
    subTitle: category,
    description: `Expert solutions for ${slug.replace(/-/g, ' ')}.`,
    features: ['Professional Service', 'Reliable Support', 'Modern Technology'],
    theme: '#0a4d4a',
    accent: '#14b8a6'
  };

  const Icon = data.icon;

  return (
    <div className="page-wrapper" style={{ '--page-theme': data.theme, '--page-accent': data.accent } as React.CSSProperties}>
      <Navbar />
      
      <main className="dynamic-main">
        {/* Dynamic Hero Section */}
        <section className="dynamic-hero-section">
          <div className="hero-bg-dynamic"></div>
          <div className="hero-grid-pattern-dynamic"></div>
          
          <motion.div 
            className="orb orb-1"
            animate={{ x: [0, 40, 0], y: [0, 60, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="orb orb-2"
            animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="container">
            <motion.div 
              className="dynamic-hero-content"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="category-tag-new" variants={itemVariants}>
                {category}
              </motion.div>
              
              <div className="title-area-new">
                <motion.div className="dynamic-icon-box" variants={itemVariants}>
                  {Icon && <Icon size={40} strokeWidth={1.5} />}
                </motion.div>
                <motion.h1 className="dynamic-hero-title" variants={itemVariants}>
                  {data.title}
                </motion.h1>
              </div>

              <motion.p className="dynamic-hero-subtitle" variants={itemVariants}>
                {data.subTitle}
              </motion.p>
              
              <motion.p className="dynamic-hero-desc" variants={itemVariants}>
                {data.description}
              </motion.p>

              <motion.div className="dynamic-hero-actions" variants={itemVariants}>
                <button className="btn-dynamic-primary">Transform Your Revenue</button>
                <button className="btn-dynamic-outline">Learn More</button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Conditional Sections Based on Category */}
        {category === 'Services' && (
          <section className="dynamic-process-section">
            <div className="container">
              <div className="dynamic-section-header">
                <h2>Our Workflow for {data.title}</h2>
                <p>A meticulous, data-driven approach designed to maximize efficiency.</p>
              </div>
              <div className="dynamic-process-grid">
                {['Analysis & Audit', 'Strategic Implementation', 'Continuous Optimization'].map((step, i) => (
                  <motion.div 
                    key={step} 
                    className="dynamic-process-step"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="dynamic-step-num">0{i+1}</span>
                    <h4>{step}</h4>
                    <p>Executing precise methodologies specific to {data.title.toLowerCase()} for optimal collections.</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {category === 'Our Expertise' && (
          <section className="dynamic-metrics-preview">
            <div className="container">
              <div className="dynamic-metrics-grid">
                <motion.div 
                  className="dynamic-metric-box"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="dynamic-metric-val">99.2%</div>
                  <div className="dynamic-metric-lbl">Coding Accuracy</div>
                </motion.div>
                <motion.div 
                  className="dynamic-metric-box"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="dynamic-metric-val">12 Days</div>
                  <div className="dynamic-metric-lbl">Avg. A/R Cycle</div>
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {category === 'State Availability' && (
          <section className="dynamic-state-coverage">
            <div className="container">
              <div className="dynamic-state-wrapper">
                <h2>Regional Presence in {data.title.replace('Serving ', '').replace(' Medical Experts', '').replace(' Billing Network', '').replace(' Billing Pros', '').replace(' Specialists', '')}</h2>
                <p>We provide specialized billing and compliance for local health systems with deep regional payer expertise.</p>
                <div className="dynamic-coverage-badge">Statewide Compliance Assured</div>
              </div>
            </div>
          </section>
        )}

        {category === 'Specialties' && (
          <section className="dynamic-specialty-details">
            <div className="container">
              <div className="dynamic-specialty-focus">
                <h3>Tailored exclusively for {data.title}</h3>
                <p>Our dedicated billing experts understand the specific nuances, modifiers, and documentation requirements essential for a thriving {data.title.toLowerCase()}.</p>
              </div>
            </div>
          </section>
        )}

        {/* Unified Capabilities Grid */}
        <section className="dynamic-features-section">
          <div className="container">
            <motion.div 
              className="dynamic-section-header"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>Key Capabilities</h2>
              <p>Everything you need to optimize your {data.title.toLowerCase()} revenue cycle.</p>
            </motion.div>

            <div className="dynamic-features-grid">
              {data.features.map((feature: string, idx: number) => (
                <motion.div 
                  key={idx}
                  className="dynamic-feature-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="dynamic-feature-dot">
                    {Icon && <Icon size={24} />}
                  </div>
                  <h3>{feature}</h3>
                  <p>Our specialized workflows are meticulously refined to deliver maximum efficiency for this particular focus area.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Global CTA Section */}
        <section className="dynamic-cta-banner">
          <div className="container">
            <motion.div 
              className="dynamic-cta-content"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2>Ready to transform your practice?</h2>
              <p>Join 500+ clinics scaling their revenue with our AI-powered, human-perfected billing solutions.</p>
              <button className="dynamic-cta-btn">Book a Deep Dive Consultation</button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
