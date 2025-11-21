// src/admin/ProjectForm.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from '../services/api';

export default function ProjectForm() {
  const { id } = useParams();
  const nav = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    tags: "",
    homepage: "",
    repo: "",
    image: "",
  });

  useEffect(() => {
    if (!id) return;
    API.get(`/admin/projects/${id}`).then((res) => {
      const p = res.data;
      setForm({
        ...p,
        tags: p.tags?.join(", ") || "",
      });
    });
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      tags: form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };

    if (id) await API.put(`/admin/projects/${id}`, payload);
    else await API.post("/admin/projects", payload);

    nav("/admin/projects");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-6">
        {id ? "Edit Project" : "Create New Project"}
      </h2>

      <form onSubmit={submit} className="space-y-4">
        {["title", "homepage", "repo", "image"].map((key) => (
          <input
            key={key}
            value={form[key]}
            onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            className="w-full p-3 rounded bg-black/30 border border-gray-700"
            placeholder={key.toUpperCase()}
          />
        ))}

        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full p-3 rounded bg-black/30 border border-gray-700"
          rows={5}
          placeholder="Description"
        />

        <input
          value={form.tags}
          onChange={(e) => setForm({ ...form, tags: e.target.value })}
          className="w-full p-3 rounded bg-black/30 border border-gray-700"
          placeholder="tags, comma separated"
        />

        <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold">
          Save Project
        </button>
      </form>
    </div>
  );
}
