import React from 'react';
import './styles.css';

const CTASection = () => {
  return (
    <section className="cta-section-wrapper">
      <div className="cta-container">
        
        {/* Top Content */}
        <div className="cta-top-content">
          <h2 className="cta-main-title">Remove Your Billing Burdens with Transcure’s Expert Team</h2>
          <p className="cta-main-desc">
            Managing medical billing and revenue cycle tasks can take up a lot of your time, making it harder to focus on patient care. 
            <strong> Transcure makes it easy</strong> with expert <strong>billers and coders</strong> trained in ICD-10, CPT, and HCPCS. 
            We offer <span className="highlight">RCM services for 40+ specialties</span> and seamlessly integrate with 30+ EHRs for smooth billing. 
            Being HIPAA-compliant and <strong>ISO27001 certified</strong>, we also ensure secure claims processing. 
            Our team helps recover <strong>accounts receivable in just 24 days</strong>, reducing expenses by 25%. 
            With daily, weekly, and monthly claim reports, you stay updated. Let Transcure handle billing while you focus on patients!
          </p>
        </div>

        {/* Floating Banner */}
        <div className="cta-gradient-banner">
          <div className="banner-wave-bg"></div>
          <div className="banner-inner">
            <div className="banner-text">
              <h3>Medical Billing Services to</h3>
              <h2 className="banner-big-text">
                Increase Revenue & Decrease <br />
                <span>Administrative</span> Burden
              </h2>
              <button className="banner-btn">Get Consultation</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTASection;