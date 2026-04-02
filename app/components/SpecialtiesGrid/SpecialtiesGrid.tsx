"use client";
import React from 'react';
import './styles.css';
import { motion } from 'framer-motion';
import { Stethoscope, Activity, Heart, Brain, Bone, Baby, Syringe, ClipboardList, Microchip, FlaskConical, Thermometer, Shield } from 'lucide-react';

const SpecialtiesGrid = () => {
  const specialties = [
    { name: "OB/GYN", icon: <Baby /> },
    { name: "Neurology", icon: <Brain /> },
    { name: "Orthopedics", icon: <Bone /> },
    { name: "Cardiology", icon: <Heart /> },
    { name: "Primary Care", icon: <Stethoscope /> },
    { name: "Internal Med", icon: <ClipboardList /> },
    { name: "Psychiatry", icon: <Activity /> },
    { name: "Endocrinology", icon: <Syringe /> },
    { name: "Pain Mgmt", icon: <Shield /> },
    { name: "Infectious Dis", icon: <FlaskConical /> },
    { name: "Podiatry", icon: <Activity /> },
    { name: "Nephrology", icon: <Thermometer /> },
  ];

  return (
    <section className="specialties-section-new section-padding">
      <div className="container">
        <div className="section-header-centered">
          <motion.span className="section-subtitle">OVER 50+ SPECIALTIES</motion.span>
          <motion.h2 className="section-title">Expert Billing for Every <span className="gradient-text">Medical Specialty</span></motion.h2>
          <motion.p className="section-description">
            Our specialized teams understand the unique coding requirements and reimbursement patterns of your specific field.
          </motion.p>
        </div>

        <div className="spec-marquee-wrapper">
          <div className="spec-grid-new">
            {specialties.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="spec-card-new"
              >
                <div className="spec-icon-new">
                  {item.icon}
                </div>
                <h4 className="spec-name-new">{item.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="spec-footer-new">
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesGrid;
