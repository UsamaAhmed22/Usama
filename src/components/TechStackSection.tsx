import {
  GitBranch, Box, Ship, RefreshCw, Cloud, Shield, CheckCircle,
  Terminal, Wrench, FileCode,
} from 'lucide-react';

const stack = [
  { icon: GitBranch, label: 'Jenkins' },
  { icon: Box, label: 'Docker' },
  { icon: Ship, label: 'Kubernetes' },
  { icon: RefreshCw, label: 'ArgoCD' },
  { icon: Cloud, label: 'AWS' },
  { icon: Cloud, label: 'Azure' },
  { icon: Shield, label: 'Trivy' },
  { icon: CheckCircle, label: 'SonarQube' },
  { icon: Terminal, label: 'Linux' },
  { icon: FileCode, label: 'Bash' },
  { icon: Wrench, label: 'Git' },
  { icon: Shield, label: 'OWASP' },
];

export function TechStackSection() {
  return (
    <section className="py-20 px-5 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="animate-on-scroll mb-12 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">Tech Stack</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Tools I Work With</h2>
        </div>

        <div className="animate-on-scroll flex flex-wrap items-center justify-center gap-6">
          {stack.map((s) => (
            <div key={s.label} className="group flex flex-col items-center gap-2 transition-transform duration-200 hover:scale-105">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/40 bg-card/50 text-muted-foreground group-hover:text-primary group-hover:border-primary/20 transition-all">
                <s.icon className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
