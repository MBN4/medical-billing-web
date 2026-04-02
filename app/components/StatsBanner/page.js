import React from 'react';
import './styles.css';

const StatsBanner = () => {
  const stats = [
    { icon: "🩺", label: "Trusted by", value: "500+ Physicians" },
    { icon: "➕", label: "Catering to", value: "40+ Specialties" },
    { icon: "💻", label: "1100+ Certified", value: "Medical Billers & Coders" },
    { icon: "⚙️", label: "End-to-End", value: "RPA Billing Solutions" },
    { icon: "💰", label: "Up to 98% First Pass", value: "Clean Claim Rate" }
  ];

  return (
    <section className="stats-banner-wrapper">
      <div className="stats-wave-overlay"></div>
      <div className="stats-container">
        {stats.map((item, index) => (
          <div key={index} className="stat-item">
            {/* ONLY this circle will animate */}
            <div className={`stat-icon-circle animate-icon delay-${index + 1}`}>
              <span className="stat-icon">{item.icon}</span>
            </div>
            
            {/* This text remains static */}
            <div className="stat-text">
              <p className="stat-label">{item.label}</p>
              <h4 className="stat-value">{item.value}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBanner;