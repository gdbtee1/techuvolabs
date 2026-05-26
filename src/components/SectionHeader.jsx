export default function SectionHeader({ eyebrow, title, text, center = false }) {
  return (
    <div className={center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      <p className="text-pink-500 font-black uppercase tracking-[0.2em] text-xs">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl md:text-6xl font-black tracking-tight text-slate-950">
        {title}
      </h2>

      {text && (
        <p className="mt-5 text-lg text-slate-600 leading-relaxed">
          {text}
        </p>
      )}
    </div>
  );
}