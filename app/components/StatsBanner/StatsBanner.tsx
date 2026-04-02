"use client";
import React from 'react';
import './styles.css';
import { motion } from 'framer-motion';
import { Users, Layout, Shield, Target, Award } from 'lucide-react';

const StatsBanner = () => {
  const stats = [
    { icon: <Users size={24} />, label: "Health Providers", value: "500+" },
    { icon: <Layout size={24} />, label: "Specialties", value: "40+" },
    { icon: <Award size={24} />, label: "Certified Billers", value: "1100+" },
    { icon: <Shield size={24} />, label: "Clean Claims", value: "98%" },
    { icon: <Target size={24} />, label: "Revenue Growth", value: "24%" }
  ];

  return (
    <section className="stats-banner-new">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="stats-glass-wrapper"
        >
          <div className="stats-grid-new">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item-new">
                <div className="stat-icon-wrapper">
                  {stat.icon}
                </div>
                <div className="stat-content-new">
                  <motion.div 
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    className="stat-value-new"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="stat-label-new">{stat.label}</div>
                </div>
                {index < stats.length - 1 && <div className="stat-divider"></div>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBanner;
