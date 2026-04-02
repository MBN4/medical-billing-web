"use client";
import React, { useState } from 'react';
import './styles.css';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/example@gmil.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Reset form when modal closes
  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', phone: '' });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-backdrop"
            onClick={handleClose}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="modal-content-wrapper"
          >
            <button className="modal-close-btn" onClick={handleClose}>
              <X size={20} />
            </button>

            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="modal-success-state"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                >
                  <CheckCircle size={64} className="success-icon" />
                </motion.div>
                <h3>Thank You!</h3>
                <p>We've received your information and will contact you shortly.</p>
                <button className="btn-primary-new modal-btn" onClick={handleClose}>
                  Done
                </button>
              </motion.div>
            ) : (
              <div className="modal-form-state">
                <h3>Get a Free Consultation</h3>
                <p>Please provide your details below and our experts will get in touch with you.</p>
                
                <form onSubmit={handleSubmit} className="consultation-form">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  {status === 'error' && (
                    <div className="error-message">Something went wrong. Please try again.</div>
                  )}

                  <button 
                    type="submit" 
                    className="btn-primary-new modal-submit-btn"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Submitting...' : 'Submit Request'}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationModal;
