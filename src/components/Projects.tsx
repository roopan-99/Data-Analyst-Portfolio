import { Github, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { projects, type Project } from '@/data/portfolio';
import { ProjectMockup } from '@/components/ProjectMockup';

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Reveal>
          <span className="section-label">Selected Work</span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-8 font-display text-display-sm font-semibold tracking-tighter text-balance max-w-2xl">
            Four projects. One approach: question first, tool second.
          </h2>
        </Reveal>

        <div className="mt-20 space-y-28 sm:space-y-40">
          {projects.map((project, i) => (
            <ProjectCaseStudy key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCaseStudy({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <Reveal>
      <article className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
        {/* Mockup */}
        <div className={`relative ${reversed ? 'lg:order-2' : ''}`}>
          <div className="pointer-events-none absolute -inset-8 rounded-[20px] bg-white/[0.012] blur-3xl transition-opacity duration-700" />
          <div className="group relative transition-transform duration-700 ease-smooth hover:-translate-y-1.5">
            <div className="absolute -inset-px rounded-[11px] border border-white/[0.06] transition-colors duration-500 group-hover:border-white/[0.12]" />
            <ProjectMockup project={project} />
          </div>
        </div>

        {/* Content */}
        <div className={reversed ? 'lg:order-1' : ''}>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] font-medium tracking-[0.22em] text-silver-faint">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="h-px w-8 bg-white/10" />
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-silver-dim">
              {project.category}
            </span>
          </div>

          <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-white sm:text-[1.75rem]">
            {project.title}
          </h3>

          <div className="mt-7 space-y-6">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-silver-faint">Problem</p>
              <p className="mt-2.5 text-[15px] leading-[1.7] text-silver-muted">{project.problem}</p>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-silver-faint">Solution</p>
              <p className="mt-2.5 text-[15px] leading-[1.7] text-silver-muted">{project.solution}</p>
            </div>
          </div>

          {/* Outcome */}
          <div className="mt-7 border-l border-white/15 pl-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-silver-faint">Outcome</p>
            <p className="mt-2 text-[15px] font-medium leading-relaxed text-white">{project.outcome}</p>
          </div>

          {/* Tools */}
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
            {project.tools.map((tool) => (
              <span key={tool} className="text-[13px] font-medium tracking-tight text-silver-bright">{tool}</span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-9 flex items-center gap-5">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="link-arrow"
            >
              <Github size={15} />
              GitHub
              <ArrowUpRight size={13} />
            </a>
            <a href="#contact" className="link-arrow">
              View Details
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
