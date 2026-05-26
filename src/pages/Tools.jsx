import { useState } from "react";
import { Search, SlidersHorizontal, Sparkles } from "lucide-react";
import ToolCard from "../components/ToolCard";
import { tools } from "../data/tools";

const categories = ["All", "AI", "Automation", "SEO", "Sales", "Custom"];

export default function Tools() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "All" ||
      tool.category.toLowerCase().includes(activeCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-cyan-50 px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_0.75fr] gap-8 items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-pink-100 text-pink-600 font-black">
              <Sparkles size={17} />
              Tool Marketplace
            </div>

            <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight text-slate-950">
              Pick a tool.
              <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Power up your business.
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-2xl">
              Explore ready-made AI tools, automation systems, dashboards,
              lead systems, SEO tools, and future Techuvo Labs software assets.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-5 shadow-xl border border-pink-100">
            <p className="font-black text-slate-950">Marketplace Status</p>

            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-pink-50 p-4">
                <p className="text-2xl font-black text-pink-600">
                  {filteredTools.length}
                </p>
                <p className="text-xs text-slate-500 font-bold">Showing</p>
              </div>

              <div className="rounded-2xl bg-purple-50 p-4">
                <p className="text-2xl font-black text-purple-600">Beta</p>
                <p className="text-xs text-slate-500 font-bold">Stage</p>
              </div>

              <div className="rounded-2xl bg-cyan-50 p-4">
                <p className="text-2xl font-black text-cyan-600">MRR</p>
                <p className="text-xs text-slate-500 font-bold">Ready</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] bg-white/80 backdrop-blur-xl p-4 shadow-lg border border-pink-100">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search tools, AI systems, dashboards..."
                className="w-full rounded-2xl border border-slate-200 bg-white px-12 py-4 outline-none focus:border-pink-400"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 rounded-full px-5 py-3 text-sm font-black transition ${
                    activeCategory === category
                      ? "bg-pink-500 text-white"
                      : "bg-pink-50 text-pink-600 hover:bg-pink-500 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <button className="rounded-2xl bg-slate-950 text-white px-5 py-4 font-black flex items-center justify-center gap-2">
              <SlidersHorizontal size={18} />
              Filters
            </button>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="mt-16 text-center rounded-[2rem] bg-white p-10 shadow-lg border border-pink-100">
            <p className="text-2xl font-black text-slate-950">
              No tools found.
            </p>
            <p className="mt-2 text-slate-500">
              Try searching another keyword or category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}