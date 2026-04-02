"use client";
import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

const SuccessMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const metrics = [
    { target: 500, prefix: "$", suffix: "M+", label: "Value of claims processed" },
    { target: 24, prefix: "", suffix: "", label: "Accounts Receivable Days" },
    { target: 48, prefix: "", suffix: "Hours", label: "Turn Around Time (TAT)" },
    { target: 99, prefix: "", suffix: "%", label: "Customer Retention" },
    { target: 2.7, prefix: "", suffix: "M", label: "Number of Claims Processed", isDecimal: true },
    { target: 98, prefix: "", suffix: "%", label: "First Pass Clean Claims Rate" },
    { target: 10, prefix: "5%-", suffix: "%", label: "Revenue Improvement" },
    { target: 30, prefix: "", suffix: "%", label: "Reduction in A/R" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="metrics-wrapper" ref={sectionRef}>
      <div className={`metrics-content ${isVisible ? 'slide-up-active' : ''}`}>
        <h2 className="metrics-title">Our Success in Numbers</h2>
        
        <div className="metrics-grid">
          {metrics.map((item, index) => (
            <div key={index} className="metric-card">
              <div className="metric-number-box">
                <span className="magenta-text">
                  {item.prefix}
                  <Counter target={item.target} start={isVisible} isDecimal={item.isDecimal} />
                  {item.suffix}
                </span>
              </div>
              <p className="metric-label">{item.label}</p>
              {/* Vertical line separator (hidden on last items of row and mobile) */}
              {(index + 1) % 4 !== 0 && <div className="vertical-divider"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Internal Counter Component */
const Counter = ({ target, start, isDecimal }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime;
    const duration = 2000; // 2 seconds animation

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const currentCount = progress * target;
      setCount(isDecimal ? currentCount.toFixed(1) : Math.floor(currentCount));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, target, isDecimal]);

  return <span>{count}</span>;
};

export default SuccessMetrics;