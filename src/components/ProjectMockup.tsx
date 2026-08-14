import { type Project } from '@/data/portfolio';

/**
 * Handcrafted monochrome mockups — one per project.
 * No stock photos. Each is a pure CSS/SVG "screenshot"
 * that reflects the project's actual analysis type.
 */

export function ProjectMockup({ project }: { project: Project }) {
  switch (project.id) {
    case 'ipl':
      return <IPLMockup />;
    case 'pizza':
      return <PizzaMockup />;
    case 'validation':
      return <ValidationMockup />;
    case 'rules':
      return <RulesMockup />;
    default:
      return null;
  }
}

function Frame({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[10px] border border-white/[0.08] bg-secondary">
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 py-2">
        <span className="h-2 w-2 rounded-full border border-white/15" />
        <span className="h-2 w-2 rounded-full border border-white/15" />
        <span className="h-2 w-2 rounded-full border border-white/15" />
        <span className="ml-2 text-[9px] font-medium tracking-wide text-silver-faint truncate">{title}</span>
      </div>
      <div className="p-3.5">{children}</div>
    </div>
  );
}

function IPLMockup() {
  const bars = [62, 78, 45, 88, 55, 72, 38, 95, 60, 82, 48, 70];
  return (
    <Frame title="ipl_performance.pbix — Power BI">
      <div className="grid grid-cols-3 gap-2.5">
        {[
          { l: 'Matches', v: '1,092' },
          { l: 'Players', v: '547' },
          { l: 'Records', v: '49,574' },
        ].map((k) => (
          <div key={k.l} className="rounded-md border border-white/[0.05] bg-surface px-2.5 py-2">
            <p className="text-[8px] uppercase tracking-wider text-silver-faint">{k.l}</p>
            <p className="mt-1 text-xs font-semibold text-white">{k.v}</p>
          </div>
        ))}
      </div>

      <div className="mt-2.5 rounded-md border border-white/[0.05] bg-surface p-3">
        <div className="flex items-center justify-between">
          <p className="text-[8px] uppercase tracking-wider text-silver-faint">Runs by Season</p>
          <span className="text-[7px] text-silver-faint">2008—2024</span>
        </div>
        <div className="mt-2.5 flex h-16 items-end gap-1">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-white/5 to-white/25" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>

      <div className="mt-2.5 rounded-md border border-white/[0.05] bg-surface p-3">
        <p className="text-[8px] uppercase tracking-wider text-silver-faint">Top Batsmen</p>
        <div className="mt-2 space-y-1">
          {[
            { n: 'V Kohli', r: '7,263', s: 96 },
            { n: 'S Dhawan', r: '6,469', s: 85 },
            { n: 'D Warner', r: '6,398', s: 84 },
            { n: 'R Sharma', r: '6,063', s: 80 },
          ].map((p) => (
            <div key={p.n} className="flex items-center gap-2">
              <span className="w-16 text-[9px] font-medium text-silver-bright truncate">{p.n}</span>
              <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div className="h-full rounded-full bg-white/30" style={{ width: `${p.s}%` }} />
              </div>
              <span className="w-10 text-right text-[9px] text-silver-dim">{p.r}</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function PizzaMockup() {
  return (
    <Frame title="pizza_sales.sql — Power BI">
      <div className="grid grid-cols-2 gap-2.5">
        <div className="rounded-md border border-white/[0.05] bg-surface p-3">
          <p className="text-[8px] uppercase tracking-wider text-silver-faint">Revenue</p>
          <p className="mt-1 text-sm font-semibold text-white">₹8.17L</p>
        </div>
        <div className="rounded-md border border-white/[0.05] bg-surface p-3">
          <p className="text-[8px] uppercase tracking-wider text-silver-faint">Orders</p>
          <p className="mt-1 text-sm font-semibold text-white">21,350</p>
        </div>
      </div>

      <div className="mt-2.5 rounded-md border border-white/[0.05] bg-surface p-3">
        <p className="text-[8px] uppercase tracking-wider text-silver-faint">Orders by Hour</p>
        <svg viewBox="0 0 120 40" className="mt-2 w-full h-12">
          <polyline
            points="0,28 12,30 24,18 36,10 48,8 60,12 72,14 84,22 96,26 108,32 120,34"
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {[0,12,24,36,48,60,72,84,96,108,120].map((x, i) => {
            const y = [28,30,18,10,8,12,14,22,26,32,34][i];
            return <circle key={i} cx={x} cy={y} r="1.5" fill="rgba(255,255,255,0.5)" />;
          })}
        </svg>
        <div className="mt-1 flex justify-between text-[7px] text-silver-faint">
          <span>11a</span><span>1p</span><span>3p</span><span>5p</span><span>7p</span><span>9p</span>
        </div>
      </div>

      <div className="mt-2.5 rounded-md border border-white/[0.05] bg-surface p-3">
        <p className="text-[8px] uppercase tracking-wider text-silver-faint">Top Pizzas</p>
        <div className="mt-2 space-y-1">
          {[
            { n: 'Classic Deluxe', v: '2,453' },
            { n: 'Pepperoni', v: '2,309' },
            { n: 'BBQ Chicken', v: '1,892' },
          ].map((p, i) => (
            <div key={p.n} className="flex items-center justify-between text-[9px]">
              <span className="flex items-center gap-2">
                <span className="text-silver-faint">{i + 1}</span>
                <span className="font-medium text-silver-bright">{p.n}</span>
              </span>
              <span className="text-silver-dim">{p.v} sold</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

function ValidationMockup() {
  return (
    <Frame title="sales_validation.xlsx — Excel">
      <div className="rounded-md border border-white/[0.05] bg-surface overflow-hidden">
        <table className="w-full text-[8px]">
          <thead>
            <tr className="border-b border-white/[0.06]">
              {['ID', 'Order', 'Amount', 'Status'].map((h) => (
                <th key={h} className="px-2 py-1.5 text-left font-medium uppercase tracking-wider text-silver-faint">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { id: '001', o: 'ORD-2401', a: '₹2,450', s: 'Valid', ok: true },
              { id: '002', o: 'ORD-2402', a: '₹1,830', s: 'Valid', ok: true },
              { id: '003', o: 'ORD-2403', a: '₹—', s: 'Error', ok: false },
              { id: '004', o: 'ORD-2404', a: '₹3,120', s: 'Valid', ok: true },
              { id: '005', o: 'ORD-2405', a: '₹0.00', s: 'Flagged', ok: false },
              { id: '006', o: 'ORD-2406', a: '₹1,540', s: 'Valid', ok: true },
            ].map((row) => (
              <tr key={row.id} className="border-b border-white/[0.03]">
                <td className="px-2 py-1.5 text-silver-faint">#{row.id}</td>
                <td className="px-2 py-1.5 text-silver-bright">{row.o}</td>
                <td className="px-2 py-1.5 text-silver-dim">{row.a}</td>
                <td className="px-2 py-1.5">
                  <span className={`inline-flex items-center gap-1 ${row.ok ? 'text-silver-bright' : 'text-silver'}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${row.ok ? 'bg-white/50' : 'border border-white/30'}`} />
                    {row.s}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-2.5 grid grid-cols-3 gap-2">
        {[
          { l: 'Total', v: '1,000+' },
          { l: 'Valid', v: '987' },
          { l: 'Flagged', v: '13' },
        ].map((s) => (
          <div key={s.l} className="rounded-md border border-white/[0.05] bg-surface px-2 py-1.5">
            <p className="text-[7px] uppercase tracking-wider text-silver-faint">{s.l}</p>
            <p className="mt-0.5 text-[10px] font-semibold text-white">{s.v}</p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function RulesMockup() {
  return (
    <Frame title="case_tracking.xlsx — Excel">
      <div className="grid grid-cols-3 gap-2">
        {[
          { l: 'Cases', v: '40+' },
          { l: 'Depts', v: '3' },
          { l: 'Pending', v: '0' },
        ].map((s) => (
          <div key={s.l} className="rounded-md border border-white/[0.05] bg-surface px-2 py-1.5">
            <p className="text-[7px] uppercase tracking-wider text-silver-faint">{s.l}</p>
            <p className="mt-0.5 text-[10px] font-semibold text-white">{s.v}</p>
          </div>
        ))}
      </div>

      <div className="mt-2.5 rounded-md border border-white/[0.05] bg-surface p-3">
        <p className="text-[8px] uppercase tracking-wider text-silver-faint">Case Log</p>
        <div className="mt-2 space-y-1.5">
          {[
            { c: 'CASE-041', d: 'Operations', st: 'Closed' },
            { c: 'CASE-042', d: 'Finance', st: 'Closed' },
            { c: 'CASE-043', d: 'Operations', st: 'Closed' },
            { c: 'CASE-044', d: 'Support', st: 'Closed' },
          ].map((r) => (
            <div key={r.c} className="flex items-center justify-between text-[9px]">
              <span className="font-medium text-silver-bright">{r.c}</span>
              <span className="text-silver-dim">{r.d}</span>
              <span className="flex items-center gap-1 text-silver-bright">
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                {r.st}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2.5 rounded-md border border-white/[0.05] bg-surface p-3">
        <p className="text-[8px] uppercase tracking-wider text-silver-faint">Validation Rules</p>
        <div className="mt-2 space-y-1">
          {['Amount > 0', 'Date not null', 'Dept in allowed list', 'No duplicate IDs'].map((rule) => (
            <div key={rule} className="flex items-center gap-2 text-[9px]">
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span className="text-silver-dim font-mono">{rule}</span>
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}
