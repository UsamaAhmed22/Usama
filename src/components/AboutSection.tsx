import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import cloudInfra from '@/assets/cloud-infra.png';

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="mx-auto max-w-5xl">
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

        <div className="mt-10 grid gap-8 items-center md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-border/50 bg-card p-8"
          >
            <p className="text-[15px] leading-[1.85] text-muted-foreground">
              Usama Ahmed is a fresh graduate in Computer Science from Mohammad Ali Jinnah University
              with strong practical experience in CI/CD automation, containerization, GitOps workflows,
              and cloud infrastructure. He has worked as a DevOps Intern at Beenco Lab and has built
              end-to-end DevOps pipelines using Jenkins, DockerHub, SonarQube, Trivy, OWASP Dependency
              Check, ArgoCD, and Kubernetes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex justify-center"
          >
            <motion.img
              style={{ y: imgY }}
              src={cloudInfra}
              alt="Cloud Infrastructure Architecture"
              className="w-full max-w-[380px] rounded-2xl opacity-85"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
