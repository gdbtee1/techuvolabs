import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-gradient-to-br from-white via-pink-50 to-cyan-50">
      <div className="text-center px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-black tracking-tight"
        >
          <span className="text-pink-500">Techuvo</span>{" "}
          <span className="text-slate-950">Labs</span>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "180px" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 rounded-full mx-auto mt-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-5 text-slate-500 font-semibold"
        >
          Building premium business tools...
        </motion.p>
      </div>
    </div>
  );
}