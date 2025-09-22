import React from 'react';
import GlassCard from './GlassCard';

export default function HeroSection() {
  return (
    <>
          <header className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">Optivize AI</div>
        <nav className="space-x-6 text-green-800 font-medium">
          {["Product", "Features", "Pricing", "Solutions", "About Us"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="hover:text-green-600 transition"
              >
                {item}
              </a>
            )
          )}
        </nav>
        <button className="bg-green-400 px-6 py-2 rounded-full text-white font-semibold shadow-lg ring-2 ring-green-200 hover:bg-green-500 transition">
          Get Started &rarr;
        </button>
      </header>
          <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-white px-4 bg-[url('/bg-abstract.svg')] bg-no-repeat bg-right-bottom">
      <div className="max-w-3xl text-center z-10 animate-fadeIn">
        <h1 className="text-6xl font-extrabold text-green-900 mb-6">
          Supercharge Your Business with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-900">
            AI-Powered Automation
          </span>
        </h1>
        <p className="text-green-700 text-lg max-w-xl mx-auto mb-8">
          Our AI SaaS platform helps teams save time, cut costs, and unlock smarter decision-making—without complexity.
        </p>
        <div className="flex justify-center space-x-6">
          <button className="px-8 py-3 bg-green-500 rounded-xl shadow-lg text-white font-semibold ring-2 ring-green-300 hover:bg-green-600 transition animate-glow">
            Start Free Trial
          </button>
          <button className="px-8 py-3 bg-white/70 rounded-xl shadow ring-2 ring-green-300 text-green-900 hover:bg-white/90 backdrop-blur transition">
            Book a Demo
          </button>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 z-10 max-w-4xl w-full">
        <GlassCard>
          <div className="text-4xl font-bold text-green-900">12,500</div>
          <div className="text-green-700 mt-1">Daily AI Tasks Automated</div>
        </GlassCard>
        <GlassCard>
          <div className="text-4xl font-bold text-green-900">$480,000</div>
          <div className="text-green-700 mt-1">Cost Savings Generated</div>
        </GlassCard>
        <GlassCard>
          <div className="text-4xl font-bold text-green-900">150K+</div>
          <div className="text-green-700 mt-1">Global Users</div>
        </GlassCard>
      </div>
      <div className="absolute inset-0 pointer-events-none animate-glossyGlow"></div>
    </section>
    </>

  );
}
