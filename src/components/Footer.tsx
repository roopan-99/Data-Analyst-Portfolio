import { ArrowUp } from 'lucide-react';
import { profile, socials } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#home" className="group flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-[10px] font-bold tracking-wide text-white transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.08]">
              {profile.initials}
            </span>
            <span className="font-display text-[13px] font-semibold tracking-tight text-white transition-opacity duration-300 group-hover:opacity-90">
              {profile.name}
            </span>
          </a>

          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label === 'Email' ? undefined : '_blank'}
                rel="noreferrer"
                className="text-[13px] font-medium text-silver-dim transition-colors duration-300 hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>

          <a href="#home" className="group flex items-center gap-2 text-[13px] font-medium text-silver-dim transition-colors hover:text-white">
            <span>Top</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-white/20 group-hover:bg-white/[0.08]">
              <ArrowUp size={14} />
            </span>
          </a>
        </div>

        <div className="mt-8 border-t border-white/[0.04] pt-6 text-center">
          <p className="text-xs text-silver-faint">
            © {new Date().getFullYear()} {profile.name}. Built with attention to detail.
          </p>
        </div>
      </div>
    </footer>
  );
}
