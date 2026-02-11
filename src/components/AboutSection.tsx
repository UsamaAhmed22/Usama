export function AboutSection() {
  return (
    <section id="about" className="py-24 px-5 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="animate-on-scroll mb-3 text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">About Me</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Usama Ahmed</h2>
        </div>

        <div className="animate-on-scroll mt-8 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm p-8 sm:p-10">
          <p className="text-[15px] leading-[1.85] text-muted-foreground sm:text-base">
            Usama Ahmed is a fresh graduate in Computer Science from Mohammad Ali Jinnah University
            with strong practical experience in CI/CD automation, containerization, GitOps workflows,
            and cloud infrastructure. He has worked as a DevOps Intern at Beenco Lab and has built
            end-to-end DevOps pipelines using Jenkins, DockerHub, SonarQube, Trivy, OWASP Dependency
            Check, ArgoCD, and Kubernetes.
          </p>
        </div>
      </div>
    </section>
  );
}
