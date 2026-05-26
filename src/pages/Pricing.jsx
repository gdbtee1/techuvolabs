import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  ExternalLink,
  Lock,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import PremiumButton from "../components/PremiumButton";

const plans = [
  {
    name: "Starter Tool",
    price: "$29+",
    detail: "per month",
    text: "For businesses that want access to one simple tool or light automation.",
    paymentLink: "#",
    features: ["Single tool access", "Basic dashboard", "Email support", "Stripe link ready"],
  },
  {
    name: "Business Suite",
    price: "$99+",
    detail: "per month",
    text: "For businesses that want multiple tools, automations, and portal access.",
    paymentLink: "#",
    featured: true,
    features: ["Multiple tools", "Business portal", "Automation access", "Priority support"],
  },
  {
    name: "Custom Build",
    price: "Quote",
    detail: "project based",
    text: "For custom dashboards, portals, AI tools, automations, or web apps.",
    paymentLink: "/custom-tools",
    features: ["Custom planning", "Frontend build", "Backend ready", "Integration ready"],
  },
];

const paymentMethods = [
  "Card Payments",
  "Apple Pay",
  "Google Pay",
  "Payment Links",
  "Subscription Billing",
  "Invoice Payments",
];

export default function Pricing() {
  return (
    <section className="min-h-screen bg-[#fff7fb] px-4 py-14 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* HERO */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-pink-100 text-pink-600 font-black">
              <Sparkles size={17} />
              Pricing Portal
            </div>

            <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight text-slate-950">
              Select a plan and continue to checkout.
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-2xl">
              Choose tool subscriptions, business suites, or custom software builds.
              Payment buttons are ready for Stripe, invoices, or external checkout links.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <PremiumButton to="/tools">Browse Tools</PremiumButton>
              <PremiumButton to="/custom-tools" variant="light">
                Request Custom Build
              </PremiumButton>
            </div>
          </div>

          {/* PAYMENT PREVIEW */}
          <div className="rounded-[2.5rem] bg-white p-4 shadow-2xl border border-pink-100">
            <div className="rounded-[2rem] bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100 p-5 md:p-7">
              <div className="rounded-3xl bg-white/90 p-5 shadow-lg">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-pink-600 font-black">Payment System</p>
                    <h3 className="text-3xl font-black mt-2">Checkout Ready</h3>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-slate-950 text-white flex items-center justify-center">
                    <CreditCard />
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {paymentMethods.map((method) => (
                    <div
                      key={method}
                      className="flex items-center justify-between rounded-2xl bg-pink-50 px-4 py-4 border border-pink-100"
                    >
                      <span className="font-bold text-slate-700">{method}</span>
                      <CheckCircle2 className="text-pink-500" size={20} />
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-slate-950 text-white p-5">
                  <div className="flex items-center gap-3">
                    <Lock className="text-pink-300" />
                    <div>
                      <p className="font-black">Secure payments coming next</p>
                      <p className="text-sm text-white/60">
                        Add your Stripe links inside the plan data.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-center text-xs text-slate-500 font-semibold">
                  Ready for Stripe checkout, payment links, invoices, and subscriptions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PLANS */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[2rem] p-6 shadow-xl border transition ${
                plan.featured
                  ? "bg-slate-950 text-white border-slate-950 lg:scale-[1.03]"
                  : "bg-white text-slate-950 border-pink-100"
              }`}
            >
              {plan.featured && (
                <div className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-4 py-2 text-white font-black text-sm mb-5">
                  <Sparkles size={16} />
                  Most Flexible
                </div>
              )}

              <h2 className="text-3xl font-black">{plan.name}</h2>

              <div className="mt-5 flex items-end gap-2">
                <p className="text-5xl font-black">{plan.price}</p>
                <p className={plan.featured ? "text-white/60" : "text-slate-500"}>
                  {plan.detail}
                </p>
              </div>

              <p
                className={`mt-5 leading-relaxed ${
                  plan.featured ? "text-white/70" : "text-slate-600"
                }`}
              >
                {plan.text}
              </p>

              <div className="mt-7 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2
                      size={20}
                      className={plan.featured ? "text-pink-300" : "text-pink-500"}
                    />
                    <span className="font-bold">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={plan.paymentLink}
                className={`mt-8 w-full rounded-2xl px-5 py-4 font-black transition flex items-center justify-center gap-2 ${
                  plan.featured
                    ? "bg-white text-slate-950 hover:bg-pink-100"
                    : "bg-slate-950 text-white hover:bg-pink-500"
                }`}
              >
                {plan.name === "Custom Build" ? "Start Request" : "Continue to Pay"}
                {plan.paymentLink === "#" ? <ExternalLink size={18} /> : <ArrowRight size={18} />}
              </a>
            </div>
          ))}
        </div>

        {/* INTEGRATION READY */}
        <div className="mt-20 rounded-[2.5rem] bg-white border border-pink-100 shadow-2xl p-6 md:p-10">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "Secure Checkout",
                text: "Connect Stripe checkout, payment links, subscriptions, or invoices.",
              },
              {
                icon: Wallet,
                title: "Flexible Payments",
                text: "Support monthly plans, one-time builds, deposits, retainers, and upgrades.",
              },
              {
                icon: CreditCard,
                title: "Payment Link Ready",
                text: "Each plan has a paymentLink field where your real checkout URL goes.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="rounded-[2rem] bg-pink-50 p-6">
                  <div className="w-14 h-14 rounded-2xl bg-white text-pink-600 flex items-center justify-center shadow-sm">
                    <Icon />
                  </div>

                  <h3 className="mt-6 text-2xl font-black">{item.title}</h3>
                  <p className="mt-3 text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}