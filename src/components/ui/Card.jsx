export default function Card({ children }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
      {children}
    </div>
  );
}
