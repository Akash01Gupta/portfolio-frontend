import React, { useEffect, useState } from 'react';
import API from '../services/api';

export default function AboutAdmin() {
  const [data, setData] = useState({ headline:'', bio:'', skills: '' });

  useEffect(()=> {
    API.get('/admin/about').then(r=> {
      const b = r.data || {};
      setData({ headline:b.headline||'', bio:b.bio||'', skills: (b.skills||[]).join(', ') });
    });
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    const payload = { headline: data.headline, bio: data.bio, skills: data.skills.split(',').map(s=>s.trim()).filter(Boolean) };
    await API.post('/admin/about', payload);
    alert('Saved');
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit About</h2>
      <form onSubmit={submit} className="space-y-3">
        <input className="w-full p-3 rounded bg-transparent border" value={data.headline} onChange={e=>setData({...data,headline:e.target.value})} placeholder="Headline" />
        <textarea className="w-full p-3 rounded bg-transparent border" value={data.bio} onChange={e=>setData({...data,bio:e.target.value})} rows={6} placeholder="Bio" />
        <input className="w-full p-3 rounded bg-transparent border" value={data.skills} onChange={e=>setData({...data,skills:e.target.value})} placeholder="skills comma separated" />
        <button className="px-4 py-2 bg-blue-600 rounded">Save</button>
      </form>
    </div>
  );
}
