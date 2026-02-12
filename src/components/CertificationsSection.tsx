import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

const certs = [
  { title: 'Introduction to Git & GitHub', issuer: 'Coursera' },
  { title: 'Docker for Beginners', issuer: 'KodeKloud' },
  { title: 'Bash Shell and Basic Scripting in Linux', issuer: 'Coursera' },
  { title: 'Scrum Foundation Professional Certificate (SFPC)', issuer: 'CertiProf' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">Certifications</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Credentials</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          className="grid gap-3 sm:grid-cols-2"
        >
          {certs.map((c) => (
            <motion.div
              key={c.title}
              variants={item}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="group rounded-2xl border border-border/50 bg-card p-5 transition-shadow duration-300 hover:shadow-md hover:shadow-primary/5"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-medium text-sm leading-snug">{c.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{c.issuer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
