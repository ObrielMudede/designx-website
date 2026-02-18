"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Facebook, Globe, Paintbrush, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { images, fallbackImage } from "@/lib/image-config"

const services = [
  {
    icon: Paintbrush,
    title: "Flyer & Graphic Design",
    description: "Professional enrollment flyers, event announcements, and WhatsApp-ready designs with consistent school branding.",
  },
  {
    icon: Facebook,
    title: "Facebook Management",
    description: "Weekly Facebook posts with professional visuals and parent-focused communication to build trust.",
  },
  {
    icon: Globe,
    title: "School Website Design",
    description: "Modern, mobile-friendly school websites with clear information for parents and prospective families.",
  },
  {
    icon: Settings,
    title: "Website Management",
    description: "Regular content updates, notices, calendars, basic SEO, and monthly performance checks.",
  },
]

const benefits = [
  "Attract more parents and families",
  "Build trust and credibility online",
  "Increase school enrollment",
  "Consistent professional presence",
  "Save time on marketing tasks",
  "Expert support when you need it",
]

// Hero images - Edit these in /lib/image-config.ts
const heroImages = [
  {
    src: images.heroFlyer,
    alt: "Professional school flyer design",
    label: "School Flyer Design",
  },
  {
    src: images.heroFacebookPost,
    alt: "School Facebook post design",
    label: "Facebook Post",
  },
  {
    src: images.heroWebsite,
    alt: "School website mockup",
    label: "School Website",
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
  {/* Background Video */}
  <video
    className="absolute inset-0 h-full w-full object-cover hidden lg:block"
    autoPlay
    loop
    muted
    playsInline
    preload="metadata"
  >
    <source src="/videos/hero-bg.mp4" type="video/mp4" />
  </video>

  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div className="text-center lg:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Helping Primary & Secondary Schools Grow Online
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-white/90 sm:text-xl">
          We help schools attract parents, build trust, and increase enrollment through consistent Facebook content, professional flyers, and well-managed school websites.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
          <Button size="lg" asChild className="shadow-xl">
            <a
              href="https://wa.me/263718032047"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat With Us on WhatsApp
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>

          <Button
  size="lg"
  asChild
  className="border border-white text-white bg-white/20 backdrop-blur-md hover:bg-white/40 hover:text-primary transition-all duration-300"
>
  <Link href="/services">View Our Services</Link>
</Button>

        </div>
      </div>

      {/* Floating images stay as they are */}
      <div className="relative hidden h-[500px] lg:block">
                {/* Main floating image - Flyer */}
                <div className="group absolute left-0 top-8 z-10 animate-[float_6s_ease-in-out_infinite] cursor-pointer rounded-xl border-4 border-card bg-card p-2 shadow-2xl transition-all duration-500 hover:z-30 hover:scale-110 hover:rotate-2 hover:shadow-primary/30">
                  <div className="relative h-48 w-64 overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={heroImages[0].src || fallbackImage}
                      alt={heroImages[0].alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                  </div>
                  <p className="mt-2 text-center text-xs font-medium text-muted-foreground transition-colors duration-300 group-hover:text-primary">{heroImages[0].label}</p>
                </div>

                {/* Second floating image - Facebook */}
                <div className="group absolute right-0 top-0 z-20 animate-[float_6s_ease-in-out_infinite_1s] cursor-pointer rounded-xl border-4 border-card bg-card p-2 shadow-2xl transition-all duration-500 hover:z-30 hover:scale-110 hover:-rotate-2 hover:shadow-primary/30">
                  <div className="relative h-40 w-56 overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={heroImages[1].src || fallbackImage}
                      alt={heroImages[1].alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                   
                  </div>
                  <p className="mt-2 text-center text-xs font-medium text-muted-foreground transition-colors duration-300 group-hover:text-primary">{heroImages[1].label}</p>
                </div>

                {/* Third floating image - Website */}
                <div className="group absolute bottom-0 left-16 z-10 animate-[float_6s_ease-in-out_infinite_2s] cursor-pointer rounded-xl border-4 border-card bg-card p-2 shadow-2xl transition-all duration-500 hover:z-30 hover:scale-110 hover:rotate-1 hover:shadow-primary/30">
                  <div className="relative h-44 w-72 overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={heroImages[2].src || fallbackImage}
                      alt={heroImages[2].alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                   
                  </div>
                  <p className="mt-2 text-center text-xs font-medium text-muted-foreground transition-colors duration-300 group-hover:text-primary">{heroImages[2].label}</p>
                </div>

                {/* Decorative elements */}
                <div className="absolute -right-4 top-1/2 h-24 w-24 animate-pulse rounded-full bg-primary/20" />
                <div className="absolute -left-8 bottom-1/4 h-16 w-16 animate-pulse rounded-full bg-primary/10" />
              </div>
    </div>
  </div>
</section>


        {/* Services Overview */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Digital Services for Schools
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Everything your school needs to build a strong online presence and connect with parents effectively.
              </p>
            </div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <Card 
                  key={service.title} 
                  className="group border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      <service.icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <CardTitle className="mt-4 text-foreground transition-colors duration-300 group-hover:text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" asChild className="group transition-all duration-300 hover:scale-105 bg-transparent">
                <Link href="/services">
                  Learn More About Our Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Purpose
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Driven by a clear mission and vision to support schools in Zimbabwe and beyond.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Our Mission</h3>
                <p className="mt-4 text-xl font-medium text-card-foreground leading-relaxed">
                  To help schools stay visible and trusted by parents through consistent, professional digital communication.
                </p>
              </div>
              <div className="group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Our Vision</h3>
                <p className="mt-4 text-xl font-medium text-card-foreground leading-relaxed">
                  To become the leading digital partner for primary and secondary schools across Zimbabwe and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="border-y border-border bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
                  Why Schools Choose DesignX
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We understand the unique needs of educational institutions. Our focused approach means your school gets dedicated attention and expertise.
                </p>

                <ul className="mt-8 space-y-4">
                  {benefits.map((benefit, index) => (
                    <li 
                      key={benefit} 
                      className="group flex items-center gap-3 transition-transform duration-300 hover:translate-x-2"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-secondary-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-card p-8 shadow-lg transition-all duration-500 hover:shadow-2xl">
                <div className="text-center">
                  <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Most Popular
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-foreground">Growth Package</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">$200</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <ul className="mt-6 space-y-3 text-left">
                    <li className="flex items-center gap-2 text-sm text-card-foreground">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      3 Facebook posts per week (text, images, short videos)
                    </li>
                    <li className="flex items-center gap-2 text-sm text-card-foreground">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      3 professional flyers per month
                    </li>
                    <li className="flex items-center gap-2 text-sm text-card-foreground">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Engagement support
                    </li>
                    <li className="flex items-center gap-2 text-sm text-card-foreground">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Best for visibility & enrollment
                    </li>
                  </ul>
                  <Button className="mt-8 w-full transition-all duration-300 hover:scale-105 hover:shadow-lg" size="lg" asChild>
                    <Link href="/packages">View All Packages</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl bg-primary px-8 py-16 text-center transition-all duration-500 hover:shadow-2xl lg:px-16">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Ready to Grow Your School Online?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-primary-foreground/90 leading-relaxed">
                We work exclusively with primary and secondary schools. Get in touch today for a fast WhatsApp response during business hours.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="group transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <a
                    href="https://wa.me/263718032047"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start WhatsApp Chat
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-primary-foreground/30 text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-primary-foreground/10 bg-transparent"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Custom animation keyframes */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  )
}
