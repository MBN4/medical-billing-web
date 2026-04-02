"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import './styles.css';

const NationwideSection = () => {
  const states = [
    { name: "Texas", slug: "texas" },
    { name: "California", slug: "california" },
    { name: "Florida", slug: "florida" },
    { name: "New York", slug: "new-york" },
    { name: "New Jersey", slug: "new-jersey" },
    { name: "View More States", slug: "" }
  ];

  return (
    <section className="nationwide-wrapper">
      <div className="map-bg-overlay"></div>
      
      <div className="nationwide-container">
        <div className="nationwide-content">
          <motion.h2 
            className="nationwide-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Nationwide Medical Billing, Backed by Local Expertise
          </motion.h2>
          <motion.p 
            className="nationwide-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Transcure is redefining what it means to be a medical billing company in the U.S. 
            With a strong presence in all the major states and growing, our mission is to 
            deliver specialty-driven medical billing services that adapt to each region's 
            unique healthcare requirements.
          </motion.p>

          <div className="states-grid">
            {states.map((state, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <Link 
                  href={state.slug ? `/states/${state.slug}` : "/states"}
                  className={`state-btn ${state.name === "View More States" ? 'view-more-btn' : ''}`}
                >
                  {state.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NationwideSection;