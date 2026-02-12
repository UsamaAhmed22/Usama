import { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: 'Please fill in all fields', variant: 'destructive' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ title: 'Please enter a valid email', variant: 'destructive' });
      return;
    }

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    emailjs
      .send('service_2dq881s', 'template_ky9a1lh', templateParams, 'bIBGwUW9lGQXPmbcn')
      .then(
        () => {
          toast({ title: 'Message sent!', description: 'Thank you for reaching out.' });
          setForm({ name: '', email: '', message: '' });
        },
        () => {
          toast({ title: 'Something went wrong, please try again.', variant: 'destructive' });
        }
      );
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: 'usamaahmed30@yahoo.com', href: 'mailto:usamaahmed30@yahoo.com' },
    { icon: MapPin, label: 'Location', value: 'Karachi, Pakistan' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/usamaahmed30', href: 'https://www.linkedin.com/in/usamaahmed30' },
    { icon: Github, label: 'GitHub', value: 'github.com/UsamaAhmed22', href: 'https://github.com/UsamaAhmed22' },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">Contact</p>
          <h2 className="text-2xl font-semibold sm:text-3xl">Get In Touch</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-4 h-0.5 rounded-full bg-primary/40"
          />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            {contactItems.map((ci, i) => (
              <motion.div
                key={ci.label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.15 + i * 0.08 }}
                whileHover={{ x: 4, transition: { duration: 0.15 } }}
                className="flex items-center gap-3"
              >
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.05 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"
                >
                  <ci.icon className="h-4 w-4" />
                </motion.div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{ci.label}</p>
                  {ci.href ? (
                    <a
                      href={ci.href}
                      target={ci.href.startsWith('http') ? '_blank' : undefined}
                      rel={ci.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm font-medium hover:text-primary transition-colors duration-200"
                    >
                      {ci.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{ci.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-border/50 bg-card p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div whileFocus={{ scale: 1.01 }}>
                <Input
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  className="rounded-xl bg-muted/40 border-border/40 focus:border-primary/40 transition-all duration-200"
                />
              </motion.div>
              <Input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="rounded-xl bg-muted/40 border-border/40 focus:border-primary/40 transition-all duration-200"
              />
              <Textarea
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                className="rounded-xl bg-muted/40 border-border/40 focus:border-primary/40 resize-none transition-all duration-200"
              />
              <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" className="w-full gap-2 rounded-xl font-medium">
                  <Send className="h-4 w-4" /> Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
