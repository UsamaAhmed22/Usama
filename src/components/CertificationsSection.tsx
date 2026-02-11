import { Award } from 'lucide-react';

const certs = [
  { title: 'Introduction to Git & GitHub', issuer: 'Coursera' },
  { title: 'Docker for Beginners', issuer: 'KodeKloud' },
  { title: 'Bash Shell and Basic Scripting in Linux', issuer: 'Coursera' },
  { title: 'Scrum Foundation Professional Certificate (SFPC)', issuer: 'CertiProf' },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="animate-on-scroll mb-14 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">Certifications</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Credentials</h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {certs.map((c) => (
            <div key={c.title} className="animate-on-scroll group rounded-2xl glass p-5 transition-all duration-300 hover:glow">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/15 transition-colors">
                  <Award className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="font-medium text-sm leading-snug">{c.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{c.issuer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
