import { ArrowRight, FileText } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { HeroMockup } from '@/components/HeroMockup';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* Subtle grid + noise */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-noise" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.015] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        {/* Status badge */}
        <div className="flex justify-center animate-fade-in opacity-0" style={{ animationDelay: '0.05s' }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-3.5 py-1.5 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/30 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white/70" />
            </span>
            <span className="text-[11px] font-medium tracking-wide text-silver-muted">Open to Data Analyst roles</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="mx-auto mt-10 max-w-4xl text-center font-display text-display font-bold text-balance animate-fade-up opacity-0" style={{ animationDelay: '0.15s' }}>
          Turning data into<br />decisions.
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-7 max-w-2xl text-center text-base leading-[1.65] text-silver-muted text-pretty sm:text-[17px] animate-fade-up opacity-0" style={{ animationDelay: '0.3s' }}>
          {profile.subheadline}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up opacity-0" style={{ animationDelay: '0.45s' }}>
          <a href="#projects" className="btn btn-glass group">
            View Projects
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
          <a href={profile.resumeUrl} className="btn btn-ghost group">
            <FileText size={15} />
            Resume
          </a>
        </div>

        {/* Mockup */}
        <div className="mt-16 animate-scale-in opacity-0 sm:mt-20" style={{ animationDelay: '0.6s' }}>
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}
