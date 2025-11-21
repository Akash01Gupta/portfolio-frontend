// src/admin/ProjectsAdmin.jsx
import React, { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState([]);

  const fetch = async () => {
    const res = await API.get("/admin/projects");
    setProjects(res.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  const del = async (id) => {
    if (!confirm("Delete this project?")) return;
    await API.delete(`/admin/projects/${id}`);
    fetch();
  };

  return (
    <div className="p-6 text-white">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Projects</h2>
        <Link
          to="/admin/projects/new"
          className="px-4 py-2 bg-blue-600 rounded-lg"
        >
          + New Project
        </Link>
      </div>

      <div className="space-y-4">
        {projects.map((p) => (
          <div
            key={p._id}
            className="bg-white/5 p-4 rounded-xl flex justify-between items-center border border-white/10"
          >
            <div>
              <div className="text-lg font-semibold">{p.title}</div>
              <div className="text-gray-400 text-sm">
                {p.description?.slice(0, 120)}...
              </div>
            </div>

            <div className="flex gap-3">
              <Link
                to={`/admin/projects/${p._id}/edit`}
                className="px-4 py-1 border rounded-lg border-blue-500"
              >
                Edit
              </Link>
              <button
                onClick={() => del(p._id)}
                className="px-4 py-1 bg-red-600 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
