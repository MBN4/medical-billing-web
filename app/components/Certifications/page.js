"use client";
import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import Image from 'next/image';

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="cert-wrapper" ref={sectionRef}>
      <div className="cert-wave-overlay"></div>
      <div className="cert-container">
        <div className={`cert-text-side ${isVisible ? 'animate-fade-in' : ''}`}>
          <h2 className="cert-title">Our Certifications</h2>
          <p className="cert-desc">
            We strictly adhere to compliance and state regulations and our 
            certifications exhibit that well.
          </p>
        </div>

        <div className={`cert-image-side ${isVisible ? 'animate-slide-up' : ''}`}>
          <Image 
            src="/cert-shields.png" 
            alt="ISO and HIPAA Certifications" 
            width={500} 
            height={280} 
            className="shields-img"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Certifications;