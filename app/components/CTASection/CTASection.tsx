"use client";
import React from 'react';
import './styles.css';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="cta-section-new section-padding">
      <div className="container">
        <div className="cta-card-premium">
          <div className="cta-bg-glow"></div>
          
          <div className="cta-content-grid">
            <div className="cta-text-side">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="cta-badge"
              >
                <Zap size={14} /> Ready to transform your practice?
              </motion.div>
              
              <h2 className="cta-heading-new">
                Maximized Revenue. <br />
                <span className="gradient-text-light">Minimized Burdens.</span>
              </h2>
              
              <p className="cta-desc-new">
                Join 500+ healthcare providers who have simplified their billing cycle.
                Get a free audit of your current RCM today.
              </p>

              <div className="cta-points">
                <div className="cta-point"><CheckCircle2 size={18} /> 98% Clean Claim Rate</div>
                <div className="cta-point"><ShieldCheck size={18} /> ISO 27001 Certified</div>
              </div>

              <div className="cta-actions">
                <button className="btn-white-premium">
                  Get Free Consultation <ArrowRight size={18} />
                </button>
                <button className="btn-outline-white">
                  View Pricing
                </button>
              </div>
            </div>

            <div className="cta-visual-side">
              <div className="cta-stat-box">
                <div className="cta-stat-val">24 Days</div>
                <div className="cta-stat-lab">Average A/R Cycle</div>
              </div>
              <div className="cta-stat-box box-2">
                <div className="cta-stat-val">+25%</div>
                <div className="cta-stat-lab">Revenue Increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
