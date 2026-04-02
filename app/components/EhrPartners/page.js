"use client";
import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import Image from 'next/image';

const EhrPartners = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const ehrs = [
    { name: "eClinicalWorks", logo: "/ehr/eclinicalworks.png" },
    { name: "AdvancedMD", logo: "/ehr/advancedmd.png" },
    { name: "Nextgen", logo: "/ehr/nextgen.png" },
    { name: "Athenahealth", logo: "/ehr/athenahealth.png" },
    { name: "CareCloud", logo: "/ehr/carecloud.png" },
    { name: "Epic", logo: "/ehr/epic.png" },
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
    <section className="ehr-wrapper" ref={sectionRef}>
      <div className="ehr-container">
        
        <div className={`ehr-header ${isVisible ? 'animate-fade-up' : ''}`}>
          <h2>We work with these EHRs</h2>
          <p>
            Our medical billing specialists know the workarounds of all the EHRs. 
            We help you submit clean claims no matter which EHR you use.
          </p>
        </div>

        <div className="ehr-grid">
          {ehrs.map((ehr, index) => (
            <div 
              key={index} 
              className={`ehr-card ${isVisible ? 'animate-card-up' : ''}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="ehr-logo-box">
                <Image 
                  src={ehr.logo} 
                  alt={ehr.name} 
                  width={200} 
                  height={80} 
                  className="ehr-img"
                />
              </div>
            </div>
          ))}
        </div>

        <div className={`ehr-footer ${isVisible ? 'animate-fade-up' : ''}`} style={{ animationDelay: '0.8s' }}>
          <button className="explore-btn">Explore More</button>
        </div>

      </div>
    </section>
  );
};

export default EhrPartners;