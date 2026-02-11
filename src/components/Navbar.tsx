import { useState } from 'react';
import { Menu, Download } from 'lucide-react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from './ui/sheet';

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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="text-base font-semibold tracking-tight text-gradient">
          USAMA AHMED
        </a>

        <div className="hidden items-center gap-0.5 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/50"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <a
            href="/resume/UsamaAhmed_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button size="sm" className="gap-1.5 rounded-xl text-xs font-medium shadow-sm">
              <Download className="h-3.5 w-3.5" /> Resume
            </Button>
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden h-9 w-9">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 glass-strong">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="mt-8 flex flex-col gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted/50"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="/resume/UsamaAhmed_Resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2"
                >
                  <Button size="sm" className="w-full gap-2 rounded-xl">
                    <Download className="h-4 w-4" /> Download Resume
                  </Button>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
