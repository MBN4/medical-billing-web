"use client";
import React, { useState } from 'react';
import './styles.css';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardCheck, Settings, Landmark, ShieldCheck, ArrowUpRight } from 'lucide-react';

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Medical Billing & Coding",
      desc: "Accurate coding and billing to reduce denials and boost revenue cycle efficiency by 30%.",
      image: "/doc1.png", 
      icon: <ClipboardCheck size={32} />,
      color: "#10b981"
    },
    {
      title: "Small Practice Support",
      desc: "Custom billing support designed to help small practices grow and get paid faster without overhead.",
      image: "/doc2.png",
      icon: <Settings size={32} />,
      color: "#3b82f6"
    },
    {
      title: "Billing Audit Services",
      desc: "Comprehensive audits to ensure compliance and identify missing revenue opportunities in your data.",
      image: "/doc1.png",
      icon: <Landmark size={32} />,
      color: "#8b5cf6"
    },
    {
      title: "Specialty Solutions",
      desc: "Tailored solutions for over 50+ medical specialties to maximize your unique RCM and workflow.",
      image: "/doc2.png",
      icon: <ShieldCheck size={32} />,
      color: "#f59e0b"
    }
  ];

  return (
    <section className="services-section-new section-padding">
      <div className="services-overlay-blob"></div>
      
      <div className="container">
        <div className="section-header-centered">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-subtitle"
          >
            OUR CORE EXPERTISE
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Precision Solutions for <span className="gradient-text">Modern Healthcare</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="section-description"
          >
            We provide end-to-end medical billing services that allow you to focus on patient care while we handle the complexities of the revenue cycle.
          </motion.p>
        </div>

        <div className="services-bento-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`service-bento-card ${hoveredIndex === index ? 'active' : ''}`}
            >
              <div className="service-card-top">
                <div className="service-icon-box" style={{ background: `${service.color}15`, color: service.color }}>
                  {service.icon}
                </div>
                <div className="arrow-badge">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <div className="service-card-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
                
                <div className="service-card-footer">
                  <div className="exp-badge">99% Clean Claims</div>
                  <div className="exp-badge">Expert Coding</div>
                </div>
              </div>

              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="service-card-image-overlay"
                  >
                    <Image src={service.image} alt={service.title} fill className="service-img-vibe" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
