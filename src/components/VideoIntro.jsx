import { Play, Sparkles } from "lucide-react";

export default function VideoIntro() {
  return (
    <section className="px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-pink-200 via-purple-100 to-cyan-100 p-6 md:p-10 shadow-2xl">
          
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-pink-400/30 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-400/30 blur-3xl rounded-full" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-xl text-pink-600 font-bold">
                <Sparkles size={17} />
                Premium Labs Intro
              </div>

              <h2 className="mt-6 text-4xl md:text-6xl font-black text-slate-950 leading-tight">
                A cartoon-style story of what Techuvo Labs does.
              </h2>

              <p className="mt-5 text-slate-700 text-lg leading-relaxed">
                This section is ready for your future animated explainer video.
                It can show businesses how Techuvo Labs builds tools,
                automations, dashboards, and custom systems that help them grow.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-[2rem] bg-white/80 border border-white shadow-xl flex items-center justify-center overflow-hidden">
                <div className="text-center px-6">
                  <div className="mx-auto w-20 h-20 rounded-full bg-slate-950 text-white flex items-center justify-center shadow-xl">
                    <Play fill="white" />
                  </div>

                  <p className="mt-5 font-black text-slate-950">
                    Cartoon Explainer Video Placeholder
                  </p>

                  <p className="text-sm text-slate-500 mt-2">
                    Later replace this with your video file or embed.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-5 bg-white rounded-3xl shadow-xl p-4 hidden sm:block">
                <p className="font-black text-slate-950">Video Ready</p>
                <p className="text-sm text-slate-500">MP4 / YouTube / Vimeo</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}