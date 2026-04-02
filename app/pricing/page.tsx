"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './pricing.css';

const PRICING_PLANS = [
  {
    name: 'Standard RCM',
    price: '3.9%',
    description: 'Perfect for small to medium practices seeking efficient billing.',
    features: ['98% Clean Claim Rate', 'Electronic Remittance', 'Dedicated Account Mgr', 'Weekly Revenue Analysis', 'Initial A/R Cleanup'],
    popular: false
  },
  {
    name: 'AI Enhanced',
    price: '5.2%',
    description: 'Advanced automation for high-volume clinics and surgical centers.',
    features: ['Real-time AI Scrubbing', 'Predictive Denial Prev', 'Priority Support', 'Full Dashboard Access', 'Audit Defense Coverage'],
    popular: true
  },
  {
    name: 'Enterprise Plus',
    price: '7.5%',
    description: 'Full-service financial outsourcing for hospital networks.',
    features: ['Unlimited Transactions', 'Credentialing Included', 'Custom API Access', '24/7 Global Support', 'Full Financial Auditing'],
    popular: false
  }
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="pricing-wrapper">
      <Navbar />
      
      <section className="pricing-hero">
        <motion.div 
          className="pricing-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="badge">Flexible Pricing</span>
          <h1>Performance-Based <span>Honesty</span></h1>
          <p>We only succeed when you do. No setup fees. No hidden costs. Just pure collections efficiency.</p>
          
          <div className="toggle-container">
            <span className={!isAnnual ? 'active' : ''}>Monthly</span>
            <button className="toggle-switch" onClick={() => setIsAnnual(!isAnnual)}>
              <motion.div 
                className="toggle-knob"
                animate={{ x: isAnnual ? 30 : 0 }}
              />
            </button>
            <span className={isAnnual ? 'active' : ''}>Annual (Save 15%)</span>
          </div>
        </motion.div>

        <div className="pricing-grid">
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div 
              key={plan.name}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {plan.popular && <div className="popular-badge">Most Advanced</div>}
              <h3>{plan.name}</h3>
              <div className="price-tag">
                <span className="percent">{plan.price}</span>
                <span className="of-collections">of collections</span>
              </div>
              <p className="plan-desc">{plan.description}</p>
              
              <ul className="plan-features">
                {plan.features.map(f => (
                  <li key={f}><Check size={18} className="check-icon" /> {f}</li>
                ))}
              </ul>

              <button className={`plan-btn ${plan.popular ? 'solid' : 'outline'}`}>
                Get Started Today <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="pricing-trust">
        <p>Trusted by over <strong>500+ practices</strong> across the United States</p>
      </div>
      <Footer />
    </div>
  );
}
