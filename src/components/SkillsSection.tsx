import { motion } from 'framer-motion';
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

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">Skills</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Technical Expertise</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-4 h-0.5 rounded-full bg-primary/40"
          />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              whileHover={{ y: -4, boxShadow: '0 12px 30px -8px hsl(var(--primary) / 0.1)', transition: { duration: 0.2 } }}
              className="group rounded-2xl border border-border/50 bg-card p-5 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </motion.div>
                <h3 className="text-sm font-semibold">{s.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-lg bg-muted px-2.5 py-1 text-[11px] text-muted-foreground font-mono transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
