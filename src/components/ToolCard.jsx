import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function ToolCard({ tool }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white border border-pink-100 shadow-lg hover:shadow-2xl transition-all duration-300 p-6">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/70 via-purple-100/40 to-cyan-100/60 opacity-0 group-hover:opacity-100 transition" />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-bold">
            <Sparkles size={14} />
            {tool.category}
          </span>

          <span className="text-xs font-bold text-slate-500">
            {tool.status}
          </span>
        </div>

        <h3 className="mt-6 text-2xl font-black text-slate-950">
          {tool.name}
        </h3>

        <p className="mt-3 text-slate-600 leading-relaxed">
          {tool.description}
        </p>

        <div className="mt-6 flex items-center justify-between gap-4">
          <span className="font-black text-slate-950">
            {tool.price}
          </span>

          <Link
            to={tool.link}
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 text-white px-5 py-3 font-semibold hover:bg-pink-500 transition"
          >
            Proceed
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}