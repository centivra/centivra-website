import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {

  useEffect(() => {
    document.title = "404 — Page Not Found | Centivra";
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-24">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Left: Visual block */}
          <div className="bg-gradient-to-br from-[#001B51] to-[#0070CC] p-10 flex items-center justify-center">
            <div className="text-center text-white space-y-6">
              <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-white/10">
                <span className="text-4xl font-extrabold">404</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold">
                Page not found
              </h2>
              <p className="text-sm md:text-base text-slate-200 max-w-sm mx-auto">
                The page you’re looking for does not exist. It may have been moved or deleted.
              </p>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="p-8 md:p-12">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#001B51] mb-2">Let’s get you back on track</h3>
              <p className="text-slate-700">
                Try following one of the quick links below.
              </p>
            </div>

            {/* Quick links */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/"
                className="flex items-center gap-2 justify-center px-4 py-3 rounded-xl border border-slate-200 text-slate-800 font-semibold hover:bg-[#f1f7ff] transition"
              > Go to Home
              </Link>

              <Link
                to="/services"
                className="flex items-center gap-2 justify-center px-4 py-3 rounded-xl bg-[#009EFF] text-white font-semibold hover:bg-[#0070CC] transition"
              >
                View Services
              </Link>

              <Link
                to="/contact"
                className="flex items-center gap-2 justify-center px-4 py-3 rounded-xl border border-slate-200 text-slate-800 font-semibold hover:bg-[#f1f7ff] transition"
              > Contact Us
              </Link>
            </div>

            {/* Helpful suggestions */}
            <div className="mt-8 text-sm text-slate-600 space-y-3">
              <p>
                Tip: Check the URL for typos or try the site search above.
              </p>
              <p>
                If you believe this is an error, please{" "}
                <Link to="/contact" className="text-[#0070CC] hover:underline">
                  contact us
                </Link>{" "}
                and we’ll help you find what you need.
              </p>
            </div>

            {/* Small footer */}
            <div className="mt-8 border-t border-slate-100 pt-4 text-xs text-slate-500">
              <span>© {new Date().getFullYear()} Centivra. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
