"use client";
import React, { useState } from 'react';
import './styles.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is a medical billing company, and how can it help me?",
      answer: "A medical billing company handles the entire process of submitting and following up on claims with health insurance companies in order to receive payment for services rendered by a healthcare provider. We help you reduce administrative burden and increase revenue."
    },
    {
      question: "What are the key benefits of outsourcing medical billing?",
      answer: "Outsourcing leads to faster claim processing, higher clean-claim rates, reduced overhead costs, and access to specialized billing experts and advanced AI scrubbing technology."
    },
    {
      question: "In which billing specialties do you have expertise?",
      answer: "We have deep expertise in over 40+ specialties including Cardiology, OB/GYN, Neurology, Orthopedics, Pain Management, and Mental Health."
    },
    {
      question: "How do you charge for medical billing services?",
      answer: "Our pricing is transparent and typically based on a percentage of the total collections, meaning we only get paid when you get paid. Contact us for a custom quote based on your practice size."
    },
    {
      question: "Can I continue using the billing software I already have?",
      answer: "Yes! We integrate with over 30+ major EHR/EMR platforms including Epic, eClinicalWorks, AdvancedMD, and Athenahealth."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-wrapper">
      <div className="faq-container">
        <h2 className="faq-main-title">Frequently Asked Questions (FAQs)</h2>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{item.question}</span>
                <span className="faq-icon"></span>
              </button>
              
              <div className="faq-answer-container">
                <div className="faq-answer-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;