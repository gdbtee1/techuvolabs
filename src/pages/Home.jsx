import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Crown, Layers, Rocket, Sparkles } from "lucide-react";

import VideoIntro from "../components/VideoIntro";
import DashboardPreview from "../components/DashboardPreview";
import ToolCard from "../components/ToolCard";
import PremiumButton from "../components/PremiumButton";
import { tools } from "../data/tools";

const featuredTools = tools.slice(0, 3);

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#fff7fb]">

      {/* HERO */}
      <section className="relative px-4 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-300/40 rounded-full blur-3xl" />
        <div className="absolute top-20 -right-32 w-96 h-96 bg-cyan-300/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-xl border border-pink-100 shadow-sm text-pink-600 font-black">
              <Sparkles size={17} />
              Co-division of Techuvo
            </div>

            <h1 className="mt-7 text-5xl sm:text-6xl md:text-8xl font-black leading-[0.95] tracking-tight text-slate-950">
              Build. Buy.
              <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Automate.
              </span>
            </h1>

            <p className="mt-7 text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Techuvo Labs creates premium business tools, AI systems,
              automation software, dashboards, and custom digital products
              businesses can use to grow faster.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <PremiumButton to="/tools">
                Explore Tools
              </PremiumButton>

              <PremiumButton to="/custom-tools" variant="light">
                Request Custom Tool
              </PremiumButton>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
              {[
                ["12+", "Starter Tools"],
                ["AI", "Powered Systems"],
                ["24/7", "Digital Assets"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl bg-white/80 backdrop-blur-xl border border-pink-100 p-4 shadow-sm"
                >
                  <p className="text-2xl font-black text-slate-950">{value}</p>
                  <p className="text-xs sm:text-sm text-slate-500 font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* HERO VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] bg-white p-4 shadow-2xl border border-pink-100">
              <div className="rounded-[2rem] bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100 p-5 md:p-7 min-h-[420px]">
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-black text-pink-600">LABS OS</p>
                    <h3 className="text-2xl font-black mt-1">Business Tool Hub</h3>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center">
                    <Crown />
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  {[
                    ["AI Website Auditor", "SEO + conversion scan", "Beta"],
                    ["Techuvo Flow", "Automated lead follow-up", "Soon"],
                    ["Client Portal", "Manage tools + billing", "Private"],
                  ].map(([name, desc, tag]) => (
                    <div
                      key={name}
                      className="rounded-3xl bg-white/80 backdrop-blur-xl p-4 flex items-center justify-between gap-4 shadow-sm"
                    >
                      <div>
                        <p className="font-black text-slate-950">{name}</p>
                        <p className="text-sm text-slate-500">{desc}</p>
                      </div>

                      <span className="text-xs font-black text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl bg-slate-950 text-white p-5">
                  <p className="text-sm text-pink-300 font-bold">Revenue System</p>
                  <p className="mt-2 text-3xl font-black">$MRR</p>
                  <p className="mt-2 text-sm text-white/70">
                    Tools, subscriptions, custom builds, and business software assets.
                  </p>
                </div>

              </div>
            </div>

            <div className="absolute -bottom-6 -left-5 bg-white rounded-3xl shadow-xl border border-pink-100 p-5 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center">
                  <Rocket />
                </div>
                <div>
                  <p className="font-black">Scalable Assets</p>
                  <p className="text-sm text-slate-500">Built by Techuvo Labs</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* VIDEO INTRO */}
      <VideoIntro />

      {/* FEATURED TOOLS */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <p className="text-pink-500 font-black uppercase tracking-[0.2em] text-xs">
                Featured Tools
              </p>

              <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tight text-slate-950">
                Start with the tools businesses need first.
              </h2>
            </div>

            <Link
              to="/tools"
              className="inline-flex items-center gap-2 font-black text-pink-600"
            >
              View all tools
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-stretch">
            
            <div className="rounded-[2rem] bg-slate-950 text-white p-8 md:p-10 shadow-2xl">
              <p className="text-pink-300 font-black">How Labs Works</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-black leading-tight">
                From website service to software ecosystem.
              </h2>
              <p className="mt-5 text-white/70 leading-relaxed">
                Techuvo starts by solving business problems. Techuvo Labs turns
                repeated problems into tools, dashboards, automations, and products.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  icon: Layers,
                  title: "Discover",
                  text: "Find business problems from real clients and market demand.",
                },
                {
                  icon: Sparkles,
                  title: "Build",
                  text: "Create tools, automations, dashboards, and AI systems.",
                },
                {
                  icon: Rocket,
                  title: "Scale",
                  text: "Sell tools through the site, portal, and subscriptions.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[2rem] bg-white border border-pink-100 p-6 shadow-lg"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 text-white flex items-center justify-center">
                      <Icon />
                    </div>

                    <h3 className="mt-6 text-2xl font-black">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      <DashboardPreview />

      {/* FINAL CTA */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[2.5rem] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-1 shadow-2xl">
            <div className="rounded-[2.3rem] bg-white px-6 py-14 md:p-16 text-center">
              <h2 className="text-4xl md:text-6xl font-black text-slate-950">
                Build your business like a tech company.
              </h2>

              <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
                Buy ready-made tools, request custom software, or bring your
                business into the Techuvo Labs ecosystem.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <PremiumButton to="/tools">
                  Browse Tools
                </PremiumButton>

                <PremiumButton to="/custom-tools" variant="light">
                  Custom Build
                </PremiumButton>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}