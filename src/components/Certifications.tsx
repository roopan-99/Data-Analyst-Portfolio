import { Reveal } from '@/components/Reveal';
import { certifications } from '@/data/portfolio';

export function Certifications() {
  return (
    <section id="certifications" className="relative scroll-mt-24 py-28 sm:py-40">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <Reveal>
          <span className="section-label">Certifications</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-8 font-display text-display-sm font-semibold tracking-tighter text-balance">
            Continuous, verified learning.
          </h2>
        </Reveal>

        {/* Minimal timeline */}
        <div className="mt-16">
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-white/15 via-white/8 to-transparent" />

            <div className="space-y-12">
              {certifications.map((cert, i) => (
                <Reveal key={cert.title} delay={i * 80}>
                  <div className="relative flex items-start gap-6">
                    {/* node */}
                    <span className="relative z-10 mt-1.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-white/20 bg-base transition-all duration-300 hover:border-white/40">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/40 transition-colors duration-300 group-hover:bg-white/60" />
                    </span>

                    {/* content */}
                    <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-bold tracking-wider text-silver-faint">
                            {cert.logo}
                          </span>
                          <span className="text-[10px] text-silver-faint">·</span>
                          <span className="text-[10px] font-medium tracking-wide text-silver-faint">
                            {cert.issuer}
                          </span>
                        </div>
                        <h3 className="mt-2 text-[15px] font-semibold tracking-tight text-white">{cert.title}</h3>
                        <p className="mt-1.5 text-sm leading-[1.65] text-silver-dim">{cert.description}</p>
                      </div>
                      <span className="mt-1 shrink-0 font-mono text-[12px] font-medium tabular-nums tracking-wide text-silver-faint sm:mt-0">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
