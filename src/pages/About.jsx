import {
  Building2,
  Crown,
  Layers,
  Rocket,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import PremiumButton from "../components/PremiumButton";

const pillars = [
  {
    icon: Layers,
    title: "Business Tools",
    text: "Ready-made software tools that help businesses improve operations, marketing, customer experience, and growth.",
  },
  {
    icon: Workflow,
    title: "Automation Systems",
    text: "Smart systems that reduce repetitive work, speed up follow-ups, and help teams stay organized.",
  },
  {
    icon: Crown,
    title: "Custom Software",
    text: "Premium dashboards, portals, apps, and internal tools built around specific business needs.",
  },
];

export default function About() {
  return (
    <section className="min-h-screen bg-[#fff7fb] px-4 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-pink-100 text-pink-600 font-black">
              <Sparkles size={17} />
              About Techuvo Labs
            </div>

            <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight text-slate-950">
              Premium software systems for modern businesses.
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-2xl leading-relaxed">
              Techuvo Labs builds business tools, AI systems, dashboards,
              portals, automations, and custom software designed to help
              companies operate smarter, move faster, and grow with more control.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <PremiumButton to="/tools">Explore Tools</PremiumButton>
              <PremiumButton to="/custom-tools" variant="light">
                Build Custom Tool
              </PremiumButton>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-white p-4 shadow-2xl border border-pink-100">
            <div className="rounded-[2rem] bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100 p-6 md:p-8">
              <div className="rounded-3xl bg-white/90 p-6 shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-slate-950 text-white flex items-center justify-center">
                  <Building2 />
                </div>

                <p className="mt-6 text-pink-600 font-black">
                  Techuvo Labs Ecosystem
                </p>

                <h2 className="mt-2 text-4xl font-black text-slate-950">
                  Tools, systems, and software designed around your workflow.
                </h2>

                <p className="mt-5 text-slate-600 leading-relaxed">
                  Techuvo Labs creates software systems that help businesses
                  simplify operations, improve customer experience, automate
                  workflows, and scale more efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.title}
                className="rounded-[2rem] bg-white p-6 shadow-xl border border-pink-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 text-white flex items-center justify-center">
                  <Icon />
                </div>

                <h3 className="mt-6 text-2xl font-black text-slate-950">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 rounded-[2.5rem] bg-slate-950 text-white p-6 md:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-pink-300 font-black">Our Mission</p>

              <h2 className="mt-4 text-4xl md:text-6xl font-black leading-tight">
                Make powerful business software feel simple.
              </h2>
            </div>

            <div className="space-y-4">
              {[
                "Help businesses access useful tools without confusion.",
                "Build custom systems around real business workflows.",
                "Create software that saves time and improves operations.",
                "Connect websites, automation, payments, and dashboards into one clean experience.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/10 border border-white/10 px-5 py-4 font-bold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
          <div className="rounded-[2rem] bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 p-6 md:p-8 shadow-xl border border-white">
            <Target className="text-pink-600" size={36} />

            <h2 className="mt-6 text-4xl font-black text-slate-950">
              Built for business owners.
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              The goal is not just to make software look good. The goal is to
              build tools that help businesses save time, close leads, collect
              payments, organize work, and create better customer experiences.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-6 md:p-8 shadow-xl border border-pink-100">
            <Rocket className="text-pink-600" size={36} />

            <h2 className="mt-6 text-4xl font-black text-slate-950">
              Designed to grow with you.
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Techuvo Labs is built to support tool subscriptions, client
              dashboards, payment integrations, custom builds, and future
              login-based software experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}