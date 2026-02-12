import { motion } from 'framer-motion';
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
    <section className="py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">Tech Stack</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Tools I Work With</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {stack.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
              className="group flex flex-col items-center gap-2"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/40 bg-card text-muted-foreground group-hover:text-primary group-hover:border-primary/20 transition-all duration-200">
                <s.icon className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
