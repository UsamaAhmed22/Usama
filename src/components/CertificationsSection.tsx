import { Award } from 'lucide-react';

const certs = [
  { title: 'Introduction to Git & GitHub', issuer: 'Coursera' },
  { title: 'Docker for Beginners', issuer: 'KodeKloud' },
  { title: 'Bash Shell and Basic Scripting in Linux', issuer: 'Coursera' },
  { title: 'Scrum Foundation Professional Certificate (SFPC)', issuer: 'CertiProf' },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-5 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="animate-on-scroll mb-14 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">Certifications</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Credentials</h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {certs.map((c) => (
            <div key={c.title} className="animate-on-scroll group rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary">
                  <Award className="h-4 w-4" />
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
