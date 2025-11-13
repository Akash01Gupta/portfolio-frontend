import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link to="/admin/projects" className="p-4 bg-white/5 rounded">Manage Projects</Link>
        <Link to="/admin/about" className="p-4 bg-white/5 rounded">Edit About / Skills</Link>
        <Link to="/admin/messages" className="p-4 bg-white/5 rounded">Contact Messages</Link>
      </div>
    </div>
  );
}
