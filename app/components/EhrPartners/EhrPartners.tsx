"use client";
import React from 'react';
import './styles.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const EhrPartners = () => {
  const ehrs = [
    { name: "eClinicalWorks", logo: "/ehr/eclinicalworks.png" },
    { name: "AdvancedMD", logo: "/ehr/advancedmd.png" },
    { name: "Nextgen", logo: "/ehr/nextgen.png" },
    { name: "Athenahealth", logo: "/ehr/athenahealth.png" },
    { name: "CareCloud", logo: "/ehr/carecloud.png" },
    { name: "Epic", logo: "/ehr/epic.png" },
  ];

  return (
    <section className="ehr-section-new section-padding">
      <div className="container">
        <div className="section-header-centered">
          <motion.span className="section-subtitle">COMPATIBILITY</motion.span>
          <motion.h2 className="section-title">Seamless Integration with Your <span className="gradient-text">EHR Systems</span></motion.h2>
          <motion.p className="section-description">
            Our medical billing specialists are experts in the workarounds of all major EHR platforms, ensuring claim accuracy.
          </motion.p>
        </div>

        <div className="ehr-grid-new">
          {ehrs.map((ehr, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="ehr-card-new"
            >
              <div className="ehr-logo-wrapper">
                <div className="ehr-placeholder-logo">
                  {/* Since I don't have the actual logo files, I'll use text for now or keep Image if user has them */}
                  <div className="ehr-name-temp">{ehr.name}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EhrPartners;
