import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const projects = [
  {
    title: 'CI/CD and GitOps Pipeline on Azure',
    tools: ['Jenkins', 'Docker', 'DockerHub', 'ArgoCD', 'GitHub', 'SonarQube', 'Trivy', 'OWASP', 'K3s'],
    repo: 'https://github.com/UsamaAhmed22/Project_For_Deployment.git',
    caseStudy: '/Usama/case-studies/cicd-case-study.html',
    description:
      'Designed and deployed an end-to-end CI/CD pipeline on Azure VMs. Automated build, testing, Docker image creation, vulnerability scanning, dependency scanning, and code quality gates. Implemented GitOps deployments on K3s using Argo CD with automated sync and self-healing.',
    color: 'from-primary/10 to-accent/5',
  },
  {
    title: 'Full-Stack App with Docker & Docker Compose',
    tools: ['Docker', 'Node.js', 'MongoDB', 'Nginx'],
    repo: 'https://github.com/UsamaAhmed22/Fullstack-App-with-Docker.git',
    description:
      'Designed a multi-container full-stack web application using Docker. Orchestrated services using Docker Compose, reducing setup time by 70%. Configured Nginx reverse proxy for routing and load handling.',
    color: 'from-accent/10 to-primary/5',
  },
  {
    title: 'AWS Cloud Architecture Design',
    tools: ['AWS', 'EC2', 'VPC'],
    description:
      'Designed a scalable and secure cloud environment for a sample workload, focusing on networking, isolation, and resilience. Led peer-review sessions and improved the architecture using feedback.',
    color: 'from-primary/8 to-accent/8',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">Projects</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Featured Work</h2>
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
          className="grid gap-6 md:grid-cols-3"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
              className="group relative flex flex-col rounded-2xl border border-border/50 bg-card overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Gradient accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${p.color}`} />

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-[15px] font-semibold leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="mb-5 text-[13px] leading-relaxed text-muted-foreground flex-1">{p.description}</p>

                <div className="mb-5">
                  <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground/60 mb-2">
                    Tech Used
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tools.map((t) => (
                      <Badge key={t} variant="secondary" className="text-[10px] font-mono rounded-full border-0 px-2.5 py-0.5">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-1">
                  {p.repo ? (
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="gap-1.5 rounded-xl text-xs border-border/60 hover:border-primary/40 transition-colors"
                    >
                      <a href={p.repo} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3.5 w-3.5" /> GitHub
                      </a>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-1.5 rounded-xl text-xs border-border/60 hover:border-primary/40 transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" /> GitHub
                    </Button>
                  )}
                  {p.caseStudy ? (
                    <Button
                      asChild
                      size="sm"
                      variant="ghost"
                      className="gap-1.5 text-xs text-muted-foreground hover:text-primary"
                    >
                      <a href={p.caseStudy} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3.5 w-3.5" /> Case Study
                      </a>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="gap-1.5 text-xs text-muted-foreground hover:text-primary"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Case Study
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
