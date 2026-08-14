import { useEffect, useState } from 'react';
import { profile, navLinks } from '@/data/portfolio';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const ids = ['about', 'projects', 'certifications', 'contact'];
      const current = ids.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const top = el.getBoundingClientRect().top;
        return top <= 120 && top >= -el.offsetHeight;
      });
      if (current) setActive(`#${current}`);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/[0.06] bg-base/75 backdrop-blur-2xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-[10px] font-bold tracking-wide text-white transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.08]">
            {profile.initials}
          </span>
          <span className="font-display text-[13px] font-semibold tracking-tight text-white transition-opacity duration-300 group-hover:opacity-90">
            {profile.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link relative rounded-md px-3 py-1.5 text-[13px] font-medium transition-colors duration-300 ${
                  active === link.href ? 'is-active text-white' : 'text-silver-dim hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden btn btn-glass !py-2 !px-4 !text-[13px] md:inline-flex">
          Contact
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="flex flex-col gap-1">
            <span className={`h-px w-4 bg-white transition-all duration-300 ${open ? 'translate-y-[3px] rotate-45' : ''}`} />
            <span className={`h-px w-4 bg-white transition-all duration-300 ${open ? '-translate-y-[2px] -rotate-45' : ''}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/[0.06] bg-base/95 backdrop-blur-2xl md:hidden">
          <ul className="flex flex-col px-6 py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2.5 text-sm font-medium ${active === link.href ? 'text-white' : 'text-silver-muted'}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
