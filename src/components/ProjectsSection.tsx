import { ExternalLink, Github } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const projects = [
  {
    title: 'CI/CD and GitOps Pipeline on Azure',
    tools: ['Jenkins', 'Docker', 'DockerHub', 'ArgoCD', 'GitHub', 'SonarQube', 'Trivy', 'OWASP', 'K3s'],
    description:
      'Designed and deployed an end-to-end CI/CD pipeline on Azure VMs. Automated build, testing, Docker image creation, vulnerability scanning, dependency scanning, and code quality gates. Implemented GitOps deployments on K3s using Argo CD with automated sync and self-healing.',
  },
  {
    title: 'Full-Stack App with Docker & Docker Compose',
    tools: ['Docker', 'Node.js', 'MongoDB', 'Nginx'],
    description:
      'Designed a multi-container full-stack web application using Docker. Orchestrated services using Docker Compose, reducing setup time by 70%. Configured Nginx reverse proxy for routing and load handling.',
  },
  {
    title: 'AWS Cloud Architecture Design',
    tools: ['AWS', 'EC2', 'VPC'],
    description:
      'Designed a scalable and secure cloud environment for a sample workload, focusing on networking, isolation, and resilience. Led peer-review sessions and improved the architecture using feedback.',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="animate-on-scroll mb-14 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">Projects</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Featured Work</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="animate-on-scroll group flex flex-col rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
            >
              <h3 className="text-[15px] font-semibold leading-snug mb-3">{p.title}</h3>
              <p className="mb-5 text-[13px] leading-relaxed text-muted-foreground flex-1">{p.description}</p>
              
              <div className="mb-5">
                <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground/60 mb-2">Tech Used</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tools.map((t) => (
                    <Badge key={t} variant="secondary" className="text-[10px] font-mono rounded-full border-0 px-2.5 py-0.5">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-1">
                <Button size="sm" variant="outline" className="gap-1.5 rounded-xl text-xs border-border/60">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </Button>
                <Button size="sm" variant="ghost" className="gap-1.5 text-xs text-muted-foreground hover:text-foreground">
                  <ExternalLink className="h-3.5 w-3.5" /> Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
