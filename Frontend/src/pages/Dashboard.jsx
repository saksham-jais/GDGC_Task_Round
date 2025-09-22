import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import FeatureSection from '../components/FeatureSection';

export default function Dashboard({ token, username, logout }) {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:4000/api/stats', {
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
      <HeroSection logout={logout} username={username} />
      <FeatureSection />
      <StatsSection stats={stats} loading={loading} />
    </div>
  );
}
