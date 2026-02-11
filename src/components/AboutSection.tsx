export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="animate-on-scroll mb-3 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">About Me</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Usama Ahmed</h2>
        </div>

        <div className="animate-on-scroll mt-8 rounded-2xl glass p-8 sm:p-10">
          <p className="text-[15px] leading-[1.8] text-muted-foreground sm:text-base">
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
