import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-3 text-center"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">About Me</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Usama Ahmed</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 rounded-2xl border border-border/50 bg-card p-8 sm:p-10"
        >
          <p className="text-[15px] leading-[1.85] text-muted-foreground">
            Usama Ahmed is a fresh graduate in Computer Science from Mohammad Ali Jinnah University
            with strong practical experience in CI/CD automation, containerization, GitOps workflows,
            and cloud infrastructure. He has worked as a DevOps Intern at Beenco Lab and has built
            end-to-end DevOps pipelines using Jenkins, DockerHub, SonarQube, Trivy, OWASP Dependency
            Check, ArgoCD, and Kubernetes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
