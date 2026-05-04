import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const Index = () => {
  const featured = services.slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-subtle">
        <div className="container py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              New • Reusable template
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight">
              A clean foundation for your next idea
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A modern, responsive layout with header, main, and footer — ready to extend
              into anything you can imagine.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" className="shadow-elegant" asChild>
                <Link to="/services">
                  Explore services
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured services */}
      <section className="py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Everything you need to start
            </h2>
            <p className="mt-4 text-muted-foreground">
              A solid base layout, designed to feel great and scale with your project.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {featured.map(({ id, icon: Icon, title, description }) => (
              <div
                key={id}
                className="group rounded-xl border border-border bg-card p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-hero text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link to="/services">
                View all services
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-hero px-8 py-16 md:px-16 md:py-20 text-center shadow-elegant">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-accent-foreground">
              Ready to build something great?
            </h2>
            <p className="mt-4 text-accent-foreground/80 max-w-xl mx-auto">
              Start from this base layout and customize every detail to match your vision.
            </p>
            <div className="mt-8">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Start building
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
