import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const responsibilities = [
  'Assisted in building and maintaining CI/CD pipelines using Jenkins',
  'Containerized applications using Docker for consistent environments',
  'Supported Kubernetes deployments by updating manifests and monitoring pods',
  'Worked in Linux-based environments with cloud-native DevOps practices',
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">Experience</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Work History</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-4 h-0.5 rounded-full bg-primary/40"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative border-l-2 border-primary/15 pl-8 ml-3"
        >
          {/* Animated timeline dot */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
            className="absolute -left-[13px] top-0 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm"
          >
            <Briefcase className="h-3 w-3" />
          </motion.div>

          {/* Animated line growing */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -left-[1px] top-0 w-[2px] bg-primary/30 origin-top"
          />

          <div className="rounded-2xl border border-border/50 bg-card p-6 sm:p-8">
            <h3 className="text-lg font-semibold">DevOps Intern</h3>
            <p className="mb-1 text-sm font-medium text-primary">Beenco Lab — Karachi</p>
            <p className="mb-5 text-xs text-muted-foreground">Dec 2025 – Present</p>

            <ul className="space-y-3">
              {responsibilities.map((r, i) => (
                <motion.li
                  key={r}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 text-[13px] leading-relaxed text-muted-foreground"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60"
                  />
                  {r}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
