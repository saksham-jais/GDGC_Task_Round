import React from 'react';

export default function GlassCard({ children, className }) {
  return (
    <div
      className={`rounded-2xl bg-white/20 shadow-2xl ring-1 ring-white/40 backdrop-blur-lg p-6 transition-transform duration-500 hover:scale-105 relative overflow-hidden ${className}`}
    >
      <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-tr from-white/80 to-transparent opacity-30 pointer-events-none rounded-t-2xl" />
      {children}
    </div>
  );
}
