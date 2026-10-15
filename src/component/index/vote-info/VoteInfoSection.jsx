import React from "react";
import { Trophy, ArrowRight, BarChart2, Crown, Award } from "lucide-react";
import { TOP_BATCHES } from "@/config/vote-info/voteInfo.config";
import BatchAttendanceChart from "./BatchAttendanceChart";

const getProgressColor = (percentageNum) => {
  if (percentageNum >= 100) return "bg-emerald-500";
  if (percentageNum >= 90) return "bg-amber-500";
  if (percentageNum >= 80) return "bg-amber-600";
  return "bg-rose-500";
};

const parsePercentage = (str) => {
  if (!str) return 0;
  const bnToEn = (s) => s.replace(/[০-৯]/g, (d) => "০১২৩৪৫৬৭৮৯".indexOf(d));
  const normalized = bnToEn(str.toString()).replace("%", "").trim();
  return parseFloat(normalized) || 0;
};

export default function VoteInfoSection() {
  return (
    <section
      aria-labelledby="vote-info-heading"
      className="relative w-full bg-linear-to-b from-slate-200 via-slate-300 to-slate-400 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-teal-800 shadow-sm mb-4 border border-teal-100">
            <span
              className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"
              aria-hidden="true"
            />
            <span>
              অ্যালামনাই অ্যাসোসিয়েশন ১ম কেন্দ্রীয় কাউন্সিল ২০২৬ • সাধারণ পরিষদ নির্বাচন
            </span>
          </div>

          <h2
            id="vote-info-heading"
            className="text-3xl sm:text-4xl font-extrabold text-teal-900 tracking-tight"
          >
            আপনি <span className="text-teal-600">ভোট দিয়েছেন কি?</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            দেখে নিন আপনার ব্যাচের ভোটার উপস্থিতির শতকরা পরিসংখ্যান
          </p>
        </header>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Top Batches Leaderboard Card */}
          <article className="lg:col-span-5 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/40 p-6 transition-shadow hover:shadow-2xl">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 text-amber-600 font-semibold text-sm sm:text-base">
                <Trophy className="w-5 h-5 text-amber-500" aria-hidden="true" />
                <span>শীর্ষ ৩ ব্যাচ</span>
              </div>
              <a
                href="#full-stats"
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors group focus:outline-none focus:ring-2 focus:ring-teal-500 rounded"
              >
                পূর্ণ পরিসংখ্যান
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div className="space-y-6">
              {TOP_BATCHES?.map((batch) => {
                const percentVal =
                  batch.total > 0
                    ? (batch.voted / batch.total) * 100
                    : parsePercentage(batch.percentage);

                const progressColor = getProgressColor(percentVal);

                return (
                  <div key={batch.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-full bg-slate-100 border border-slate-200">
                          {percentVal >= 100 ? (
                            <Crown className="w-4 h-4 text-amber-500 fill-amber-500" />
                          ) : (
                            <Award className="w-4 h-4 text-slate-500" />
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-800 text-sm sm:text-base">
                            {batch.year}
                          </span>
                          <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                            {batch.positionText}
                          </span>
                        </div>
                      </div>

                      <span className="font-extrabold text-teal-700 text-base sm:text-lg">
                        {batch.percentage}
                      </span>
                    </div>

                    <div className="flex justify-between text-xs text-slate-500">
                      <span>
                        {batch.voted} / {batch.total} ভোট
                      </span>
                    </div>

                    {/* Dynamic Color Progress Bar */}
                    <div
                      className="w-full bg-slate-200/80 h-2.5 rounded-full overflow-hidden p-0.5"
                      role="progressbar"
                      aria-valuenow={batch.voted}
                      aria-valuemin={0}
                      aria-valuemax={batch.total}
                    >
                      <div
                        className={`h-full rounded-full ${progressColor} transition-all duration-700 ease-out`}
                        style={{ width: `${Math.min(percentVal, 100)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          {/* Attendance Overview Area (Chart Container) */}
          <aside className="lg:col-span-7 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/60 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
              <div className="flex items-center gap-2 text-teal-900 font-semibold text-base sm:text-lg">
                <BarChart2
                  className="w-5 h-5 text-teal-600"
                  aria-hidden="true"
                />
                <span>ব্যাচভিত্তিক ভোটার উপস্থিতির হার</span>
              </div>

              <button
                type="button"
                className="self-start sm:self-auto bg-white hover:bg-slate-50 text-teal-800 text-xs sm:text-sm font-medium px-4 py-2 rounded-full shadow-sm border border-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 cursor-pointer"
              >
                মোট ৫৩টি ব্যাচ
              </button>
            </div>

            {/* Recharts Component Render */}
            <BatchAttendanceChart />
          </aside>
          
        </div>
      </div>
    </section>
  );
}