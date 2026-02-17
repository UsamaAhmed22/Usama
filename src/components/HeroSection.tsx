import { useState, useEffect, useMemo } from 'react';
import { ArrowDown, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const badges = ['Jenkins', 'Docker', 'Kubernetes', 'GitOps', 'AWS', 'Azure', 'Linux', 'Argo CD'];
const roles = ['CI/CD Pipelines', 'Docker Containers', 'Kubernetes Clusters', 'Cloud Infrastructure', 'GitOps Workflows'];

function useTypingEffect(words: string[], typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

// Animated network/circuit visualization
function NetworkVisualization() {
  const nodes = useMemo(() => 
    Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: 20 + Math.random() * 60,
      y: 10 + Math.random() * 80,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 4,
    })), []
  );

  const connections = useMemo(() => {
    const conns: { x1: number; y1: number; x2: number; y2: number; delay: number }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
        if (dist < 18) {
          conns.push({
            x1: nodes[i].x, y1: nodes[i].y,
            x2: nodes[j].x, y2: nodes[j].y,
            delay: Math.random() * 2,
          });
        }
      }
    }
    return conns;
  }, [nodes]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {/* Connection lines */}
        {connections.map((c, i) => (
          <motion.line
            key={`line-${i}`}
            x1={`${c.x1}%`} y1={`${c.y1}%`}
            x2={`${c.x2}%`} y2={`${c.y2}%`}
            stroke="hsl(var(--primary))"
            strokeWidth="0.15"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0.1, 0.3, 0] }}
            transition={{ duration: 5, delay: c.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
        {/* Nodes */}
        {nodes.map((n) => (
          <motion.circle
            key={`node-${n.id}`}
            cx={`${n.x}%`} cy={`${n.y}%`}
            r={n.size * 0.15}
            fill="hsl(var(--primary))"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.8, 0.3, 0.8, 0], scale: [0.5, 1, 0.8, 1, 0.5] }}
            transition={{ duration: n.duration, delay: n.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
        {/* Glowing accent nodes */}
        {nodes.filter((_, i) => i % 5 === 0).map((n) => (
          <motion.circle
            key={`glow-${n.id}`}
            cx={`${n.x}%`} cy={`${n.y}%`}
            r={n.size * 0.4}
            fill="none"
            stroke="hsl(var(--accent))"
            strokeWidth="0.1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0], scale: [1, 1.8, 1] }}
            transition={{ duration: 3, delay: n.delay + 0.5, repeat: Infinity }}
          />
        ))}
      </svg>
    </div>
  );
}

export function HeroSection() {
  const typedText = useTypingEffect(roles);

  return (
    <section id="home" className="relative flex min-h-[90vh] items-center px-6 pt-14 overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-20 right-[10%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute bottom-20 left-[5%] h-[250px] w-[250px] rounded-full bg-accent/5 blur-[80px]"
      />

      {/* Network visualization on right side */}
      <div className="absolute right-0 top-0 bottom-0 w-[55%] hidden lg:block">
        <NetworkVisualization />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Text content - left aligned, full width on mobile */}
        <div className="max-w-2xl">
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
            className="mb-2 text-3xl font-bold leading-[1.2] tracking-tight sm:text-4xl lg:text-5xl"
          >
            I build & automate
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 h-12 flex items-center"
          >
            <span className="text-2xl font-semibold text-gradient sm:text-3xl lg:text-4xl">
              {typedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
              />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 max-w-xl text-[15px] leading-[1.8] text-muted-foreground"
          >
            Fresh graduate DevOps Engineer with hands-on internship experience in Jenkins pipelines,
            Docker containerization, Kubernetes deployments, and GitOps using Argo CD.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mb-8 flex flex-wrap items-center gap-3"
          >
            <Button size="lg" className="rounded-xl font-medium group" asChild>
              <a href="#projects">
                <motion.span
                  className="inline-flex items-center gap-2"
                  whileHover={{ y: 2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <ArrowDown className="h-4 w-4" /> View Projects
                </motion.span>
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
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-2"
          >
            {badges.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.75 + i * 0.06 }}
                whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
              >
                <Badge variant="secondary" className="px-3 py-1 text-xs font-mono rounded-full border-0">
                  {b}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for opportunities
          </motion.div>
        </div>
      </div>
    </section>
  );
}
