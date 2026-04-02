"use client";
import React from 'react';
import './styles.css';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Clock, CheckCircle2, ShieldAlert, Award, ArrowDownToLine, Zap } from 'lucide-react';

const SuccessMetrics = () => {
  const metrics = [
    { target: "500M+", label: "Claims Value", icon: <TrendingUp size={24} />, color: "#3b82f6" },
    { target: "24", label: "A/R Days", icon: <Clock size={24} />, color: "#10b981" },
    { target: "48", label: "TAT Hours", icon: <Zap size={24} />, color: "#8b5cf6" },
    { target: "99%", label: "Retention", icon: <Award size={24} />, color: "#f59e0b" },
    { target: "2.7M", label: "Claims Done", icon: <BarChart3 size={24} />, color: "#ec4899" },
    { target: "98%", label: "Clean Rate", icon: <CheckCircle2 size={24} />, color: "#06b6d4" },
    { target: "15%", label: "Rev Gain", icon: <TrendingUp size={24} />, color: "#6366f1" },
    { target: "30%", label: "A/R Cut", icon: <ArrowDownToLine size={24} />, color: "#f43f5e" }
  ];

  return (
    <section className="metrics-section-new section-padding">
      <div className="container">
        <div className="metrics-bg-shapes"></div>
        
        <div className="section-header-centered">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="section-subtitle"
          >
            DATA-DRIVEN RESULTS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Metrics that Matter for Your <span className="gradient-text">Practice Growth</span>
          </motion.h2>
        </div>

        <div className="metrics-dynamic-grid">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="metric-bubble-card"
            >
              <div className="metric-bubble-icon" style={{ background: metric.color }}>
                {metric.icon}
              </div>
              <div className="metric-bubble-content">
                <div className="metric-bubble-value" style={{ color: metric.color }}>{metric.target}</div>
                <div className="metric-bubble-label">{metric.label}</div>
              </div>
              <div className="metric-bubble-progress">
                <div className="progress-fill" style={{ width: '70%', background: metric.color }}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessMetrics;
