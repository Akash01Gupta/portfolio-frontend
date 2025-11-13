import React, { useEffect, useState } from 'react';
import API from './api';
import { Link } from 'react-router-dom';

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);
    const res = await API.get('/admin/projects');
    setProjects(res.data);
    setLoading(false);
  };

  useEffect(()=>{ fetch(); }, []);

  const del = async (id) => {
    if (!confirm('Delete?')) return;
    await API.delete(`/admin/projects/${id}`);
    fetch();
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Projects</h2>
        <Link to="/admin/projects/new" className="px-4 py-2 bg-blue-600 rounded">New Project</Link>
      </div>
      {loading ? <div>Loading...</div> : (
        <div className="grid gap-4">
          {projects.map(p=>(
            <div key={p._id} className="p-4 bg-white/5 rounded flex justify-between items-center">
              <div>
                <div className="font-semibold">{p.title}</div>
                <div className="text-sm text-gray-300">{p.description?.slice(0,100)}</div>
              </div>
              <div className="flex gap-2">
                <Link to={`/admin/projects/${p._id}/edit`} className="px-3 py-1 border rounded">Edit</Link>
                <button onClick={()=>del(p._id)} className="px-3 py-1 bg-red-600 rounded">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
