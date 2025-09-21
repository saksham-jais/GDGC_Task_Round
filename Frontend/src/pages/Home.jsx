import React from 'react';
import HeroSection from '../components/HeroSection';

export default function Home({ onLogin, onSignup, hasAccount, setHasAccount }) {
  return (
    <main>
      <HeroSection />
      {/* Render login or signup form below with toggle */}
      {hasAccount ? onLogin() : onSignup()}
      <div className="text-center mt-4">
        {hasAccount ? (
          <>
            New user?{' '}
            <button onClick={() => setHasAccount(false)} className="text-green-500 underline">
              Register here
            </button>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <button onClick={() => setHasAccount(true)} className="text-green-500 underline">
              Login here
            </button>
          </>
        )}
      </div>
    </main>
  );
}
