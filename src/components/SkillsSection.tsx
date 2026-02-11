import {
  GitBranch, Box, Ship, RefreshCw, Cloud, Shield, CheckCircle,
  Terminal, Wrench, Users,
} from 'lucide-react';

const skills = [
  { icon: GitBranch, title: 'CI/CD', items: ['Jenkins', 'GitHub', 'DockerHub'] },
  { icon: Box, title: 'Containerization', items: ['Docker', 'Docker Compose', 'Nginx Reverse Proxy'] },
  { icon: Ship, title: 'Kubernetes', items: ['K3s', 'Manifests', 'Deployments', 'Services', 'ConfigMaps', 'Pod Monitoring'] },
  { icon: RefreshCw, title: 'GitOps', items: ['Argo CD', 'Auto Sync', 'Self Healing'] },
  { icon: Cloud, title: 'Cloud', items: ['AWS (EC2, VPC)', 'Azure (VMs)'] },
  { icon: Shield, title: 'Security Tools', items: ['Trivy', 'OWASP Dependency Check'] },
  { icon: CheckCircle, title: 'Code Quality', items: ['SonarQube Quality Gates'] },
  { icon: Terminal, title: 'OS & Scripting', items: ['Linux (Ubuntu)', 'Bash Scripting'] },
  { icon: Wrench, title: 'Tools', items: ['Git', 'GitHub', 'Jira'] },
  { icon: Users, title: 'Processes', items: ['Agile / Scrum', 'Documentation'] },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 bg-muted/20">
      <div className="mx-auto max-w-6xl">
        <div className="animate-on-scroll mb-14 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">Skills</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Technical Expertise</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <div
              key={s.title}
              className="animate-on-scroll group rounded-2xl glass p-5 transition-all duration-300 hover:glow hover:-translate-y-1"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                  <s.icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-sm font-semibold">{s.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-muted/80 px-2.5 py-1 text-xs text-muted-foreground font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
