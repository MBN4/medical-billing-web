"use client";
import React from 'react';
import './styles.css';

const HeroForm = () => {
  return (
    <section className="form-outer-section">
      <div className="floating-form-container">
        <form className="medical-form-grid">
          <div className="form-field">
            <label>First Name <span>*</span></label>
            <input type="text" placeholder="Enter First Name" required />
          </div>

          <div className="form-field">
            <label>Last Name <span>*</span></label>
            <input type="text" placeholder="Enter Last Name" required />
          </div>

          <div className="form-field">
            <label>Email <span>*</span></label>
            <input type="email" placeholder="Enter Email" required />
          </div>

          <div className="form-field">
            <label>Phone <span>*</span></label>
            <input type="tel" placeholder="Enter Phone Number" required />
          </div>

          <div className="form-submit-area">
            <button type="submit" className="form-main-btn">
              Get Consultation
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroForm;