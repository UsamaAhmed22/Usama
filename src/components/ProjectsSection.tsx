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
    <section id="projects" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="animate-on-scroll mb-14 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">Projects</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Featured Work</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="animate-on-scroll group flex flex-col rounded-2xl glass p-6 transition-all duration-300 hover:glow hover:-translate-y-1"
            >
              <h3 className="text-base font-semibold leading-snug mb-3">{p.title}</h3>
              <p className="mb-5 text-[13px] leading-relaxed text-muted-foreground flex-1">{p.description}</p>
              
              <div className="mb-5">
                <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground/70 mb-2">Tools Used</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tools.map((t) => (
                    <Badge key={t} variant="secondary" className="text-[11px] font-mono rounded-lg border-0 px-2 py-0.5">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-1">
                <Button size="sm" variant="outline" className="gap-1.5 rounded-xl text-xs">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </Button>
                <Button size="sm" variant="ghost" className="gap-1.5 text-xs">
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
