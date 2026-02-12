import { ArrowDown, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const badges = ['Jenkins', 'Docker', 'Kubernetes', 'GitOps', 'AWS', 'Azure', 'Linux', 'Argo CD'];

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[85vh] items-center px-6 pt-14">
      {/* Subtle grid pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-[0.15em] uppercase text-primary"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          DevOps Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-5 text-3xl font-bold leading-[1.2] tracking-tight sm:text-4xl lg:text-5xl"
        >
          CI/CD <span className="text-muted-foreground font-normal">•</span> Docker{' '}
          <span className="text-muted-foreground font-normal">•</span> Kubernetes{' '}
          <span className="text-muted-foreground font-normal">•</span>{' '}
          <span className="text-gradient">Cloud</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-8 max-w-xl text-[15px] leading-[1.8] text-muted-foreground"
        >
          Fresh graduate DevOps Engineer with hands-on internship experience in Jenkins pipelines,
          Docker containerization, Kubernetes deployments, and GitOps using Argo CD.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-10 flex flex-wrap items-center gap-3"
        >
          <Button size="lg" className="rounded-xl font-medium" asChild>
            <a href="#projects">
              <ArrowDown className="mr-2 h-4 w-4" /> View Projects
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-xl border-border/60 font-medium" asChild>
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap items-center gap-2"
        >
          {badges.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 + i * 0.06 }}
            >
              <Badge
                variant="secondary"
                className="px-3 py-1 text-xs font-mono rounded-full border-0"
              >
                {b}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-8 inline-flex items-center gap-2 text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for opportunities
        </motion.div>
      </div>
    </section>
  );
}
