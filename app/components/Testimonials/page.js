"use client";
import React, { useState, useEffect, useCallback } from 'react';
import './styles.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      quote: "We've been working with Transcure for 8 years now and we are satisfied with their services and customer support.",
      author: "Ashlee Rose",
      title: "Harding Memorial Healthcare",
      initials: "AR",
      color: "linear-gradient(135deg, #a12c71, #6b0f54)"
    },
    {
      quote: "Their AI-driven claims scrubbing has reduced our denials by over 40%. The transition was seamless and professional.",
      author: "Dr. James Miller",
      title: "Metropolitan Cardiology Group",
      initials: "JM",
      color: "linear-gradient(135deg, #2563eb, #1e40af)"
    },
    {
      quote: "The best RCM partner we've ever had. Their reports are transparent and their team is always available for support.",
      author: "Sarah Jenkins",
      title: "Director – Elite Orthopedics",
      initials: "SJ",
      color: "linear-gradient(135deg, #059669, #064e3b)"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  }, [reviews.length]);

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="testimonials-section">
      {/* 1. CTA Banner */}
      <div className="cta-banner">
        <div className="cta-top">
          <h3>Join healthcare providers who’ve simplified billing with our specialty-specific services.</h3>
          <button className="cta-white-btn">Get Consultation</button>
        </div>
        <div className="cta-divider"></div>
        <div className="cta-bottom">
          <div className="cta-feature">
            <span className="check-icon">✓</span>
            Built for specialists, from cardiology to mental health
          </div>
          <div className="cta-feature">
            <span className="check-icon">✓</span>
            Accuracy, compliance, and 24/7 claim support
          </div>
          <div className="cta-feature">
            <span className="check-icon">✓</span>
            Transparent pricing and scalable solutions
          </div>
        </div>
      </div>

      {/* 2. Testimonials Slider */}
      <div className="testi-container">
        <h2 className="testi-heading">Our Satisfied Providers, Our Testaments</h2>

        <div className="testi-slider-box">
          <div className="testi-content animate-slide" key={currentIndex}>
            <div className="testi-text-side">
              <p className="testi-quote">"{reviews[currentIndex].quote}"</p>
              <h4 className="testi-author">
                {reviews[currentIndex].author} — <span>{reviews[currentIndex].title}</span>
              </h4>
              <button className="watch-video-btn">Watch Video</button>
            </div>

            <div className="testi-visual-side">
              {/* Unique Visual replacing the image */}
              <div className="abstract-avatar-box">
                 <div className="blob-bg" style={{ background: reviews[currentIndex].color }}></div>
                 <div className="initials-overlay">{reviews[currentIndex].initials}</div>
                 <div className="floating-elements">
                    <span className="dot-1"></span>
                    <span className="dot-2"></span>
                    <span className="dot-3"></span>
                 </div>
              </div>
            </div>
          </div>

          <div className="testi-dots">
            {reviews.map((_, i) => (
              <span 
                key={i} 
                className={`testi-dot ${currentIndex === i ? 'active' : ''}`}
                onClick={() => setCurrentIndex(i)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;