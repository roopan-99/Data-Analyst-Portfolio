export function HeroMockup() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto">
      {/* Ambient backdrop */}
      <div className="pointer-events-none absolute -inset-8 rounded-[24px] bg-white/[0.015] blur-2xl" />

      {/* Main window frame — analytics dashboard */}
      <div className="relative rounded-[14px] border border-white/10 bg-secondary overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full border border-white/15" />
          <span className="h-2.5 w-2.5 rounded-full border border-white/15" />
          <span className="h-2.5 w-2.5 rounded-full border border-white/15" />
          <span className="ml-3 text-[10px] font-medium text-silver-dim tracking-wide">
            analytics_dashboard.pbix — Power BI
          </span>
        </div>

        {/* Dashboard body */}
        <div className="grid grid-cols-12 gap-3 p-4">
          {/* KPI row */}
          {[
            { label: 'Total Revenue', value: '₹12.4L', delta: '+18%' },
            { label: 'Records', value: '49,574', delta: '+2.1k' },
            { label: 'Avg. Order', value: '₹486', delta: '+5%' },
          ].map((kpi) => (
            <div key={kpi.label} className="col-span-4 rounded-lg border border-white/[0.06] bg-surface p-3">
              <p className="text-[9px] font-medium uppercase tracking-wider text-silver-dim">{kpi.label}</p>
              <p className="mt-1.5 text-sm font-semibold text-white">{kpi.value}</p>
              <p className="mt-0.5 text-[9px] text-silver">{kpi.delta}</p>
            </div>
          ))}

          {/* Chart — bar */}
          <div className="col-span-7 rounded-lg border border-white/[0.06] bg-surface p-3">
            <div className="flex items-center justify-between">
              <p className="text-[9px] font-medium uppercase tracking-wider text-silver-dim">Revenue by Month</p>
              <span className="text-[8px] text-silver-faint">2024</span>
            </div>
            <div className="mt-3 flex h-20 items-end gap-1.5">
              {[40, 55, 35, 70, 50, 85, 60, 75, 45, 90, 65, 80].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-white/5 to-white/25" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>

          {/* Chart — donut */}
          <div className="col-span-5 rounded-lg border border-white/[0.06] bg-surface p-3">
            <p className="text-[9px] font-medium uppercase tracking-wider text-silver-dim">Categories</p>
            <div className="mt-2 flex items-center gap-3">
              <svg viewBox="0 0 40 40" className="h-16 w-16 -rotate-90">
                <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
                <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="6" strokeDasharray="60 100" strokeLinecap="round" />
                <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="6" strokeDasharray="25 100" strokeDashoffset="-60" strokeLinecap="round" />
              </svg>
              <div className="space-y-1.5">
                {[
                  { w: 'w-6', o: 'opacity-100' },
                  { w: 'w-4', o: 'opacity-50' },
                  { w: 'w-5', o: 'opacity-25' },
                ].map((l, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <span className={`h-1.5 w-1.5 rounded-full bg-white ${l.o}`} />
                    <span className={`h-1.5 ${l.w} rounded bg-white/10`} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Table preview */}
          <div className="col-span-12 rounded-lg border border-white/[0.06] bg-surface p-3">
            <div className="flex items-center justify-between">
              <p className="text-[9px] font-medium uppercase tracking-wider text-silver-dim">Top Performers</p>
              <span className="text-[8px] text-silver-faint">Sorted by Runs</span>
            </div>
            <div className="mt-2.5 space-y-1">
              {[
                { name: 'V Kohli', a: '7,263', b: '37.4', c: '129+' },
                { name: 'S Dhawan', a: '6,469', b: '35.2', c: '118+' },
                { name: 'D Warner', a: '6,398', b: '38.1', c: '110+' },
              ].map((row) => (
                <div key={row.name} className="grid grid-cols-4 gap-2 text-[10px]">
                  <span className="font-medium text-silver-bright truncate">{row.name}</span>
                  <span className="text-silver-dim">{row.a}</span>
                  <span className="text-silver-dim">{row.b}</span>
                  <span className="text-silver-dim">{row.c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating SQL panel */}
      <div className="absolute -right-6 -bottom-6 hidden w-[230px] rounded-[10px] border border-white/10 bg-secondary overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] sm:block animate-float">
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 py-2">
          <span className="text-[9px] font-medium text-silver-dim tracking-wide">query.sql</span>
        </div>
        <div className="p-3 font-mono text-[9px] leading-relaxed">
          <p className="text-silver-faint">— Top performers by season</p>
          <p className="mt-1 text-silver-bright">
            <span className="text-silver-dim">SELECT</span> player, <span className="text-silver-dim">SUM</span>(runs)
          </p>
          <p className="text-silver-bright">
            <span className="text-silver-dim">FROM</span> deliveries
          </p>
          <p className="text-silver-bright">
            <span className="text-silver-dim">GROUP BY</span> player
          </p>
          <p className="text-silver-bright">
            <span className="text-silver-dim">ORDER BY</span> runs <span className="text-silver-dim">DESC</span>
          </p>
          <p className="text-silver-dim">
            <span className="text-silver-dim">LIMIT</span> 10;<span className="inline-block w-1.5 h-3 ml-0.5 bg-white/60 align-middle animate-cursor-blink" />
          </p>
        </div>
      </div>

      {/* Floating Excel chip */}
      <div className="absolute -left-5 top-8 hidden rounded-[8px] border border-white/10 bg-secondary px-3 py-2 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.7)] sm:block animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="flex items-center gap-2">
          <div className="grid grid-cols-3 gap-px">
            {[0,1,2,3,4,5].map(i => (
              <span key={i} className="h-2 w-2 bg-white/10" />
            ))}
          </div>
          <span className="text-[9px] font-medium text-silver-dim">data.xlsx</span>
        </div>
      </div>
    </div>
  );
}
