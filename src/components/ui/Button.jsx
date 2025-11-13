export default function Button({ href, children }) {
  return (
    <a
      href={href}
      className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-500 hover:to-purple-600 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition-all duration-300"
    >
      {children}
    </a>
  );
}
