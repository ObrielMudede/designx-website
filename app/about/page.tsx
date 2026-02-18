import Link from "next/link"
import { ArrowRight, Code, Lightbulb, Palette, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { images } from "@/lib/image-config"


const values = [
  {
    icon: Target,
    title: "School-Focused",
    description: "We work exclusively with primary and secondary schools. This focus allows us to truly understand your unique needs.",
  },
  {
    icon: Users,
    title: "Parent-Centered",
    description: "Everything we create is designed to build trust with parents and make communication clear and professional.",
  },
  {
    icon: Lightbulb,
    title: "Practical Solutions",
    description: "We deliver straightforward digital solutions that work for schools with busy administrators and limited time.",
  },
  {
    icon: Palette,
    title: "Professional Quality",
    description: "Every flyer, post, and website we create reflects the professionalism your school deserves.",
  },
]

const expertise = [
  { icon: Code, label: "Software Engineering" },
  { icon: Palette, label: "Graphic Design" },
  { icon: Users, label: "Digital Media" },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-accent py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-accent-foreground sm:text-5xl">
                About DesignX
              </h1>
              <p className="mt-6 text-pretty text-lg text-accent-foreground/80 leading-relaxed">
                A digital marketing partner dedicated to helping schools communicate professionally online.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Our Story
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    DesignX was founded by Obriel Mudede with a clear mission: to help schools build strong, professional online presences that parents trust.
                  </p>
                  <p>
                    Based in Zimbabwe, we bring together expertise in software engineering, graphic design, and digital media to create practical solutions for schools.
                  </p>
                  <p>
                    We understand that school administrators are busy. That&apos;s why we handle the digital work—from Facebook posts to flyer designs—so you can focus on what matters most: education.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  {expertise.map((item) => (
                    <div key={item.label} className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
                      <item.icon className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-secondary-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border bg-secondary p-8">
                <div className="flex h-48 items-center justify-center rounded-lg bg-accent">
                  <div className="text-center">
                  <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border border-border bg-muted">
  <Image
    src={images.founderPhoto}
    alt="Obriel Mudede - Founder of DesignX"
    width={96}
    height={96}
    className="h-full w-full object-cover"
    priority
  />
</div>

                    <p className="mt-4 font-semibold text-accent-foreground">Obriel Mudede</p>
                    <p className="text-sm text-accent-foreground/70">Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="border-y border-border bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Our Mission</h3>
                <p className="mt-4 text-xl font-medium text-card-foreground leading-relaxed">
                  To help schools stay visible and trusted by parents through consistent, professional digital communication.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Our Vision</h3>
                <p className="mt-4 text-xl font-medium text-card-foreground leading-relaxed">
                  To become the leading digital partner for primary and secondary schools across Zimbabwe and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What We Stand For
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our values guide everything we do for the schools we serve.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-primary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Ready to Work Together?
              </h2>
              <p className="mt-4 text-primary-foreground/80 leading-relaxed">
                Let&apos;s discuss how we can help your school grow online.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <a
                    href="https://wa.me/263718032047"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start WhatsApp Chat
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
