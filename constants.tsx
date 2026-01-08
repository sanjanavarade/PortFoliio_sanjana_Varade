
import React from 'react';
import { Project, Experience, SkillGroup } from './types';
import { 
  Code2, 
  Layers, 
  Database, 
  Cpu, 
  Globe, 
  Smartphone,
  ShieldCheck,
  Zap
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SKILL_GROUPS: (SkillGroup & { icon: React.ReactNode })[] = [
  {
    category: 'Frontend',
    icon: <Globe className="w-5 h-5 text-blue-400" />,
    skills: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Redux'],
  },
  {
    category: 'Backend',
    icon: <Database className="w-5 h-5 text-green-400" />,
    skills: ['Node.js', 'Express', 'MERN Stack', 'SQL', 'Appwrite', 'Socket.io'],
  },
  {
    category: 'Core',
    icon: <Code2 className="w-5 h-5 text-purple-400" />,
    skills: ['Java', 'Data Structures', 'Algorithms', 'System Design'],
  },
  {
    category: 'Web3',
    icon: <ShieldCheck className="w-5 h-5 text-orange-400" />,
    skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3.js'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'OpenVerse',
    description: 'AI-powered open-source contribution platform.',
    longDescription: 'OpenVerse is a comprehensive ecosystem designed to bridge the gap between open-source contributors and maintainers. It leverages AI to analyze repositories, suggesting optimal issues for developers based on their skill levels and past contributions.',
    techStack: ['Next.js', 'Tailwind CSS', 'Gemini API', 'Appwrite', 'Node.js'],
    imageUrl: 'https://picsum.photos/seed/openverse/800/600',
    features: [
      'Repo Analyzer with AI-driven insights',
      'Personal AI Buddy for onboarding assistance',
      'Streak tracking and gamification',
      'Mentorship matching algorithm'
    ],
    github: '#'
  },
  {
    id: 2,
    title: 'Only Jobs',
    description: 'Blockchain-based secure employee referral system.',
    longDescription: 'Only Jobs revolutionizes the hiring process by creating a trustless referral network on the blockchain. Referrers are rewarded via smart contracts, ensuring transparency and eliminating middleman delays in referral bonus payouts.',
    techStack: ['Solidity', 'MERN Stack', 'Ethereum', 'Tailwind CSS', 'Web3.js'],
    imageUrl: 'https://picsum.photos/seed/onlyjobs/800/600',
    features: [
      'Smart contract-based referral rewards',
      'Verified resume storage on IPFS',
      'Real-time job notifications via Socket.io',
      'Secure employer dashboard'
    ],
    github: '#'
  },
  {
    id: 3,
    title: 'Public Complaint System',
    description: 'Live tracking & response system for civic issues.',
    longDescription: 'A real-time platform where citizens can report issues like road damage or sanitation. The system uses geolocation to map complaints, allowing authorities to track, update, and resolve issues with live feedback to users.',
    techStack: ['React', 'Leaflet.js', 'Node.js', 'MongoDB', 'Socket.io'],
    imageUrl: 'https://picsum.photos/seed/complaint/800/600',
    features: [
      'Real-time geolocation mapping',
      'Image uploads with AI tagging',
      'Instant chat between users and authorities',
      'Live status tracking dashboard'
    ],
    github: '#'
  },
  {
    id: 4,
    title: 'Banking UI App',
    description: 'Modern banking dashboard with enterprise-grade auth.',
    longDescription: 'A sleek, performant banking interface built with the latest Next.js features. Focused on user experience and accessibility, it provides a unified view of financial health across multiple accounts.',
    techStack: ['Next.js 15', 'Tailwind v4', 'Appwrite Auth', 'Framer Motion'],
    imageUrl: 'https://picsum.photos/seed/banking/800/600',
    features: [
      'Interactive financial charts',
      'Secure Appwrite authentication',
      'Multi-account synchronization',
      'Dynamic Dark/Light mode support'
    ],
    github: '#'
  },
  {
    id: 5,
    title: 'Solidity E-commerce SC',
    description: 'Decentralized commerce protocol for digital goods.',
    longDescription: 'A set of smart contracts that handle the entire lifecycle of an e-commerce transaction—from listing and escrow to dispute resolution and final payout.',
    techStack: ['Solidity', 'Hardhat', 'Ethers.js', 'Polygon'],
    imageUrl: 'https://picsum.photos/seed/solidity/800/600',
    features: [
      'Escrow protection for buyers',
      'Automated product delivery',
      'Governance-based dispute system',
      'Low gas optimization'
    ],
    github: '#'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    company: 'Tech Innovators',
    role: 'Software Engineer Intern',
    period: 'Summer 2023',
    description: 'Assisted in developing scalable microservices and optimizing React-based frontend components for performance.'
  },
  {
    id: 2,
    company: 'Web3 Startup',
    role: 'Blockchain Developer Contributor',
    period: '2022 - 2023',
    description: 'Contributed to open-source DeFi protocols and audited smart contracts for security vulnerabilities.'
  }
];
