import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { siteConfig } from "@/config/site";

const contactInfo = [
  { Icon: Mail, label: "Email", value: "hello@example.com" },
  { Icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
  { Icon: MapPin, label: "Office", value: "123 Market St, San Francisco" },
];

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Message sent",
        description: "Thanks for reaching out — we'll get back to you soon.",
      });
    }, 600);
  };

  return (
    <Layout>
      <section className="bg-gradient-subtle">
        <div className="container py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get in touch</h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Have a question about {siteConfig.name}? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold tracking-tight">Contact info</h2>
            <ul className="space-y-5">
              {contactInfo.map(({ Icon, label, value }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-hero text-accent-foreground">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{label}</p>
                    <p className="text-sm text-muted-foreground">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-soft space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" required placeholder="How can we help?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required rows={6} placeholder="Tell us a bit more…" />
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitting}>
              {submitting ? "Sending…" : "Send message"}
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
