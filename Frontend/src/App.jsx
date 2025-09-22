import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './pages/Dashboard';

export default function App() {
  const [token, setToken] = useState('');
  const [hasAccount, setHasAccount] = useState(true);

  if (!token) {
    return hasAccount ? (
      <>
        <Login onLogin={setToken} />
        <div className="text-center mt-6">
          New user?{' '}
          <button className="text-green-600 underline" onClick={() => setHasAccount(false)}>
            Register here
          </button>
        </div>
      </>
    ) : (
      <>
        <Signup onSignup={() => setHasAccount(true)} />
        <div className="text-center mt-6">
          Already have an account?{' '}
          <button className="text-green-600 underline" onClick={() => setHasAccount(true)}>
            Login here
          </button>
        </div>
      </>
    );
  }

  return <Dashboard token={token} />;
}
