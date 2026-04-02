"use client";
import React, { useState } from 'react';
import './styles.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "What is a medical billing company, and how can it help me?",
      answer: "A medical billing company handles the entire process of submitting and following up on claims with health insurance companies. We reduce administrative burden and increase revenue by optimizing your RCM cycle."
    },
    {
      question: "What are the key benefits of outsourcing medical billing?",
      answer: "Faster claim processing, higher clean-claim rates (98%+), reduced overhead costs, and access to specialized billing experts and advanced AI scrubbing technology."
    },
    {
      question: "In which billing specialties do you have expertise?",
      answer: "We have deep expertise in over 40+ specialties including Cardiology, OB/GYN, Neurology, Orthopedics, Pain Management, and Mental Health."
    },
    {
      question: "How do you charge for medical billing services?",
      answer: "Our pricing is transparent and typically based on a percentage of the total collections, meaning we only get paid when you get paid."
    },
    {
      question: "Can I continue using the billing software I already have?",
      answer: "Yes! We integrate with over 30+ major EHR/EMR platforms including Epic, eClinicalWorks, AdvancedMD, and Athenahealth."
    }
  ];

  return (
    <section className="faq-section-new section-padding">
      <div className="container">
        <div className="section-header-centered">
          <motion.span className="section-subtitle">COMMON QUESTIONS</motion.span>
          <motion.h2 className="section-title">Everything You Need to <span className="gradient-text">Know</span></motion.h2>
        </div>

        <div className="faq-grid-container">
          {faqData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`faq-card ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question-btn" 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="faq-q-text">
                  <HelpCircle size={20} className="q-icon" />
                  <span>{item.question}</span>
                </div>
                <div className="faq-toggle-icon">
                  {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="faq-answer-wrapper"
                  >
                    <div className="faq-answer-inner">
                      <p>{item.answer}</p>
                    </div>
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

export default FAQ;
