import { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

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
    toast({ title: 'Message sent!', description: 'Thank you for reaching out.' });
    setForm({ name: '', email: '', message: '' });
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: 'usamaahmed30@yahoo.com', href: 'mailto:usamaahmed30@yahoo.com' },
    { icon: MapPin, label: 'Location', value: 'Karachi, Pakistan' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/usamaahmed30', href: 'https://www.linkedin.com/in/usamaahmed30' },
    { icon: Github, label: 'GitHub', value: 'github.com/UsamaAhmed22', href: 'https://github.com/UsamaAhmed22' },
  ];

  return (
    <section id="contact" className="py-24 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="animate-on-scroll mb-14 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">Contact</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Get In Touch</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="animate-on-scroll space-y-5">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-wider">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm font-medium hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="animate-on-scroll rounded-2xl glass p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="rounded-xl bg-muted/50 border-0"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="rounded-xl bg-muted/50 border-0"
              />
              <Textarea
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                className="rounded-xl bg-muted/50 border-0 resize-none"
              />
              <Button type="submit" className="w-full gap-2 rounded-xl shadow-md shadow-primary/20">
                <Send className="h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
