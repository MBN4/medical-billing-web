import React from 'react';
import './styles.css';

const KnowledgeCenter = () => {
  const categories = [
    { title: "Articles", bg: "/knowledge-1.jpg" },
    { title: "Case Studies", bg: "/knowledge-2.jpg" },
    { title: "Testimonials", bg: "/knowledge-3.jpg" }
  ];

  return (
    <section className="knowledge-wrapper">
      <div className="knowledge-container">
        <div className="knowledge-header">
          <h2>Knowledge Center</h2>
          <p>
            Get the latest healthcare industry insights to learn more about 
            making your practice more profitable.
          </p>
        </div>

        <div className="knowledge-grid">
          {categories.map((cat, index) => (
            <div 
              key={index} 
              className="knowledge-card" 
              style={{ backgroundImage: `url(${cat.bg})` }}
            >
              <div className="card-overlay">
                <h3>{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeCenter;