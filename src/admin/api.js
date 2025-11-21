import axios from "axios";

// Dynamically choose API base URL
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";


const API = axios.create({
  baseURL: API_BASE_URL,
});

// Add token if exists
API.interceptors.request.use((config) => {
  const token =
    localStorage.getItem("admin_token") ||
    localStorage.getItem("user_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Handle 401 Unauthorized
API.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("admin_token");
      localStorage.removeItem("user_token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default API;
