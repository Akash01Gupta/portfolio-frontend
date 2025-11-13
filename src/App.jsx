import { useEffect, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { initScrollAnimations } from "./animations/scrollAnimations";

// Lazy load pages (automatically code-split by Vite)
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const GitHubProjects = lazy(() => import("./pages/GitHubProjects"));
const ContactSection = lazy(() => import("./pages/ContactSection"));

function App() {
  useEffect(() => {
    // Initialize scroll-based animations on mount
    initScrollAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-x-hidden">
      <Layout>
        {/* Suspense fallback while components load */}
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<GitHubProjects />} />
            <Route path="/contact" element={<ContactSection />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
