import React, { useEffect, useState } from 'react';
import API from '../services/api';

export default function MessagesAdmin() {
  const [msgs, setMsgs] = useState([]);
  useEffect(()=>{ API.get('/admin/messages').then(r=>setMsgs(r.data)); }, []);
  const markRead = async (id) => {
    await API.put(`/admin/messages/${id}/read`);
    setMsgs(ms=>ms.map(m=> m._id===id ? {...m,read:true} : m));
  };
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Contact Messages</h2>
      <div className="space-y-3">
        {msgs.map(m=>(
          <div key={m._id} className="p-4 bg-white/5 rounded">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-semibold">{m.name} • {m.email}</div>
                <div className="text-sm text-gray-300">{new Date(m.createdAt).toLocaleString()}</div>
              </div>
              <div>
                {!m.read && <button onClick={()=>markRead(m._id)} className="px-3 py-1 bg-blue-600 rounded">Mark read</button>}
              </div>
            </div>
            <p className="mt-2 text-gray-300">{m.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
