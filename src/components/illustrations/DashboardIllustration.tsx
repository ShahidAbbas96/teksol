import { BarChart3, Boxes, ClipboardCheck, LineChart, Users2 } from "lucide-react";

const BARS = [38, 62, 48, 74, 58, 82, 66];

export default function DashboardIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      {/* Main dashboard window */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/50">
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          <div className="ml-3 flex gap-4 text-[11px] font-medium text-slate-400">
            <span className="text-brand-dark">Sales</span>
            <span>Inventory</span>
            <span>Accounting</span>
            <span>Manufacturing</span>
            <span className="hidden sm:inline">CRM</span>
          </div>
        </div>

        <div className="space-y-5 p-5">
          {/* Stat tiles */}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-brand-background p-3">
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                <LineChart className="h-3.5 w-3.5" /> Revenue
              </div>
              <p className="mt-1.5 text-lg font-bold text-brand-dark">Trending up</p>
            </div>
            <div className="rounded-xl bg-brand-background p-3">
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                <Boxes className="h-3.5 w-3.5" /> Inventory
              </div>
              <p className="mt-1.5 text-lg font-bold text-brand-dark">In sync</p>
            </div>
            <div className="rounded-xl bg-brand-background p-3">
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500">
                <Users2 className="h-3.5 w-3.5" /> Pipeline
              </div>
              <p className="mt-1.5 text-lg font-bold text-brand-dark">Active</p>
            </div>
          </div>

          {/* Bar chart */}
          <div className="rounded-xl border border-slate-100 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                <BarChart3 className="h-4 w-4" /> Sales overview
              </span>
              <span className="text-[11px] text-slate-400">Last 7 periods</span>
            </div>
            <div className="flex h-28 items-end gap-2.5">
              {BARS.map((height, index) => (
                <div
                  key={index}
                  style={{ height: `${height}%` }}
                  className={`flex-1 rounded-t-md ${index === 5 ? "bg-brand-secondary" : "bg-brand-secondary/25"}`}
                />
              ))}
            </div>
          </div>

          {/* Task row */}
          <div className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3">
            <span className="flex items-center gap-2 text-xs font-medium text-slate-600">
              <ClipboardCheck className="h-4 w-4 text-emerald-500" />
              Purchase orders synced with inventory
            </span>
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-600">
              Automated
            </span>
          </div>
        </div>
      </div>

      {/* Floating metric cards */}
      <div className="absolute -left-6 top-10 hidden w-44 rounded-xl border border-slate-200 bg-white p-3.5 shadow-lg shadow-slate-300/40 sm:block">
        <p className="text-[11px] font-medium text-slate-500">Inventory Optimized</p>
        <p className="mt-1 text-sm font-bold text-brand-dark">Real-time stock levels</p>
      </div>

      <div className="absolute -right-6 top-1/3 hidden w-44 rounded-xl border border-slate-200 bg-white p-3.5 shadow-lg shadow-slate-300/40 sm:block">
        <p className="text-[11px] font-medium text-slate-500">Orders Processed</p>
        <p className="mt-1 text-sm font-bold text-brand-dark">Automated fulfillment</p>
      </div>

      <div className="absolute -bottom-6 left-8 hidden w-48 rounded-xl border border-slate-200 bg-white p-3.5 shadow-lg shadow-slate-300/40 sm:block">
        <p className="text-[11px] font-medium text-slate-500">Real-time Reporting</p>
        <p className="mt-1 text-sm font-bold text-brand-dark">One dashboard, every department</p>
      </div>
    </div>
  );
}
