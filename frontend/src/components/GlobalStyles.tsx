'use client';

import { useEffect } from 'react';

export default function GlobalStyles() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      ::-webkit-scrollbar { width: 8px; }
      ::-webkit-scrollbar-track { background: #0f172a; }
      ::-webkit-scrollbar-thumb { background: #06b6d4; border-radius: 4px; }
      ::-webkit-scrollbar-thumb:hover { background: #22d3ee; }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return null;
}