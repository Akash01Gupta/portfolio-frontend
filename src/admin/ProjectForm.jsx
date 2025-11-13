import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from './api';

export default function ProjectForm() {
  const { id } = useParams();
  const nav = useNavigate();
  const [form, setForm] = useState({ title: '', description: '', tags: '', homepage:'', repo:'', image:'' });

  useEffect(()=>{
    if (!id) return;
    API.get(`/admin/projects/${id}`).then(res => {
      const p = res.data;
      setForm({ ...p, tags: p.tags?.join(', ') || '' });
    });
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    const payload = { ...form, tags: form.tags.split(',').map(t=>t.trim()).filter(Boolean) };
    if (id) await API.put(`/admin/projects/${id}`, payload);
    else await API.post('/admin/projects', payload);
    nav('/admin/projects');
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">{id ? 'Edit' : 'New'} Project</h2>
      <form onSubmit={submit} className="space-y-3">
        <input value={form.title} onChange={e=>setForm({...form,title:e.target.value})} className="w-full p-3 rounded bg-transparent border" placeholder="Title" />
        <textarea value={form.description} onChange={e=>setForm({...form,description:e.target.value})} className="w-full p-3 rounded bg-transparent border" rows={5} placeholder="Description" />
        <input value={form.tags} onChange={e=>setForm({...form,tags:e.target.value})} className="w-full p-3 rounded bg-transparent border" placeholder="tags, comma separated" />
        <input value={form.homepage} onChange={e=>setForm({...form,homepage:e.target.value})} className="w-full p-3 rounded bg-transparent border" placeholder="Homepage URL" />
        <input value={form.repo} onChange={e=>setForm({...form,repo:e.target.value})} className="w-full p-3 rounded bg-transparent border" placeholder="Repo URL" />
        <input value={form.image} onChange={e=>setForm({...form,image:e.target.value})} className="w-full p-3 rounded bg-transparent border" placeholder="Image URL" />
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-600 rounded">Save</button>
        </div>
      </form>
    </div>
  );
}
