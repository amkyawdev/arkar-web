'use client';

import { motion } from 'framer-motion';
import { Home, Briefcase, BarChart3, User } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface MobileNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'profile', label: 'Profile', icon: User },
];

export default function MobileNav({ activeTab, onTabChange }: MobileNavProps) {
  const { isDark } = useTheme();

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed bottom-0 left-0 right-0 z-50 backdrop-blur-lg border-t md:hidden ${
        isDark
          ? 'bg-slate-900/80 border-cyan-500/20'
          : 'bg-white/80 border-gray-300/20'
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
              className={`py-4 px-6 flex flex-col items-center gap-1 transition-all relative ${
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
              <span className="text-xs font-semibold">{label}</span>

              {activeTab === id && (
                <motion.div
                  layoutId="mobileNavIndicator"
                  className={`absolute bottom-0 left-0 right-0 h-1 ${
                    isDark ? 'bg-cyan-400' : 'bg-blue-600'
                  }`}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}