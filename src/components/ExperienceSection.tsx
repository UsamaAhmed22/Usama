import { Briefcase } from 'lucide-react';

const responsibilities = [
  'Assisted in building and maintaining CI/CD pipelines using Jenkins',
  'Containerized applications using Docker for consistent environments',
  'Supported Kubernetes deployments by updating manifests and monitoring pods',
  'Worked in Linux-based environments with cloud-native DevOps practices',
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 bg-muted/20">
      <div className="mx-auto max-w-3xl">
        <div className="animate-on-scroll mb-14 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">Experience</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Work History</h2>
        </div>

        <div className="animate-on-scroll relative border-l border-primary/20 pl-8 ml-3">
          <div className="absolute -left-[13px] top-0 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md shadow-primary/20">
            <Briefcase className="h-3 w-3" />
          </div>

          <div className="rounded-2xl glass p-6 sm:p-8">
            <h3 className="text-lg font-semibold">DevOps Intern</h3>
            <p className="mb-1 text-sm font-medium text-primary">Beenco Lab — Karachi</p>
            <p className="mb-5 text-xs text-muted-foreground">Dec 2025 – Present</p>

            <ul className="space-y-3">
              {responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-3 text-[13px] leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
