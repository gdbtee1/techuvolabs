export default function Login() {
  return (
    <section className="min-h-screen px-4 py-24 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-pink-100 p-8">
        <p className="text-pink-500 font-semibold">Business Portal</p>
        <h1 className="text-4xl font-black mt-3">Login</h1>

        <div className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-5 py-4 rounded-2xl border border-slate-200 outline-none focus:border-pink-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-5 py-4 rounded-2xl border border-slate-200 outline-none focus:border-pink-400"
          />

          <button className="w-full px-5 py-4 rounded-2xl bg-pink-500 text-white font-semibold hover:scale-[1.02] transition">
            Enter Dashboard
          </button>
        </div>
      </div>
    </section>
  );
}