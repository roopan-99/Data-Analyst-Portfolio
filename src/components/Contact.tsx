import { Reveal } from '@/components/Reveal';
import { profile, socials } from '@/data/portfolio';

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-28 sm:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.012] blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 sm:px-8 text-center">
        <Reveal>
          <span className="section-label justify-center">Contact</span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-8 font-display text-display font-bold tracking-tightest text-balance">
            Let's turn your data<br />into decisions.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-7 max-w-xl text-base leading-[1.7] text-silver-muted text-pretty sm:text-[17px]">
            Open to entry-level data analyst roles, internships, and collaboration. I usually reply within a day.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="btn btn-glass">
              {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-glass">
              LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-16 border-t border-white/[0.06] pt-8">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.label === 'Email' ? undefined : '_blank'}
                  rel="noreferrer"
                  className="link-arrow"
                >
                  <s.icon size={15} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
