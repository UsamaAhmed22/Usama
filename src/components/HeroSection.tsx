import { ArrowDown, Mail, GitBranch, Box, Ship, Cloud, Shield } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const badges = ['Jenkins', 'Docker', 'Kubernetes', 'GitOps', 'AWS', 'Azure', 'Linux', 'Argo CD'];

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[85vh] items-center overflow-hidden px-5 pt-14 sm:px-8">
      {/* Wave/flow graphic */}
      <div className="pointer-events-none absolute inset-0">
        <svg className="absolute right-0 top-0 h-full w-1/2 opacity-[0.04]" viewBox="0 0 600 800" fill="none">
          <path d="M100,0 Q300,200 200,400 T300,800" stroke="hsl(200,95%,55%)" strokeWidth="2" fill="none"/>
          <path d="M200,0 Q400,200 300,400 T400,800" stroke="hsl(185,70%,50%)" strokeWidth="1.5" fill="none"/>
          <path d="M300,0 Q500,200 400,400 T500,800" stroke="hsl(200,95%,55%)" strokeWidth="1" fill="none"/>
          <circle cx="250" cy="200" r="30" stroke="hsl(200,95%,55%)" strokeWidth="1" fill="none" opacity="0.5"/>
          <circle cx="350" cy="400" r="25" stroke="hsl(185,70%,50%)" strokeWidth="1" fill="none" opacity="0.4"/>
          <circle cx="200" cy="600" r="20" stroke="hsl(200,95%,55%)" strokeWidth="1" fill="none" opacity="0.3"/>
        </svg>
        {/* Floating DevOps icons */}
        <div className="absolute right-[15%] top-[20%] text-primary/[0.06]">
          <GitBranch className="h-16 w-16" />
        </div>
        <div className="absolute right-[25%] top-[45%] text-accent/[0.06]">
          <Box className="h-12 w-12" />
        </div>
        <div className="absolute right-[10%] top-[60%] text-primary/[0.05]">
          <Ship className="h-14 w-14" />
        </div>
        <div className="absolute right-[30%] top-[70%] text-accent/[0.04]">
          <Cloud className="h-10 w-10" />
        </div>
        <div className="absolute right-[18%] top-[35%] text-primary/[0.04]">
          <Shield className="h-10 w-10" />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-[0.15em] uppercase text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          DevOps Engineer
        </p>

        <h1 className="mb-4 text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
          I build
        </h1>

        <div className="mb-6 flex flex-wrap gap-2">
          {['CI/CD Pipelines', 'Kubernetes Clusters', 'Cloud Infrastructure'].map((skill) => (
            <span
              key={skill}
              className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary sm:text-base"
            >
              [{skill}]
            </span>
          ))}
        </div>

        <p className="mb-8 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          Fresh graduate DevOps Engineer with hands-on internship experience in Jenkins pipelines,
          Docker containerization, Kubernetes deployments, and GitOps using Argo CD.
        </p>

        <div className="mb-10 flex flex-wrap items-center gap-3">
          <Button size="lg" className="rounded-xl shadow-md shadow-primary/20 font-medium" asChild>
            <a href="#projects">
              <ArrowDown className="mr-2 h-4 w-4" /> View Projects
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-xl border-border/60 font-medium" asChild>
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </a>
          </Button>
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap items-center gap-2">
          {badges.map((b, i) => (
            <Badge
              key={b}
              variant="secondary"
              className="px-3 py-1 text-xs font-mono rounded-full border-0 animate-fade-in"
              style={{ animationDelay: `${i * 80}ms`, animationFillMode: 'both' }}
            >
              {b}
            </Badge>
          ))}
        </div>

        {/* Status indicator */}
        <div className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          System Status: Operational
        </div>
      </div>
    </section>
  );
}
