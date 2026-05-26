import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Cpu,
  LayoutDashboard,
  Play,
  Sparkles,
  Wand2,
} from "lucide-react";
import PremiumButton from "../components/PremiumButton";

const buildTypes = [
  {
    icon: LayoutDashboard,
    title: "Business Dashboards",
    text: "Portals for leads, projects, analytics, payments, client management, and operations.",
  },
  {
    icon: Bot,
    title: "AI Assistants",
    text: "AI chat systems, customer support, lead response, automation, and smart workflows.",
  },
  {
    icon: Cpu,
    title: "Automation Systems",
    text: "Automate follow-ups, scheduling, reminders, forms, emails, and repetitive tasks.",
  },
  {
    icon: Code2,
    title: "Custom Web Apps",
    text: "Build SaaS products, internal systems, calculators, portals, and premium business tools.",
  },
];

const budgets = [
  "$500 - $1,500",
  "$1,500 - $5,000",
  "$5,000 - $15,000",
  "$15,000+",
];

export default function CustomTools() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    businessType: "",
    toolType: "",
    budget: "",
    timeline: "",
    idea: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Custom tool request:", formData);

    // Ready for:
    // Formspree
    // Airtable
    // Backend API
    // Google Sheets
    // Stripe
    // CRM integrations
  };

  return (
    <section className="min-h-screen bg-[#fff7fb] overflow-hidden">
      {/* HERO */}
      <div className="relative px-4 py-16 md:py-24">
        <div className="absolute -top-32 right-0 w-96 h-96 bg-pink-300/40 rounded-full blur-3xl" />
        <div className="absolute top-60 -left-32 w-96 h-96 bg-cyan-300/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-center">
          {/* LEFT SIDE */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-pink-100 text-pink-600 font-black">
              <Sparkles size={17} />
              Custom Software Builds
            </div>

            <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight text-slate-950">
              Turn your business idea into a real tool.
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
              Request dashboards, AI tools, automation systems,
              portals, internal software, custom apps,
              and digital infrastructure designed specifically for your business.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <PremiumButton to="/tools">
                Browse Tools
              </PremiumButton>

              <PremiumButton to="/pricing" variant="light">
                View Pricing
              </PremiumButton>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 max-w-xl">
              {["Plan", "Design", "Build", "Launch"].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl bg-white/80 border border-pink-100 p-4 shadow-sm"
                >
                  <CheckCircle2 className="text-pink-500" />

                  <p className="mt-3 font-black text-slate-950">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 25, rotate: 1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2.5rem] bg-white p-4 shadow-2xl border border-pink-100"
          >
            <div className="rounded-[2rem] bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100 p-4 md:p-6">
              <div className="rounded-3xl bg-white/90 backdrop-blur-xl p-5 md:p-6 shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-black text-pink-600">
                      Custom Build Request
                    </p>

                    <h3 className="text-3xl md:text-4xl font-black mt-2 text-slate-950">
                      Tell us what to build.
                    </h3>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center">
                    <Wand2 />
                  </div>
                </div>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Your name"
                    className="rounded-2xl border border-pink-100 bg-white px-4 py-4 outline-none focus:border-pink-400"
                    required
                  />

                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    className="rounded-2xl border border-pink-100 bg-white px-4 py-4 outline-none focus:border-pink-400"
                    required
                  />

                  <input
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    type="text"
                    placeholder="Business name"
                    className="rounded-2xl border border-pink-100 bg-white px-4 py-4 outline-none focus:border-pink-400"
                  />

                  <input
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    type="text"
                    placeholder="Business type"
                    className="rounded-2xl border border-pink-100 bg-white px-4 py-4 outline-none focus:border-pink-400"
                  />

                  <select
                    name="toolType"
                    value={formData.toolType}
                    onChange={handleChange}
                    className="rounded-2xl border border-pink-100 bg-white px-4 py-4 outline-none focus:border-pink-400 text-slate-500"
                    required
                  >
                    <option value="">Tool type</option>
                    <option value="dashboard">Business Dashboard</option>
                    <option value="ai-assistant">AI Assistant</option>
                    <option value="automation">Automation System</option>
                    <option value="web-app">Custom Web App</option>
                    <option value="portal">Client Portal</option>
                    <option value="other">Other</option>
                  </select>

                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="rounded-2xl border border-pink-100 bg-white px-4 py-4 outline-none focus:border-pink-400 text-slate-500"
                  >
                    <option value="">Budget range</option>

                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>

                  <input
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    type="text"
                    placeholder="Timeline, example: 2-4 weeks"
                    className="sm:col-span-2 rounded-2xl border border-pink-100 bg-white px-4 py-4 outline-none focus:border-pink-400"
                  />

                  <textarea
                    name="idea"
                    value={formData.idea}
                    onChange={handleChange}
                    placeholder="Describe the tool, workflow, automation, dashboard, or system you want built..."
                    rows="5"
                    className="sm:col-span-2 rounded-2xl border border-pink-100 bg-white px-4 py-4 outline-none focus:border-pink-400 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-2xl bg-slate-950 text-white px-5 py-4 font-black flex items-center justify-center gap-2 hover:bg-pink-500 hover:scale-[1.01] transition"
                >
                  Send Build Request
                  <ArrowRight size={18} />
                </button>

                <p className="mt-4 text-center text-xs text-slate-500 font-semibold">
                  Your request will be reviewed and prepared for the next step.
                </p>
              </div>
            </div>
          </motion.form>
        </div>
      </div>

      {/* VIDEO SECTION */}
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-gradient-to-br from-orange-100 via-pink-100 to-cyan-100 p-5 md:p-10 shadow-2xl border border-white">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 text-pink-600 font-black shadow-sm">
                <Play size={17} />
                Custom Tool Explainer
              </div>

              <h2 className="mt-6 text-4xl md:text-6xl font-black text-slate-950 leading-tight">
                See how a custom tool can simplify your business.
              </h2>

              <p className="mt-5 text-slate-600 text-lg leading-relaxed">
                This section is ready for an animated explainer video showing how
                Techuvo Labs transforms workflows into clean dashboards,
                automations, portals, and custom software systems.
              </p>
            </div>

            <div className="aspect-video rounded-[2rem] bg-white/85 border border-white shadow-xl flex items-center justify-center overflow-hidden">
              <div className="text-center px-6">
                <div className="mx-auto w-20 h-20 rounded-full bg-slate-950 text-white flex items-center justify-center shadow-xl">
                  <Play fill="white" />
                </div>

                <p className="mt-5 font-black text-slate-950">
                  Custom Tools Video Coming Soon
                </p>

                <p className="text-sm text-slate-500 mt-2">
                  Explainer video will be added here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BUILD TYPES */}
      <div className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-pink-500 font-black uppercase tracking-[0.2em] text-xs">
              What We Can Build
            </p>

            <h2 className="mt-4 text-4xl md:text-6xl font-black text-slate-950">
              Premium tools built around real business workflows.
            </h2>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {buildTypes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] bg-white border border-pink-100 p-6 shadow-lg hover:shadow-2xl transition"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 text-white flex items-center justify-center">
                    <Icon />
                  </div>

                  <h3 className="mt-6 text-xl font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <div className="px-4 py-16 pb-24">
        <div className="max-w-7xl mx-auto rounded-[2.5rem] bg-slate-950 text-white p-6 md:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-pink-300 font-black">
                Techuvo Labs Process
              </p>

              <h2 className="mt-4 text-4xl md:text-6xl font-black leading-tight">
                From idea to working software.
              </h2>
            </div>

            <div className="grid gap-4">
              {[
                "1. Submit your business request",
                "2. System planning and architecture",
                "3. Frontend and backend development",
                "4. Deployment, dashboard, and integrations",
              ].map((step) => (
                <div
                  key={step}
                  className="rounded-2xl bg-white/10 border border-white/10 px-5 py-4 font-bold"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}