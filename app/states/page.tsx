"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar/page';
import './all-states.css';

const ALL_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", 
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
  "Wisconsin", "Wyoming"
];

export default function AllStatesPage() {
  return (
    <div className="all-states-wrapper">
      <Navbar />
      
      <section className="states-hero">
        <motion.div 
          className="states-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="badge">Nationwide Presence</span>
          <h1>Precision Billing in <span>Every State</span></h1>
          <p>We've mastered the complex regulations and unique payer networks of all 50 states. Wherever your practice is, we've got you covered.</p>
        </motion.div>
      </section>

      <section className="states-list-section">
        <div className="section-container">
          <div className="states-alphabet-grid">
            {ALL_STATES.map((state, idx) => (
              <motion.div
                key={state}
                className="state-link-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 10) * 0.05 }}
              >
                <Link href={`/states/${state.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="state-card-inner">
                    <MapPin size={20} className="pin-icon" />
                    <span>{state}</span>
                    <ArrowRight size={16} className="arrow-icon" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="states-cta">
        <div className="cta-box">
          <h2>Don't see your specific locality?</h2>
          <p>We work with regional payers and local IPA networks nationwide. Contact us for a custom consultation.</p>
          <button className="cta-btn large">Talk to an Expert</button>
        </div>
      </section>
    </div>
  );
}
