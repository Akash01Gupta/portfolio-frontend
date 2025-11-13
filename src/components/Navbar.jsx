import { motion } from "framer-motion";

export default function Navbar() {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl px-8 py-3 flex items-center gap-8 shadow-lg z-50"
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-gray-200 hover:text-cyan-400 transition-colors"
        >
          {link.label}
        </a>
      ))}
    </motion.nav>
  );
}
