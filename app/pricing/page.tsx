"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, X, Phone, Mail, User } from 'lucide-react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './pricing.css';

interface PricingPlan {
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  description: string;
  features: string[];
  popular: boolean;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Standard RCM',
    monthlyPrice: '3.9%',
    annualPrice: '3.3%',
    description: 'Perfect for small to medium practices seeking efficient billing.',
    features: ['98% Clean Claim Rate', 'Electronic Remittance', 'Dedicated Account Mgr', 'Weekly Revenue Analysis', 'Initial A/R Cleanup'],
    popular: false
  },
  {
    name: 'AI Enhanced',
    monthlyPrice: '5.2%',
    annualPrice: '4.4%',
    description: 'Advanced automation for high-volume clinics and surgical centers.',
    features: ['Real-time AI Scrubbing', 'Predictive Denial Prev', 'Priority Support', 'Full Dashboard Access', 'Audit Defense Coverage'],
    popular: true
  },
  {
    name: 'Enterprise Plus',
    monthlyPrice: '7.5%',
    annualPrice: '6.4%',
    description: 'Full-service financial outsourcing for hospital networks.',
    features: ['Unlimited Transactions', 'Credentialing Included', 'Custom API Access', '24/7 Global Support', 'Full Financial Auditing'],
    popular: false
  }
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    specialty: 'Cardiology',
    volume: '',
    name: '',
    email: '',
    phone: ''
  });

  const openModal = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
    setStep(1);
    setIsSubmitted(false);
    setFormData(prev => ({
      ...prev,
      volume: isAnnual ? '$0 - $600k' : '$0 - $50k'
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending data to example.gmail.com:", {
        plan: selectedPlan?.name,
        billingCycle: isAnnual ? 'Annual' : 'Monthly',
        ...formData
    });
    setIsSubmitted(true);
    setTimeout(() => {
        setModalOpen(false);
    }, 4000);
  };

  return (
    <div className="pricing-wrapper">
      <Navbar />
      
      <section className="pricing-hero">
        <motion.div 
          className="pricing-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="badge">Flexible Pricing</span>
          <h1>Performance-Based <span>Honesty</span></h1>
          <p>We only succeed when you do. No setup fees. No hidden costs. Just pure collections efficiency.</p>
          
          <div className="toggle-container">
            <span className={!isAnnual ? 'active' : ''}>Monthly</span>
            <button className="toggle-switch" onClick={() => setIsAnnual(!isAnnual)}>
              <motion.div 
                className="toggle-knob"
                animate={{ x: isAnnual ? 30 : 0 }}
              />
            </button>
            <span className={isAnnual ? 'active' : ''}>Annual (Save 15%)</span>
          </div>
        </motion.div>

        <div className="pricing-grid">
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div 
              key={plan.name}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {plan.popular && <div className="popular-badge">Most Advanced</div>}
              <h3>{plan.name}</h3>
              <div className="price-tag">
                <span className="percent">{isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                <span className="of-collections">of collections</span>
              </div>
              <p className="plan-desc">{plan.description}</p>
              
              <ul className="plan-features">
                {plan.features.map(f => (
                  <li key={f}><Check size={18} className="check-icon" /> {f}</li>
                ))}
              </ul>

              <button 
                onClick={() => openModal(plan)}
                className={`plan-btn ${plan.popular ? 'solid' : 'outline'}`}
              >
                Get Started Today <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="pricing-trust">
        <p>Trusted by over <strong>500+ practices</strong> across the United States</p>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <div className="modal-overlay">
            <motion.div 
              className="modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
            >
              <button className="close-btn" onClick={() => setModalOpen(false)}><X size={20} /></button>
              
              {!isSubmitted ? (
                <div className="modal-inner">
                  <div className="step-indicator">
                    <div className={`step-dot ${step >= 1 ? 'active' : ''}`}></div>
                    <div className="step-line"></div>
                    <div className={`step-dot ${step >= 2 ? 'active' : ''}`}></div>
                  </div>

                  {step === 1 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <h2>Practice Details</h2>
                      <p className="modal-subtext">Tell us about your practice to customize your {selectedPlan?.name} experience.</p>
                      <div className="input-group">
                        <label>Medical Specialty</label>
                        <div className="select-wrapper">
                            <select name="specialty" value={formData.specialty} onChange={handleInputChange}>
                                <option>Cardiology</option>
                                <option>Mental Health</option>
                                <option>General Practice</option>
                                <option>Pediatrics</option>
                                <option>Other</option>
                            </select>
                        </div>
                      </div>
                      <div className="input-group">
                        <label>{isAnnual ? 'Annual' : 'Monthly'} Collection Volume</label>
                        <div className="select-wrapper">
                            <select name="volume" value={formData.volume} onChange={handleInputChange}>
                                {isAnnual ? (
                                    <>
                                        <option>$0 - $600k</option>
                                        <option>$600k - $2.4M</option>
                                        <option>$2.4M - $6M</option>
                                        <option>$6M+</option>
                                    </>
                                ) : (
                                    <>
                                        <option>$0 - $50k</option>
                                        <option>$50k - $200k</option>
                                        <option>$200k - $500k</option>
                                        <option>$500k+</option>
                                    </>
                                )}
                            </select>
                        </div>
                      </div>
                      <button className="modal-next-btn" onClick={() => setStep(2)}>Continue</button>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <h2>Contact Information</h2>
                      <p className="modal-subtext">Our experts will send the {selectedPlan?.name} proposal to the details below.</p>
                      <form onSubmit={handleSubmit}>
                        <div className="input-group">
                          <div className="input-with-icon">
                            <User size={18} />
                            <input 
                                type="text" 
                                name="name"
                                placeholder="Full Name" 
                                required 
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="input-group">
                          <div className="input-with-icon">
                            <Mail size={18} />
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Work Email" 
                                required 
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="input-group">
                          <div className="input-with-icon">
                            <Phone size={18} />
                            <input 
                                type="tel" 
                                name="phone"
                                placeholder="Phone Number" 
                                required 
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <button type="submit" className="modal-submit-btn">Initialize Setup</button>
                        <button type="button" className="back-link" onClick={() => setStep(1)}>Go back</button>
                      </form>
                    </motion.div>
                  )}
                </div>
              ) : (
                <motion.div 
                  className="success-state"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                >
                  <div className="success-icon"><Check size={40} strokeWidth={3} /></div>
                  <h2>Request Sent!</h2>
                  <p>A specialist will contact you at <strong>{formData.email}</strong> within the next 2 hours to finalize your {selectedPlan?.name} onboarding.</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}