'use client';

import dynamic from 'next/dynamic';

const DashboardPage = dynamic(() => import('@/components/DashboardContent'), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-slate-950 text-white p-8">Loading...</div>,
});

export default function Dashboard() {
  return <DashboardPage />;
}