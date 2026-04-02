"use client";
import React, { useState } from 'react';
import './styles.css';
import Image from 'next/image';

const ServicesSection = () => {
  const [activeCard, setActiveCard] = useState(0);

  const services = [
    {
      title: "Medical Billing and Coding Services",
      desc: "Accurate coding and billing to reduce denials and boost revenue cycle efficiency.",
      image: "/doc1.png", 
      icon: "📋"
    },
    {
      title: "Billing Services for Small Practices",
      desc: "Custom billing support designed to help small practices grow and get paid faster.",
      image: "/doc2.png",
      icon: "⚙️"
    },
    {
      title: "Medical Billing Audit Services",
      desc: "Comprehensive audits to ensure compliance and identify missing revenue opportunities.",
      image: "/doc1.png",
      icon: "💰"
    },
    {
      title: "Specialty-focused Billing Services",
      desc: "Tailored solutions for over 50+ medical specialties to maximize your unique RCM.",
      image: "/doc2.png",
      icon: "👨‍⚕️"
    }
  ];

  return (
    <section className="services-section-wrapper">
      <div className="services-container" onMouseLeave={() => setActiveCard(0)}>
        <div className="services-header">
          <h2>Which Medical Billing Services Do Transcure Provide?</h2>
          <p>
            Transcure provides end-to-end <span>medical billing services</span> for your specialty.
          </p>
        </div>

        <div className="cards-flex-box">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`expandable-card ${activeCard === index ? 'is-active' : ''}`}
              onMouseEnter={() => setActiveCard(index)}
            >
              <div className="card-inner-content">
                <div className="icon-container">
                  {service.icon}
                </div>
                
                <div className="text-content-box">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.desc}</p>
                </div>

                <div className="action-button-area">
                  <div className="arrow-circle-btn">
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M9 18l6-6-6-6" /></svg>
                  </div>
                </div>
              </div>

              {activeCard === index && (
                <div className="visual-image-box">
                  <Image 
                    src={service.image} 
                    alt="Medical Professional" 
                    width={260} 
                    height={340} 
                    className="doctor-img-slide"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;