import { useState } from 'react';
import { Menu, Download, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a href="#home" className="text-[15px] font-bold tracking-tight text-foreground">
          USAMA<span className="text-gradient"> AHMED</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground hover:bg-muted/60"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/resume/UsamaAhmed_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button variant="outline" size="sm" className="gap-1.5 rounded-xl text-xs font-medium border-primary/30 text-primary hover:bg-primary/5">
              <Download className="h-3.5 w-3.5" /> Resume
            </Button>
          </a>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-9 w-9"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-full w-72 border-l border-border/50 bg-card p-6 md:hidden"
            >
              <div className="flex justify-end mb-8">
                <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="h-9 w-9">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted/60"
                  >
                    {l.label}
                  </motion.a>
                ))}
                <a
                  href="/resume/UsamaAhmed_Resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4"
                >
                  <Button variant="outline" size="sm" className="w-full gap-2 rounded-xl border-primary/30 text-primary">
                    <Download className="h-4 w-4" /> Download Resume
                  </Button>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
