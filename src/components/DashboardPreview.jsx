import { BarChart3, CreditCard, Settings, ShoppingBag } from "lucide-react";

const items = [
  { icon: ShoppingBag, label: "My Tools", value: "8 Active" },
  { icon: CreditCard, label: "Billing", value: "Stripe Ready" },
  { icon: Settings, label: "Requests", value: "Custom Builds" },
  { icon: BarChart3, label: "Analytics", value: "Growth View" },
];

export default function DashboardPreview() {
  return (
    <section className="px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-[2rem] bg-slate-950 p-4 md:p-8 shadow-2xl overflow-hidden">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-white via-pink-50 to-cyan-50 p-5 md:p-8">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-pink-500 font-black">Business Dashboard</p>
                <h2 className="text-3xl md:text-5xl font-black mt-2">
                  A future portal for every client.
                </h2>
              </div>

              <button className="w-full md:w-auto rounded-full bg-slate-950 text-white px-6 py-3 font-bold">
                Dashboard Preview
              </button>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {items.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-3xl bg-white p-5 shadow-lg border border-pink-100"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center">
                      <Icon />
                    </div>

                    <p className="mt-5 font-black text-slate-950">
                      {item.label}
                    </p>

                    <p className="text-slate-500 text-sm">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}