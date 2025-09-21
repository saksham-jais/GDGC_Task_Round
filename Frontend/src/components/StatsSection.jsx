import React, { useState } from 'react';
import GlassCard from './GlassCard';

export default function StatsSection({ stats, loading }) {
  const [filter, setFilter] = useState('');
  const statEntries = Object.entries(stats);

  const filtered = statEntries.filter(([key]) =>
    key.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto p-8">
      <input
        type="text"
        placeholder="Filter stats..."
        className="w-full mb-6 border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {loading ? (
        <p className="text-center text-green-700">Loading...</p>
      ) : (
        <div className="grid md:grid-cols-4 gap-8">
          {filtered.length === 0 ? (
            <p>No stats found matching filter.</p>
          ) : (
            filtered.map(([key, value]) => (
              <GlassCard key={key} className="animate-fadeIn">
                <div className="text-5xl font-bold">{value}</div>
                <div className="text-green-700 mt-2 capitalize">
                  {key.replace(/([A-Z])/g, ' $1')}
                </div>
              </GlassCard>
            ))
          )}
        </div>
      )}
    </section>
  );
}
