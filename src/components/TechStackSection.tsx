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
    <section className="py-20 px-6 overflow-hidden">
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
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-4 h-0.5 rounded-full bg-primary/40"
          />
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {stack.map((s, i) => (
            <motion.div
              key={`${s.label}-${i}`}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              whileHover={{
                scale: 1.15,
                y: -4,
                transition: { type: 'spring', stiffness: 300 },
              }}
              className="group flex flex-col items-center gap-2 cursor-default"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border/40 bg-card text-muted-foreground group-hover:text-primary group-hover:border-primary/30 group-hover:shadow-md group-hover:shadow-primary/10 transition-all duration-200">
                <s.icon className="h-5 w-5" />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
