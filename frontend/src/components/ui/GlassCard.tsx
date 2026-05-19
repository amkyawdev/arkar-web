'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { useTheme } from '../ThemeProvider';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  hoverEffect = true,
  className = '',
  ...props
}: GlassCardProps) {
  const { isDark } = useTheme();

  return (
    <motion.div
      whileHover={hoverEffect ? { scale: 1.02, y: -4 } : undefined}
      className={`rounded-xl backdrop-blur-md border-2 transition-all ${
        isDark
          ? 'bg-slate-800/40 border-cyan-500/30 hover:border-cyan-400'
          : 'bg-white/40 border-blue-300/30 hover:border-blue-400'
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}