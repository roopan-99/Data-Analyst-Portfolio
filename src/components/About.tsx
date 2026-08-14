import { Reveal } from '@/components/Reveal';
import { profile } from '@/data/portfolio';

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-28 sm:py-40">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <Reveal>
          <span className="section-label">About</span>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-8 font-display text-display-sm font-semibold tracking-tighter text-balance">
            I work at the intersection of curiosity and clean data.
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-10 text-[17px] leading-[1.75] text-silver-muted text-pretty">
            {profile.about}
          </p>
        </Reveal>

        {/* Integrated skills */}
        <Reveal delay={240}>
          <div className="mt-14 border-t border-white/[0.06] pt-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-silver-faint">
              Tooling
            </p>
            <div className="mt-5 flex flex-wrap gap-x-7 gap-y-3">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm font-medium tracking-tight text-silver-bright transition-colors duration-300 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
