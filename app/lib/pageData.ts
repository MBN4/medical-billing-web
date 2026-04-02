import { 
  Bot, 
  Stethoscope, 
  Scale, 
  BarChart, 
  MapPin, 
  Heart, 
  Bone, 
  Activity, 
  Baby, 
  Users, 
  Briefcase, 
  Mail, 
  FileText, 
  Lightbulb, 
  MonitorPlay,
  CreditCard 
} from 'lucide-react';

export const PAGE_DATA: Record<string, any> = {
  // SERVICES
  'ai-agents': {
    icon: Bot,
    title: 'AI Revenue Agents',
    subTitle: 'The Future of RCM is AI-Driven',
    description: 'Deploy intelligent autonomous agents that handle claim preparation, status checks, and denials 24/7 with over 99% accuracy.',
    features: ['Real-time claim scrubbing', 'Automated appeal generation', 'Predictive denial prevention'],
    theme: '#0a4d4a',
    accent: '#14b8a6'
  },
  'medical-billing': {
    icon: Stethoscope,
    title: 'Elite Medical Billing',
    subTitle: 'Maximize Your Collections Today',
    description: 'Transform your practices revenue lifecycle with expert precision and relentless follow-ups on every dollar you earn.',
    features: ['Clean claim rate > 98%', 'Reduced days in AR', 'Electronic remittance advice'],
    theme: '#0a4d4a',
    accent: '#14b8a6'
  },
  'coding': {
    icon: Scale,
    title: 'Certified Medical Coding',
    subTitle: 'ICD-10 & CPT Precision',
    description: 'AAPC & AHIMA certified coders ensuring compliance while minimizing audit risks and maximizing reimbursement levels.',
    features: ['Specialty-specific coding', 'Audit & compliance reviews', 'Clinical documentation improvement'],
    theme: '#0a4d4a',
    accent: '#14b8a6'
  },
  'revenue-cycle': {
    icon: BarChart,
    title: 'Full Revenue Management',
    subTitle: 'End-to-End Financial Optimization',
    description: 'A holistic approach to managing every financial touchpoint from patient registration to final payment resolution.',
    features: ['Patient eligibility verification', 'Denial management', 'Detailed financial reporting'],
    theme: '#0a4d4a',
    accent: '#14b8a6'
  },

  // STATES
  'texas': {
    icon: MapPin,
    title: 'Serving Texas Providers',
    subTitle: 'Deep Local Knowledge in the Lone Star State',
    description: 'Expertise in Texas Medicaid, BCBS TX, and local commercial payers across Austin, Dallas, and Houston.',
    features: ['TX Medicaid expertise', 'Local payer navigation', 'Regional compliance'],
    theme: '#0a4d4a',
    accent: '#14b8a6'
  },
  'california': {
    icon: MapPin,
    title: 'California Medical Experts',
    subTitle: 'Navigating the Golden State\'s Complexities',
    description: 'Decades of experience with Medi-Cal and Northern/Southern California payer networks.',
    features: ['Medi-Cal optimization', 'CA specific regulations', 'High-volume claim processing'],
    theme: '#0a4d4a',
    accent: '#14b8a6'
  },
  'florida': {
    icon: MapPin,
    title: 'Florida Billing Network',
    subTitle: 'Sunshine State Reimbursement Specialists',
    description: 'Strategic billing solutions for diverse Florida practices, from Miami to Orlando and Tampa.',
    features: ['FL Blue specialized coding', 'Medicare/Medicaid focus', 'Rapid claim cycles'],
    theme: '#0a4d4a',
    accent: '#14b8a6'
  },
  'new-york': {
    icon: MapPin,
    title: 'New York Billing Pros',
    subTitle: 'Elite Scaling for NY Practices',
    description: 'Handling the fast-paced, high-regulation environment of New York City and State medical systems.',
    features: ['Empire BCBS expertise', 'NY Medicaid specialists', 'Aggressive follow-up'],
    theme: '#0a4d4a',
    accent: '#14b8a6'
  },
  'new-jersey': {
    icon: MapPin,
    title: 'New Jersey Specialists',
    subTitle: 'Garden State RCM Solutions',
    description: 'Specialized billing for NJ providers, focusing on local commercial payers and state Medicaid plans.',
    features: ['NJ Medicaid specialists', 'Horizon BCBS expertise', 'Local compliance'],
    theme: '#0a4d4a',
    accent: '#14b8a6'
  },

  // EXPERTISE
  'cardiology': {
    icon: Heart,
    title: 'Cardiology Billing',
    subTitle: 'Heart-Health Revenue Specialist',
    description: 'Specialized coding for EKG, stress tests, and complex cardiovascular procedures.',
    features: ['Cardiology CPT expertise', 'Echo & Vascular coding', 'Denied claim recoveries'],
    theme: '#b91c1c', // red-ish
    accent: '#ef4444'
  },
  'orthopedics': {
    icon: Bone,
    title: 'Orthopedic Billing',
    subTitle: 'Bone & Joint Coding Experts',
    description: 'Expertise in musculoskeletal surgery, PT, and orthopedic equipment billing.',
    features: ['Surgical coding accuracy', 'Physical therapy billing', 'DME reimbursement'],
    theme: '#0369a1', // blue-ish
    accent: '#0ea5e9'
  },
  'neurology': {
    icon: Activity,
    title: 'Neurology Solutions',
    subTitle: 'Complex Brain & Nerve Billing',
    description: 'Navigating the high-stakes coding required for neurologists and neurosurgeons.',
    features: ['EEG/EMG coding', 'Complex surgical claims', 'Chronic care management'],
    theme: '#4338ca', // indigo
    accent: '#6366f1'
  },
  'pediatrics': {
    icon: Baby,
    title: 'Pediatric Care Billing',
    subTitle: 'Growing Healthy Revenues',
    description: 'Family-centered billing specializing in routine checks and pediatric-specific codes.',
    features: ['Well-child visit expertise', 'Immunization coding', 'Medicaid focus'],
    theme: '#be185d', // pink-ish
    accent: '#ec4899'
  },

  // SPECIALTIES
  'urgent-care': {
    icon: Activity,
    title: 'Urgent Care Centers',
    subTitle: 'Speed & Scale specialists',
    description: 'High-volume billing for immediate care settings needing 24-hour turnaround cycles.',
    features: ['Fast-track claim filing', 'High volume automation', 'Walk-in billing cycles'],
    theme: '#0a4d4a',
    accent: '#14b8a6'
  },
  'telehealth': {
    icon: MonitorPlay,
    title: 'Telehealth Billing',
    subTitle: 'The Future of Care Delivery',
    description: 'Navigating the rapidly changing landscape of virtual visit reimbursement and modifiers.',
    features: ['Virtual-visit CPT coding', 'State-to-state regs', 'Platform integration'],
    theme: '#14b8a6',
    accent: '#f0fdfa'
  },

  // COMPANY
  'about-us': {
    icon: Users,
    title: 'Our Story',
    subTitle: 'Building Trust Since 2010',
    description: 'A dedicated team of billing experts, AI engineers, and medical coders working to simplify healthcare.',
    features: ['200+ Team members', '500+ Satisfied clients', 'Global support'],
    theme: '#0a4d4a',
    accent: '#14b8a6'
  },
  'careers': {
    icon: Briefcase,
    title: 'Join Our Mission',
    subTitle: 'The Future of RCM Needs You',
    description: 'Come build the next generation of healthcare technology and redefine medical billing.',
    features: ['Remote-first culture', 'Full health benefits', 'Rapid growth opps'],
    theme: '#0a4d4a',
    accent: '#14b8a6'
  },
  'contact': {
    icon: Mail,
    title: 'Get In Touch',
    subTitle: 'We\'re Here to Help You Thrive',
    description: 'Expert consultants ready to analyze your revenue cycle and identify growth opportunities.',
    features: ['24/7 Support line', 'Dedicated account execs', 'Free audits'],
    theme: '#0a4d4a',
    accent: '#14b8a6'
  },

  // RESOURCES
  'blog': {
    icon: Lightbulb,
    title: 'Industry Insights',
    subTitle: 'Stay Ahead of the Curve',
    description: 'Expert analysis of the latest RCM trends, coding updates, and medical billing best practices.',
    features: ['Weekly updates', 'Compliance alerts', 'Market trends'],
    theme: '#0a4d4a',
    accent: '#14b8a6'
  },
  'case-studies': {
    icon: FileText,
    title: 'Client Success Stories',
    subTitle: 'Measurable Results, Proven Success',
    description: 'Detailed breakdowns of how we increased revenue for practices across all 50 states.',
    features: ['Practice growth data', 'Denial reduction stats', 'Client testimonials'],
    theme: '#0a4d4a',
    accent: '#14b8a6'
  },
  'webinars': {
    icon: MonitorPlay,
    title: 'Expert Webinars',
    subTitle: 'Learn From RCM Leaders',
    description: 'Join our weekly live sessions covering the most critical updates in medical billing and practice management.',
    features: ['Live Q&A sessions', 'On-demand recordings', 'CEU eligible content'],
    theme: '#0a4d4a',
    accent: '#14b8a6'
  },

  // PRICING
  'pricing': {
    icon: CreditCard,
    title: 'Transparent Pricing',
    subTitle: 'Only Pay When You Get Paid',
    description: 'Performance-based models designed to align our success directly with your practices growth.',
    features: ['No setup fees', 'Dedicated account manager', 'Free AR cleanup'],
    theme: '#0a4d4a',
    accent: '#14b8a6'
  }
};
