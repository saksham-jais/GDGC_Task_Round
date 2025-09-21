import React from 'react';

export default function FeatureSection() {
  return (
    <section className="max-w-7xl mx-auto p-8 text-center space-y-10">
      <h2 className="text-4xl font-extrabold text-green-900 mb-8">Get Started in 3 Easy Steps</h2>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="bg-white/50 rounded-xl p-6 shadow-lg backdrop-blur-lg">
          <h3 className="text-xl font-semibold mb-2">Sign Up & Connect Your Tools</h3>
          <p>Connect Google, Microsoft, Slack, and more to automate workflows seamlessly.</p>
        </div>
        <div className="bg-white/50 rounded-xl p-6 shadow-lg backdrop-blur-lg">
          <h3 className="text-xl font-semibold mb-2">Customize Workflows with AI</h3>
          <p>Use intuitive AI-driven customization to tailor workflows to your business needs.</p>
        </div>
        <div className="bg-white/50 rounded-xl p-6 shadow-lg backdrop-blur-lg">
          <h3 className="text-xl font-semibold mb-2">Launch & Monitor Results</h3>
          <p>Automate tasks and monitor performance with real-time analytics dashboards.</p>
        </div>
      </div>
    </section>
  );
}
