"use client";
import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

const BillingProcess = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const steps = [
    { num: "1", title: "Practice Assessment", desc: "We evaluate your workflows, goals, and specialty needs to personalize billing.", icon: "📊" },
    { num: "2", title: "Patient Intake & Verification", desc: "We gather patient details and verify insurance coverage upfront.", icon: "📋" },
    { num: "3", title: "Accurate Medical Coding", desc: "Certified coders assign precise CPT, ICD, and HCPCS codes for clean claims.", icon: "🧬" },
    { num: "4", title: "Fast Claim Submission", desc: "Claims are submitted electronically to minimize delays and rejections.", icon: "📨" },
    { num: "5", title: "Payment Recording", desc: "We post payments from payers and patients, ensuring accurate tracking.", icon: "💰" },
    { num: "6", title: "Reports & Follow-Up", desc: "You receive timely payouts and detailed performance reports for full visibility.", icon: "📈" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="process-wrapper" ref={sectionRef}>
      <div className="process-container">
        
        {/* Step 1: Heading */}
        <h2 className={`process-title ${isVisible ? 'animate-in' : ''}`}>
          How Our Medical Billing Process Works?
        </h2>

        {/* Step 2: Para text now below heading */}
        <p className={`process-subtitle ${isVisible ? 'animate-in' : ''}`} 
           style={{ animationDelay: '0.2s' }}>
          Our medical billing company simplifies every step of the billing cycle to help practices get paid faster, with fewer denials.
        </p>

        {/* Step 3: 6 Cards (Wider and Shorter) */}
        <div className="process-grid">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`process-card ${isVisible ? 'animate-card' : ''}`}
              style={{ animationDelay: `${0.4 + index * 0.12}s` }}
            >
              <div className="card-top-header">
                <span className="card-icon-box">{step.icon}</span>
                <span className="bg-step-number">{step.num}</span>
              </div>
              <div className="card-body">
                <h3 className="card-heading">{step.title}</h3>
                <p className="card-description">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BillingProcess;