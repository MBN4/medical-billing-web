"use client";
import React from 'react';
import './styles.css';
import { motion } from 'framer-motion';
import { Search, FileCheck, Code2, Send, CreditCard, PieChart } from 'lucide-react';

const BillingProcess = () => {
  const steps = [
    { title: "Practice Assessment", desc: "We evaluate your workflows, goals, and specialty needs to personalize billing.", icon: <Search size={24} /> },
    { title: "Verification", desc: "We gather patient details and verify insurance coverage upfront to prevent errors.", icon: <FileCheck size={24} /> },
    { title: "Certified Coding", desc: "Certified coders assign precise CPT, ICD, and HCPCS codes for clean claims.", icon: <Code2 size={24} /> },
    { title: "Fast Submission", desc: "Claims are submitted electronically to minimize delays and rejections.", icon: <Send size={24} /> },
    { title: "Payment Recording", desc: "We post payments from payers and patients, ensuring accurate tracking.", icon: <CreditCard size={24} /> },
    { title: "Reporting", desc: "Receive timely payouts and detailed performance reports for full visibility.", icon: <PieChart size={24} /> }
  ];

  return (
    <section className="process-section-new section-padding">
      <div className="container">
        <div className="section-header-centered">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-subtitle"
          >
            OUR WORKFLOW
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            How Our <span className="gradient-text">Billing Process</span> Works
          </motion.h2>
        </div>

        <div className="timeline-container-new">
          <div className="timeline-line"></div>
          
          <div className="timeline-steps">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`timeline-step-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="timeline-dot">
                  {step.icon}
                </div>
                <div className="timeline-content-card">
                  <div className="timeline-number">0{index + 1}</div>
                  <h3 className="timeline-step-title">{step.title}</h3>
                  <p className="timeline-step-desc">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillingProcess;
