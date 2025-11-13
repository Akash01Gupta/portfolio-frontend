import React, { useState, useContext } from 'react';
import API from './api';
import { AuthContext } from './AuthContext';

export default function Login({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const { login } = useContext(AuthContext);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/admin/auth/login', { email, password });
      const { token } = res.data;
      login(token);
      onSuccess?.();
    } catch (e) {
      setErr(e.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white/5 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      <form onSubmit={submit} className="space-y-4">
        <input className="w-full p-3 rounded bg-transparent border border-gray-700" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full p-3 rounded bg-transparent border border-gray-700" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="w-full bg-blue-600 py-3 rounded">Login</button>
        {err && <div className="text-red-400 text-sm">{err}</div>}
      </form>
    </div>
  );
}
