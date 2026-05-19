'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Home,
  Briefcase,
  BarChart3,
  User,
  Sun,
  Moon,
  ChevronDown,
} from 'lucide-react';

// ============================================================================
// TYPES & CONSTANTS
// ============================================================================

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tools: string[];
  link: string;
  github?: string;
}

interface TechSkill {
  name: string;
  category: string;
  icon?: React.ReactNode;
}

// ============================================================================
// MOCK DATA (Replace with API calls to backend)
// ============================================================================

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'ARKAR - AI Portfolio Platform',
    description:
      'Full-stack personal portfolio platform with AI-powered analytics and glassmorphic UI. Features Firebase auth, Supabase database, and real-time project updates.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
    tools: ['Next.js', 'FastAPI', 'Supabase', 'Firebase'],
    link: 'https://arkar.dev',
    github: 'https://github.com/yourname/arkar',
  },
  {
    id: '2',
    title: 'Neural Design System',
    description:
      'Open-source design system with 50+ reusable components, dark mode support, and accessible Tailwind-based utilities. Includes comprehensive Storybook documentation.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
    tools: ['React', 'Tailwind CSS', 'Storybook'],
    link: '#',
    github: 'https://github.com/yourname/neural-ds',
  },
  {
    id: '3',
    title: 'Motion Analytics Dashboard',
    description:
      'Real-time analytics platform with interactive visualizations. Built with React, D3.js, and WebSocket for live data streaming. Deployed on Vercel with edge functions.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
    tools: ['React', 'D3.js', 'WebSocket', 'Vercel'],
    link: '#',
    github: 'https://github.com/yourname/motion-analytics',
  },
];

const TECH_SKILLS: TechSkill[] = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Framer Motion', category: 'Animation' },
  { name: 'FastAPI', category: 'Backend' },
  { name: 'Python', category: 'Language' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Firebase', category: 'Auth' },
  { name: 'Supabase', category: 'Backend' },
  { name: 'GraphQL', category: 'API' },
  { name: 'WebSocket', category: 'Realtime' },
];

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// ============================================================================
// COMPONENTS
// ============================================================================

// Sticky Header with Avatar & Theme Toggle
interface HeaderProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, onThemeToggle }) => (
  <motion.header
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`fixed top-0 left-0 right-0 z-40 border-b ${
      isDark
        ? 'bg-slate-900 border-cyan-500/30'
        : 'bg-white border-gray-300'
    }`}
  >
    <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
      {/* Avatar & Name */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div
          className={`w-10 h-10 rounded-full border-2 ${
            isDark ? 'border-cyan-500 bg-cyan-600' : 'border-blue-500 bg-blue-600'
          } flex items-center justify-center font-bold text-sm text-white`}
        >
          A
        </div>
        <div className="hidden sm:block">
          <p className={`font-mono text-sm font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
            Arkar
          </p>
          <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
            Full Stack Developer
          </p>
        </div>
      </motion.div>

      {/* Theme Toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onThemeToggle}
        className={`p-2 rounded-lg transition-colors ${
          isDark
            ? 'bg-slate-800 hover:bg-slate-700 text-cyan-400'
            : 'bg-gray-100 hover:bg-gray-200 text-yellow-600'
        }`}
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </motion.button>
    </div>
  </motion.header>
);

// Hero Section with CTA
interface HeroSectionProps {
  isDark: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isDark }) => (
  <motion.section
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    className={`pt-28 pb-12 px-4 text-center ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`}
  >
    <motion.div className="mb-6">
      <h1
        className={`text-4xl sm:text-5xl font-bold mb-2 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {isDark ? (
          <>
            BUILD <span className="text-cyan-400">AMAZING</span>
            <br /> WEB EXPERIENCES
          </>
        ) : (
          <>
            CRAVE <span className="text-blue-600">CREATIVE</span>
            <br /> SOLUTIONS
          </>
        )}
      </h1>
    </motion.div>

    <motion.p
      variants={itemVariants}
      className={`text-base sm:text-lg max-w-2xl mx-auto mb-8 ${
        isDark ? 'text-slate-300' : 'text-gray-600'
      }`}
    >
      Building powerful web applications with modern technologies. 
      Focusing on clean code, great user experience, and innovative solutions.
    </motion.p>

    {/* CTA Buttons */}
    <motion.div
      variants={itemVariants}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-8 py-3 rounded-lg font-semibold border-2 transition-colors ${
          isDark
            ? 'bg-cyan-600 border-cyan-500 text-white hover:bg-cyan-500'
            : 'bg-blue-600 border-blue-500 text-white hover:bg-blue-500'
        }`}
      >
        <div className="flex items-center gap-2">
          <Mail size={18} />
          Hire Me
        </div>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`px-8 py-3 rounded-lg font-semibold border-2 transition-colors ${
          isDark
            ? 'bg-slate-700 border-slate-600 text-white hover:bg-slate-600'
            : 'bg-gray-200 border-gray-300 text-gray-700 hover:bg-gray-300'
        }`}
      >
        <div className="flex items-center gap-2">
          <Download size={18} />
          Resume
        </div>
      </motion.button>
    </motion.div>

    {/* Scroll Indicator */}
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="mt-16"
    >
      <ChevronDown
        size={24}
        className={`mx-auto ${isDark ? 'text-cyan-500/50' : 'text-blue-500/50'}`}
      />
    </motion.div>
  </motion.section>
);

// Tech Stack Grid
interface TechStackProps {
  isDark: boolean;
}

const TechStack: React.FC<TechStackProps> = ({ isDark }) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className={`py-12 px-4 ${isDark ? 'bg-slate-900' : 'bg-white'}`}
  >
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className={`text-2xl font-black mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}
        style={{ fontFamily: 'Space Mono, monospace' }}
      >
        TECH STACK
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
      >
        {TECH_SKILLS.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className={`p-4 rounded-lg border text-center cursor-pointer transition-colors ${
              isDark
                ? 'bg-slate-800 border-slate-700 hover:border-cyan-500'
                : 'bg-white border-gray-200 hover:border-blue-500'
            }`}
          >
            <Code size={20} className="mx-auto mb-2 opacity-70" />
            <p
              className={`text-sm font-semibold ${
                isDark ? 'text-cyan-300' : 'text-blue-700'
              }`}
            >
              {skill.name}
            </p>
            <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-gray-500'}`}>
              {skill.category}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

// Projects Showcase
interface ProjectsProps {
  isDark: boolean;
}

const ProjectsShowcase: React.FC<ProjectsProps> = ({ isDark }) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    className={`py-12 px-4 ${isDark ? 'bg-gradient-to-b from-slate-900 to-slate-950' : 'bg-gradient-to-b from-blue-50 to-white'}`}
  >
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className={`text-2xl font-black mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}
        style={{ fontFamily: 'Space Mono, monospace' }}
      >
        PROJECTS
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="space-y-6"
      >
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className={`rounded-xl overflow-hidden border transition-colors ${
              isDark
                ? 'bg-slate-800 border-slate-700 hover:border-cyan-500'
                : 'bg-white border-gray-200 hover:border-blue-500'
            }`}
          >
            {/* Project Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="h-48 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900 relative"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Project Content */}
            <div className="p-5">
              <h3
                className={`text-lg font-semibold mb-2 ${
                  isDark ? 'text-cyan-300' : 'text-blue-700'
                }`}
              >
                {project.title}
              </h3>

              <p
                className={`text-sm mb-4 ${
                  isDark ? 'text-slate-300' : 'text-gray-700'
                }`}
              >
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className={`text-xs px-2 py-1 rounded font-medium ${
                      isDark
                        ? 'bg-slate-700 text-cyan-300'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 py-2 rounded-lg text-sm font-medium text-center transition-colors ${
                    isDark
                      ? 'bg-cyan-600 text-white hover:bg-cyan-500'
                      : 'bg-blue-600 text-white hover:bg-blue-500'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <ExternalLink size={14} />
                    Visit
                  </div>
                </motion.a>

                {project.github && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-lg text-sm font-semibold text-center transition-all ${
                      isDark
                        ? 'bg-slate-700/60 border border-slate-600 text-slate-200 hover:bg-slate-600/60'
                        : 'bg-gray-200/60 border border-gray-300 text-gray-700 hover:bg-gray-300/60'
                    }`}
                  >
                    <Github size={14} />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

// Bottom Navigation Bar
interface BottomNavProps {
  isDark: boolean;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ isDark, activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed bottom-0 left-0 right-0 z-50 border-t ${
        isDark
          ? 'bg-slate-900 border-cyan-500/30'
          : 'bg-white border-gray-300'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-around">
          {tabs.map(({ id, label, icon: Icon }) => (
            <motion.button
              key={id}
              onClick={() => onTabChange(id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`py-3 px-5 flex flex-col items-center gap-1 transition-colors ${
                activeTab === id
                  ? isDark
                    ? 'text-cyan-400'
                    : 'text-blue-600'
                  : isDark
                    ? 'text-slate-400 hover:text-cyan-300'
                    : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Icon size={20} />
              <span className="text-xs font-medium hidden sm:block">{label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

// Social Links Footer
interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    className={`pb-24 pt-12 px-4 ${isDark ? 'bg-slate-950' : 'bg-gray-50'}`}
  >
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        className="mb-8"
      >
        <h3
          className={`text-lg font-black mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}
          style={{ fontFamily: 'Space Mono, monospace' }}
        >
          LET'S CONNECT
        </h3>

        <div className="flex justify-center gap-6">
          {[
            { icon: Github, label: 'GitHub', url: '#' },
            { icon: Linkedin, label: 'LinkedIn', url: '#' },
            { icon: Mail, label: 'Email', url: 'mailto:contact@example.com' },
          ].map(({ icon: Icon, label, url }) => (
            <motion.a
              key={label}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full backdrop-blur-md border-2 transition-all ${
                isDark
                  ? 'bg-slate-800/60 border-cyan-500/30 text-cyan-400 hover:border-cyan-400 hover:bg-slate-800/80'
                  : 'bg-white/60 border-blue-300/30 text-blue-600 hover:border-blue-400 hover:bg-white/80'
              }`}
              title={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className={`text-xs ${isDark ? 'text-slate-500' : 'text-gray-500'}`}
      >
        © 2024 Arkar. All rights reserved.
      </motion.p>
    </div>
  </motion.footer>
);

// ============================================================================
// MAIN PORTFOLIO PAGE COMPONENT
// ============================================================================

export default function PortfolioPage() {
  const [isDark, setIsDark] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    // Check user's system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
  }, []);

  return (
    <div className={isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}>
      {/* Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Space Mono', monospace;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: ${isDark ? '#0f172a' : '#f9fafb'};
        }

        ::-webkit-scrollbar-thumb {
          background: ${isDark ? '#06b6d4' : '#3b82f6'};
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: ${isDark ? '#22d3ee' : '#2563eb'};
        }
      `}</style>

      <Header isDark={isDark} onThemeToggle={() => setIsDark(!isDark)} />

      <main>
        <HeroSection isDark={isDark} />
        <TechStack isDark={isDark} />
        <ProjectsShowcase isDark={isDark} />
        <Footer isDark={isDark} />
      </main>

      <BottomNav
        isDark={isDark}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  );
}
