import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PremiumButton({ to = "/", children, variant = "dark" }) {
  const styles =
    variant === "light"
      ? "bg-white text-slate-950 border border-pink-100 hover:border-pink-300"
      : "bg-slate-950 text-white hover:bg-pink-500";

  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition ${styles}`}
    >
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}