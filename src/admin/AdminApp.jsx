import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import Dashboard from './Dashboard';
import ProjectsAdmin from './ProjectsAdmin';
import ProjectForm from './ProjectForm';
import AboutAdmin from './AboutAdmin';
import MessagesAdmin from './MessagesAdmin';

export default function AdminApp(){
  return (
    <AuthProvider>
      <div className="min-h-screen bg-[#020617] text-white">
        <nav className="p-4 border-b border-white/5 flex justify-between">
          <Link to="/admin" className="font-bold">Admin</Link>
          <div>
            <a href="/" className="text-sm text-gray-400 mr-4">View site</a>
          </div>
        </nav>
        <Routes>
          <Route path="login" element={<Login onSuccess={() => window.location.href = '/admin'} />} />
          <Route path="/" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path="projects" element={<PrivateRoute><ProjectsAdmin/></PrivateRoute>} />
          <Route path="projects/new" element={<PrivateRoute><ProjectForm/></PrivateRoute>} />
          <Route path="projects/:id/edit" element={<PrivateRoute><ProjectForm/></PrivateRoute>} />
          <Route path="about" element={<PrivateRoute><AboutAdmin/></PrivateRoute>} />
          <Route path="messages" element={<PrivateRoute><MessagesAdmin/></PrivateRoute>} />
        </Routes>
      </div>
    </AuthProvider>
  );
}
