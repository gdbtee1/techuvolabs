export default function Footer() {
  return (
    <footer className="border-t border-pink-100 bg-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          <div>
            <h2 className="text-2xl font-black">
              <span className="text-pink-500">Techuvo</span>{" "}
              <span className="text-slate-900">Labs</span>
            </h2>

            <p className="mt-3 text-slate-600 max-w-md">
              Premium business tools, automation systems,
              AI software, and custom digital infrastructure.
            </p>
          </div>

          <div className="text-sm text-slate-500">
            © 2026 Techuvo Labs. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
}