import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Tools", path: "/tools" },
  { label: "Custom Tools", path: "/custom-tools" },
  { label: "Pricing", path: "/pricing" },
  { label: "About", path: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/75 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 shadow-lg flex items-center justify-center text-white">
            <Sparkles size={20} />
          </div>

          <div className="leading-none">
            <p className="text-xl font-black tracking-tight">
              <span className="text-pink-500">Techuvo</span>{" "}
              <span className="text-slate-950">Labs</span>
            </p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-black">
              Software Division
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-2 rounded-full bg-white/80 border border-pink-100 shadow-sm px-2 py-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-5 py-2 rounded-full text-sm font-bold transition ${
                  isActive
                    ? "bg-slate-950 text-white shadow-md"
                    : "text-slate-600 hover:text-pink-500 hover:bg-pink-50"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/dashboard"
            className="px-5 py-3 rounded-full bg-pink-50 text-pink-600 font-black hover:bg-pink-100 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/login"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-950 text-white font-black hover:bg-pink-500 hover:scale-105 transition"
          >
            Login
            <ArrowRight size={16} />
          </Link>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="lg:hidden w-11 h-11 rounded-2xl bg-slate-950 text-white flex items-center justify-center shadow-lg"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden px-4 pb-5"
          >
            <div className="rounded-[2rem] bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100 p-3 shadow-2xl border border-white">
              <div className="rounded-[1.5rem] bg-white/80 backdrop-blur-xl p-3">
                <div className="grid gap-2">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `px-5 py-4 rounded-2xl font-black transition ${
                          isActive
                            ? "bg-slate-950 text-white"
                            : "bg-white text-slate-700 hover:bg-pink-50 hover:text-pink-500"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Link
                    to="/dashboard"
                    onClick={closeMenu}
                    className="text-center px-4 py-4 rounded-2xl bg-pink-50 text-pink-600 font-black"
                  >
                    Dashboard
                  </Link>

                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="text-center px-4 py-4 rounded-2xl bg-slate-950 text-white font-black"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}