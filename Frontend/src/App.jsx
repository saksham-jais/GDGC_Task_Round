import React, { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './pages/Dashboard';
import './app.css'

export default function App() {
  const [token, setToken] = useState('');
  const [hasAccount, setHasAccount] = useState(true);

  if (!token) {
    return (
<div className="bg-red-500 text-white p-10 text-4xl">
  Tailwind Test
</div>
    );
  }

  return <Dashboard token={token} />;
}
