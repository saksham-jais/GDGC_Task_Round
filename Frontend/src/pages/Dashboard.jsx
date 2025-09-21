import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import FeatureSection from '../components/FeatureSection'; // You can add a feature component like Automation steps

export default function Dashboard({ token }) {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('/api/stats', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [token]);

  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <StatsSection stats={stats} loading={loading} />
    </div>
  );
}
