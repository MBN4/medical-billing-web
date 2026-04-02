"use client";
import React, { useState, useEffect } from 'react';
import './styles.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Phone, User, Globe } from 'lucide-react';
import ConsultationModal from '../ConsultationModal/ConsultationModal';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Home', href: '/' },
    { 
      title: 'Services', 
      dropdown: [
        { title: 'AI Agents', href: '/services/ai-agents', desc: 'Automate RCM with AI' },
        { title: 'Medical Billing', href: '/services/medical-billing', desc: 'Maximize collections' },
        { title: 'Coding', href: '/services/coding', desc: 'Certified accuracy' },
        { title: 'Revenue Cycle', href: '/services/revenue-cycle', desc: 'Optimize workflows' },
      ]
    },
    { 
      title: 'States', 
      dropdown: [
        { title: 'Texas', href: '/states/texas' },
        { title: 'California', href: '/states/california' },
        { title: 'Florida', href: '/states/florida' },
        { title: 'New York', href: '/states/new-york' },
      ]
    },
    { 
      title: 'Expertise', 
      dropdown: [
        { title: 'Cardiology', href: '/expertise/cardiology', desc: 'Heart care billing' },
        { title: 'Orthopedics', href: '/expertise/orthopedics', desc: 'Bone & joint coding' },
        { title: 'Neurology', href: '/expertise/neurology', desc: 'Complex claim prep' },
        { title: 'Pediatrics', href: '/expertise/pediatrics', desc: 'Child health billing' },
      ]
    },
    { 
      title: 'Specialties', 
      dropdown: [
        { title: 'Urgent Care', href: '/specialties/urgent-care' },
        { title: 'Solo Practice', href: '/specialties/solo-practice' },
        { title: 'Group Practice', href: '/specialties/group-practice' },
        { title: 'Telehealth', href: '/specialties/telehealth' },
      ]
    },
    { 
      title: 'Company', 
      dropdown: [
        { title: 'About Us', href: '/company/about-us' },
        { title: 'Careers', href: '/company/careers' },
        { title: 'Contact Us', href: '/company/contact' },
      ]
    },
    { title: 'Pricing', href: '/pricing' },
  ];

  return (
    <nav className={`navbar-root ${isScrolled ? 'scrolled' : ''}`}>
      <div className="top-bar-new">
        <div className="container top-inner">
          <div className="top-left">
            <div className="top-item"><User size={14} /> <span>PRACTICE LOGIN</span></div>
            <div className="top-item"><Globe size={14} /> <span>PATIENT PORTAL</span></div>
          </div>
          <div className="top-right">
            <div className="top-item"><Phone size={14} /> <span>SALES: <strong>000000000</strong></span></div>
          </div>
        </div>
      </div>

      <div className="main-nav-new">
        <div className="container main-inner">
          <Link href="/" className="logo-container">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Image 
                src="/logo.png" 
                alt="Transcure Logo" 
                width={150} 
                height={45} 
                priority 
                style={{ objectFit: 'contain', mixBlendMode: 'multiply' }}
              />
            </motion.div>
          </Link>

          <ul className="nav-links-desktop">
            {menuItems.map((item, idx) => (
              <li 
                key={idx} 
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <div className="nav-item-with-dropdown">
                    <span>{item.title}</span>
                    <ChevronDown size={14} className={activeDropdown === item.title ? 'rotate' : ''} />
                    <AnimatePresence>
                      {activeDropdown === item.title && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="dropdown-container"
                        >
                          <div className="dropdown-grid">
                            {item.dropdown.map((sub: any, sidx) => (
                              <Link key={sidx} href={sub.href} className="dropdown-item">
                                <div className="dropdown-item-title">{sub.title}</div>
                                {sub.desc && <div className="dropdown-item-desc">{sub.desc}</div>}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link href={item.href || '#'} className="nav-link">{item.title}</Link>
                )}
              </li>
            ))}
          </ul>

          <div className="nav-actions-new">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary-new"
              onClick={() => setIsModalOpen(true)}
            >
              Get Consultation
            </motion.button>
            
            <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu-overlay"
          >
            <div className="mobile-menu-content">
              {menuItems.map((item, idx) => (
                <div key={idx} className="mobile-item">
                  <Link href={item.href || '#'} onClick={() => setIsMobileMenuOpen(false)}>{item.title}</Link>
                  {item.dropdown && (
                    <div className="mobile-sub">
                      {item.dropdown.map((sub, sidx) => (
                        <Link key={sidx} href={sub.href} onClick={() => setIsMobileMenuOpen(false)}>{sub.title}</Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;
