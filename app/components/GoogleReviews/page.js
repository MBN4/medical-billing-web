"use client";
import React, { useState, useEffect, useCallback } from 'react';
import './styles.css';
import Image from 'next/image';

const GoogleReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    { id: 1, name: "Mercy Medical", initials: "M", color: "#2e7d32", text: "We are incredibly impressed with Transcure Medical Billing Services’ medical billing expertise. Their knowledgeable team has ensured compliance with regulations, minimized payment delays, and improved our cash flow." },
    { id: 2, name: "Stefanie Anderson", initials: "S", color: "#0097a7", text: "Transcure Medical Billing Services has been an invaluable partner in managing our billing needs. Their expertise, accuracy, and dedication have made a noticeable impact on our practice's efficiency." },
    { id: 3, name: "Sharon Magner", initials: "S", color: "#f06292", text: "We have been utilizing TransCure for about 18 months. They made a seamless transition from our in-house billing services to their services. Truly, the easiest transition I could ever imagine." },
    { id: 4, name: "Emily Liu", initials: "E", color: "#689f38", text: "Great experience working with Transcure. Communication is always clear and timely. Their team is knowledgeable and responsive in handling our billing needs." },
    { id: 5, name: "James Wilson", initials: "J", color: "#1976d2", text: "Professional and highly efficient. Our collection rates have increased significantly since we partnered with them. Highly recommend for any medical practice." },
    { id: 6, name: "Linda Chen", initials: "L", color: "#fbc02d", text: "The transition to Transcure was handled with extreme care. Their team is expert at navigating complex payer rules and ensuring we get paid what we're owed." },
    { id: 7, name: "Robert Fox", initials: "R", color: "#d32f2f", text: "Excellent support and very transparent reporting. I can see exactly where our revenue stands at any moment. Truly a top-tier RCM company." },
    { id: 8, name: "Maria Garcia", initials: "M", color: "#7b1fa2", text: "Their AI-driven scrubbing tools are amazing. We see far fewer rejections now. The staff is friendly and always goes the extra mile for us." },
    { id: 9, name: "Kevin Vough", initials: "K", color: "#e64a19", text: "Transcure has simplified our entire front-desk to back-office workflow. Their expertise in specialty-specific billing is second to none." }
  ];

  // Logic to handle infinite scroll (moving by 1 card at a time)
  const totalSlides = reviews.length;
  
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="reviews-wrapper">
      <div className="reviews-container">
        
        <div className="slider-viewport">
          <div 
            className="reviews-track" 
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {reviews.map((rev) => (
              <div key={rev.id} className="review-card-item">
                <div className="review-card">
                  <div className="card-header">
                    <div className="user-info">
                      <div className="user-avatar" style={{ backgroundColor: rev.color }}>
                        {rev.initials}
                      </div>
                      <div className="user-meta">
                        <h4 className="user-name">{rev.name}</h4>
                        <div className="stars">★★★★★</div>
                      </div>
                    </div>
                    <div className="google-logo">
                       <Image src="/google-g.png" alt="Google" width={24} height={24} />
                    </div>
                  </div>
                  
                  <div className="card-body">
                    <p className="review-text">{rev.text}</p>
                  </div>

                  <div className="card-footer">
                    <a href="#" className="view-review">View Review <span>❯</span></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="review-dots">
          {reviews.map((_, i) => (
            <span 
              key={i} 
              className={`r-dot ${currentIndex === i ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;