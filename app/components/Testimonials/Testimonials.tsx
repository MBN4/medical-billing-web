"use client";
import React, { useState } from 'react';
import './styles.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const reviews = [
    {
      quote: "We've been working with Transcure for 8 years now and we are satisfied with their services and customer support. They decreased our denials by 40%.",
      author: "Ashlee Rose",
      title: "Harding Memorial Healthcare",
      stars: 5,
      color: "#10b981"
    },
    {
      quote: "Their AI-driven claims scrubbing has reduced our denials significantly. The transition was seamless, professional and high-tech.",
      author: "Dr. James Miller",
      title: "Metropolitan Cardiology Group",
      stars: 5,
      color: "#3b82f6"
    },
    {
      quote: "The best RCM partner we've ever had. Their reports are transparent and their team is always available for support 24/7.",
      author: "Sarah Jenkins",
      title: "Director – Elite Orthopedics",
      stars: 5,
      color: "#8b5cf6"
    }
  ];

  const next = () => setIndex((index + 1) % reviews.length);
  const prev = () => setIndex((index - 1 + reviews.length) % reviews.length);

  return (
    <section className="testi-section-new section-padding">
      <div className="container">
        <div className="section-header-centered">
          <motion.span className="section-subtitle">TESTIMONIALS</motion.span>
          <motion.h2 className="section-title">What Our <span className="gradient-text">Providers Say</span></motion.h2>
        </div>

        <div className="testi-carousel-new">
          <AnimatePresence mode="wait">
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="testi-card-new glass-card"
            >
              <div className="testi-quote-icon">
                <Quote size={40} fill="currentColor" />
              </div>
              
              <div className="testi-rating">
                {[...Array(reviews[index].stars)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              <p className="testi-text">"{reviews[index].quote}"</p>

              <div className="testi-footer-new">
                <div className="testi-info">
                  <h4 className="testi-name">{reviews[index].author}</h4>
                  <p className="testi-role">{reviews[index].title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="testi-nav">
            <button onClick={prev} className="testi-nav-btn"><ChevronLeft /></button>
            <div className="testi-dots-new">
              {reviews.map((_, i) => (
                <div key={i} className={`testi-dot ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)} />
              ))}
            </div>
            <button onClick={next} className="testi-nav-btn"><ChevronRight /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
