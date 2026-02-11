import { ArrowDown, Mail } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const badges = ['Jenkins', 'Docker', 'Kubernetes', 'GitOps', 'AWS', 'Azure', 'Linux'];

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-14">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/8 blur-[150px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-accent/6 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-6 text-sm font-medium tracking-[0.25em] uppercase text-primary">
          DevOps Engineer
        </p>

        <h1 className="mb-6 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          CI/CD{' '}
          <span className="text-gradient">•</span>{' '}Docker{' '}
          <span className="text-gradient">•</span>{' '}Kubernetes{' '}
          <span className="text-gradient">•</span>{' '}Cloud
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          Fresh graduate Computer Science student turned DevOps Engineer with hands-on internship
          experience in Jenkins pipelines, Docker containerization, Kubernetes deployments, and
          GitOps using Argo CD.
        </p>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" className="rounded-xl shadow-md shadow-primary/20" asChild>
            <a href="#projects">
              <ArrowDown className="mr-2 h-4 w-4" /> View Projects
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-xl" asChild>
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {badges.map((b, i) => (
            <Badge
              key={b}
              variant="secondary"
              className="px-3 py-1 text-xs font-mono rounded-lg animate-fade-in border-0"
              style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}
            >
              {b}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
