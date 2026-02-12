import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-border/30 py-8 px-6"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © 2026 Usama Ahmed — DevOps Engineer
        </p>

        <div className="flex items-center gap-1">
          {[
            { icon: Linkedin, href: 'https://www.linkedin.com/in/usamaahmed30' },
            { icon: Github, href: 'https://github.com/UsamaAhmed22' },
          ].map((s) => (
            <motion.div key={s.href} whileHover={{ scale: 1.15, y: -2 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl text-muted-foreground hover:text-foreground" asChild>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  <s.icon className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-6 right-6 z-50 h-10 w-10 rounded-full shadow-lg border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-primary/10"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      </motion.div>
    </motion.footer>
  );
}
