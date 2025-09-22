import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr('');
    try {
      const res = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok) onLogin(data.token);
      else setErr(data.error || 'Invalid credentials');
    } catch (error) {
      setErr('Network error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-24 p-8 bg-white/90 rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold mb-6 text-green-900">Login</h2>
      <input 
        value={username} 
        onChange={e => setUsername(e.target.value)} 
        placeholder="Username" 
        required 
        className="w-full border border-green-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" 
      />
      <input 
        type="password" 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
        placeholder="Password" 
        required 
        className="w-full border border-green-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" 
      />
      {err && <p className="text-red-600">{err}</p>}
      <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition">
        Login
      </button>
    </form>
  );
}
