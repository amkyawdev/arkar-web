'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import GlassCard from '@/components/ui/GlassCard';

const INITIAL_PROJECTS = [
  {
    id: '1',
    title: 'ARKAR - AI Portfolio Platform',
    description: 'Full-stack personal portfolio platform with AI-powered analytics',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
    tools: ['Next.js', 'FastAPI', 'Supabase'],
    link: 'https://arkar.dev',
    github: 'https://github.com/yourname/arkar',
  },
  {
    id: '2',
    title: 'Neural Design System',
    description: 'Open-source design system with 50+ reusable components',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
    tools: ['React', 'Tailwind CSS', 'Storybook'],
    link: '#',
    github: 'https://github.com/yourname/neural-ds',
  },
];

export default function DashboardContent() {
  const { isDark } = useTheme();
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleDelete = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-950' : 'bg-gray-50'} pb-20`}>
      <header
        className={`sticky top-0 z-40 backdrop-blur-md border-b ${
          isDark ? 'bg-slate-900/40 border-cyan-500/20' : 'bg-white/40 border-gray-300/20'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1
            className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            Dashboard
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAddModal(true)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold ${
              isDark
                ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300'
                : 'bg-blue-500/20 border border-blue-400 text-blue-600'
            }`}
          >
            <Plus size={18} />
            Add Project
          </motion.button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <h2
          className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}
        >
          Your Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <GlassCard key={project.id} className="p-4">
              <div className="space-y-4">
                <div className="w-full h-40 rounded-lg overflow-hidden bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3
                    className={`font-semibold mb-2 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm mb-3 ${
                      isDark ? 'text-slate-400' : 'text-gray-600'
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className={`px-2 py-1 text-xs rounded ${
                          isDark
                            ? 'bg-cyan-500/20 text-cyan-300'
                            : 'bg-blue-500/20 text-blue-600'
                        }`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 py-2 rounded text-sm font-medium flex items-center justify-center gap-1 ${
                        isDark
                          ? 'bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30'
                          : 'bg-blue-500/20 text-blue-600 hover:bg-blue-500/30'
                      }`}
                    >
                      <Edit size={14} />
                      Edit
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDelete(project.id)}
                      className={`px-3 py-2 rounded text-sm font-medium ${
                        isDark
                          ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                          : 'bg-red-500/20 text-red-600 hover:bg-red-500/30'
                      }`}
                    >
                      <Trash2 size={14} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </main>
    </div>
  );
}