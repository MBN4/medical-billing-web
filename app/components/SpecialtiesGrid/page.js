"use client";
import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import Image from 'next/image';

const SpecialtiesGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const specialties = [
    { name: "OB/GYN", icon: "/icons/obgyn.png" },
    { name: "Neurology", icon: "/icons/neurology.png" },
    { name: "Orthopedics", icon: "/icons/orthopedics.png" },
    { name: "Podiatry", icon: "/icons/podiatry.png" },
    { name: "Cardiology", icon: "/icons/cardiology.png" },
    { name: "Nephrology", icon: "/icons/nephrology.png" },
    { name: "Psychiatry", icon: "/icons/psychiatry.png" },
    { name: "Primary Care", icon: "/icons/primary-care.png" },
    { name: "Endocrinology", icon: "/icons/endocrinology.png" },
    { name: "Internal Medicine", icon: "/icons/internal-medicine.png" },
    { name: "Pain Management", icon: "/icons/pain-management.png" },
    { name: "Infectious Disease", icon: "/icons/infectious-disease.png" },
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
    <section className="specialties-wrapper" ref={sectionRef}>
      <div className="specialties-container">
        
        <div className={`specialties-header ${isVisible ? 'animate-fade-up' : ''}`}>
          <h2>Which Medical Specialties Does Transcure Serve with Expert Billing?</h2>
          <p>
            Our medical billing company cater to a wide range of specialties, spanning from primary care to surgical centers, 
            serving small and mid-sized practices.
          </p>
        </div>

        <div className="specialties-grid">
          {specialties.map((item, index) => (
            <div 
              key={index} 
              className={`specialty-item ${isVisible ? 'animate-item' : ''}`}
              style={{ animationDelay: `${0.2 + index * 0.05}s` }}
            >
              <div className="icon-box">
                <Image 
                  src={item.icon} 
                  alt={item.name} 
                  width={50} 
                  height={50} 
                  className="spec-icon-img"
                />
              </div>
              <span className="spec-name">{item.name}</span>
            </div>
          ))}
        </div>

        <div className={`specialties-footer ${isVisible ? 'animate-fade-up' : ''}`}>
          <button className="view-more-btn">View More Specialities</button>
        </div>

      </div>
    </section>
  );
};

export default SpecialtiesGrid;