import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";

const Services = () => {
  return (
    <Layout>
      <section className="bg-gradient-subtle">
        <div className="container py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our services</h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              A curated set of offerings designed to help you ship faster and grow with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ id, icon: Icon, title, description, price }) => (
              <article
                key={id}
                className="group rounded-xl border border-border bg-card p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-hero text-accent-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-lg font-semibold">{title}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
                {price && (
                  <p className="mt-4 text-sm font-medium text-accent">{price}</p>
                )}
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Get in touch
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
