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
    <section id="skills" className="py-24 px-5 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="animate-on-scroll mb-14 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">Skills</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Technical Expertise</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <div
              key={s.title}
              className="animate-on-scroll group rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/8 text-primary">
                  <s.icon className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold">{s.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-muted/70 px-2.5 py-1 text-[11px] text-muted-foreground font-mono"
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
