import { useEffect, useState } from 'react';
import { profile } from '@/data/portfolio';

export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-base transition-opacity duration-700 ${
        done ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-hidden={done}
    >
      <div className="flex flex-col items-center">
        <span className="font-display text-sm font-semibold tracking-tight text-white animate-fade-in">{profile.name}</span>
        <div className="mt-4 h-px w-32 overflow-hidden bg-white/10">
          <div
            className="h-full bg-white/50 transition-all duration-[900ms] ease-out"
            style={{ width: done ? '100%' : '0%' }}
          />
        </div>
      </div>
    </div>
  );
}
