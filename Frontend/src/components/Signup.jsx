import React, { useState } from 'react';

export default function Signup({ onSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr('');
    setSuccess('');
    try {
      const res = await fetch('http://localhost:4000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (res.ok) {
        setSuccess('Signup successful! You can login now.');
        onSignup(); // switch to login
      } else {
        const data = await res.json();
        setErr(data.error || 'Signup failed');
      }
    } catch {
      setErr('Network error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 p-8 bg-white/90 rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold mb-6 text-green-900">Signup</h2>
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
      {success && <p className="text-green-600">{success}</p>}
      <button className="w-full bg-green-400 text-white py-3 rounded-lg hover:bg-green-500 transition">Sign Up</button>
    </form>
  );
}
