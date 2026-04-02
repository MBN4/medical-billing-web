"use client";
import React, { useState } from 'react';
import './styles.css';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, Mail, Phone, MapPin, Send, ShieldCheck, Award } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic valid email pattern check
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (isValid) {
      router.push('/pricing');
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <footer className="footer-root">
      <div className="footer-newsletter-section">
        <div className="container">
          <div className="newsletter-card-new">
            <div className="newsletter-text-new">
              <h3 className="newsletter-h3">Stay Ahead of RCM Trends</h3>
              <p className="newsletter-p">Join 5,000+ providers getting our weekly medical billing insights.</p>
            </div>
            <form className="newsletter-form-new" onSubmit={handleSubscribe}>
              <div className="input-group-new">
                <input 
                  type="email" 
                  placeholder="Your work email" 
                  required 
                  className="newsletter-input" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="newsletter-submit-btn">
                  Subscribe <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-main-new">
        <div className="container">
          <div className="footer-grid-new">
            <div className="footer-col-new brand-col-new">
              <Link href="/" style={{ textDecoration: 'none' }}>
                <h2 className="footer-text-logo">TRANSCURE</h2>
              </Link>
              <p className="footer-brand-desc">
                Pioneering the future of Revenue Cycle Management with precision AI agents and human expertise.
              </p>
              <div className="social-links-new">
                <a href="#" className="social-icon-new"><Globe size={18} /></a>
                <a href="#" className="social-icon-new"><Globe size={18} /></a>
                <a href="#" className="social-icon-new"><Globe size={18} /></a>
              </div>
              
              <div className="footer-badges-new">
                <div className="badge-mini"><ShieldCheck size={14} /> HIPAA</div>
                <div className="badge-mini"><Award size={14} /> ISO 27001</div>
              </div>
            </div>

            <div className="footer-col-new">
              <h4 className="footer-h4-new">Our Services</h4>
              <ul className="footer-links-new">
                <li><Link href="/services/medical-billing">Medical Billing</Link></li>
                <li><Link href="/services/coding">Medical Coding</Link></li>
                <li><Link href="/services/denial-management">Denial Management</Link></li>
                <li><Link href="/services/credentialing">Credentialing</Link></li>
                <li><Link href="/services/ai-rcm">AI RCM Solutions</Link></li>
              </ul>
            </div>

            <div className="footer-col-new">
              <h4 className="footer-h4-new">Quick Links</h4>
              <ul className="footer-links-new">
                <li><Link href="/company/about-us">About Us</Link></li>
                <li><Link href="/expertise">Expertise</Link></li>
                <li><Link href="/ehr-partners">EHR Partners</Link></li>
                <li><Link href="/knowledge-center">Knowledge Center</Link></li>
                <li><Link href="/careers">Careers</Link></li>
              </ul>
            </div>

            <div className="footer-col-new contact-col-new">
              <h4 className="footer-h4-new">Get in Touch</h4>
              <div className="footer-contact-item">
                <MapPin size={18} className="f-icon" />
                <p>123 Billing St, Suite 500, <br />New York, NY 10001</p>
              </div>
              <div className="footer-contact-item">
                <Phone size={18} className="f-icon" />
                <p>00000000000</p>
              </div>
              <div className="footer-contact-item">
                <Mail size={18} className="f-icon" />
                <p>info@transcure.net</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-new">
        <div className="container divider-new">
          <div className="footer-bottom-inner">
            <p className="copyright-text">© {new Date().getFullYear()} Transcure. All Rights Reserved.</p>
            <div className="legal-links-new">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <div className="dot-sep"></div>
              <Link href="/terms-of-service">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
