import Link from "next/link"
import { ArrowRight, Calendar, CheckCircle, ImageIcon, Layout, MessageCircle, MousePointer, Palette, Search, Settings, Share2, Smartphone, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const flyerFeatures = [
  { icon: ImageIcon, text: "Enrollment flyers" },
  { icon: Calendar, text: "Events and announcements" },
  { icon: Smartphone, text: "Print-ready and WhatsApp-ready designs" },
  { icon: Palette, text: "Consistent school branding" },
]

const facebookFeatures = [
  { icon: Calendar, text: "Weekly Facebook posts" },
  { icon: ImageIcon, text: "Professional visuals" },
  { icon: TrendingUp, text: "Page activity consistency" },
  { icon: MessageCircle, text: "Parent-focused communication" },
]

const websiteDesignFeatures = [
  { icon: Smartphone, text: "Modern, mobile-friendly design" },
  { icon: Layout, text: "Pages: Home, About, Admissions, Contact" },
  { icon: MousePointer, text: "Clear information for parents" },
  { icon: Share2, text: "Easy to share and navigate" },
]

const websiteManagementFeatures = [
  { icon: Settings, text: "Content updates" },
  { icon: Calendar, text: "Notices and calendars" },
  { icon: Search, text: "Basic SEO" },
  { icon: TrendingUp, text: "Monthly performance checks" },
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-accent py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-accent-foreground sm:text-5xl">
                Our Services
              </h1>
              <p className="mt-6 text-pretty text-lg text-accent-foreground/80 leading-relaxed">
                Comprehensive digital marketing solutions designed specifically for primary and secondary schools.
              </p>
            </div>
          </div>
        </section>

        {/* Flyer & Graphic Design */}
        <section id="flyer-design" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  Design Services
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Flyer & Graphic Design for Schools
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Professional, eye-catching designs that communicate your school&apos;s message clearly. From enrollment campaigns to event announcements, we create visuals that parents notice and trust.
                </p>

                <ul className="mt-8 space-y-4">
                  {flyerFeatures.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-foreground">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <Button className="mt-8" size="lg" asChild>
                  <a
                    href="https://wa.me/263718032047?text=Hi%2C%20I%27m%20interested%20in%20flyer%20design%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="rounded-xl border border-border bg-secondary p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[3/4] rounded-lg bg-primary/10" />
                  <div className="aspect-[3/4] rounded-lg bg-muted" />
                  <div className="aspect-[3/4] rounded-lg bg-muted" />
                  <div className="aspect-[3/4] rounded-lg bg-primary/10" />
                </div>
                <p className="mt-4 text-center text-sm text-muted-foreground">Flyer layout examples — real samples available in our portfolio</p>
              </div>
            </div>
          </div>
        </section>

        {/* Facebook Management */}
        <section id="facebook-management" className="border-y border-border bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <Card className="overflow-hidden border-border">
                  <div className="bg-accent p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary" />
                      <div>
                        <p className="font-semibold text-accent-foreground">Your School</p>
                        <p className="text-xs text-accent-foreground/70">Just now</p>
                      </div>
                    </div>
                  </div>
                  <div className="aspect-video bg-muted" />
                  <CardContent className="p-4">
                    <p className="text-sm text-card-foreground">
                      Exciting news! Registration for the new term is now open. Visit our office or contact us for more information.
                    </p>
                    <div className="mt-4 flex gap-4 border-t border-border pt-4 text-sm text-muted-foreground">
                      <span>Like</span>
                      <span>Comment</span>
                      <span>Share</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  Social Media
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
                  Facebook Management for Schools
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Keep your school&apos;s Facebook page active and engaging with regular, professional content. We handle the posting so you can focus on education.
                </p>

                <ul className="mt-8 space-y-4">
                  {facebookFeatures.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-secondary-foreground">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <Button className="mt-8" size="lg" asChild>
                  <a
                    href="https://wa.me/263718032047?text=Hi%2C%20I%27m%20interested%20in%20Facebook%20management"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* School Website Design */}
        <section id="website-design" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  Web Development
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  School Website Design
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  A modern, professional website gives parents confidence in your school. We build clean, mobile-friendly sites that showcase what makes your school special.
                </p>

                <ul className="mt-8 space-y-4">
                  {websiteDesignFeatures.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-foreground">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <Button className="mt-8" size="lg" asChild>
                  <a
                    href="https://wa.me/263718032047?text=Hi%2C%20I%27m%20interested%20in%20website%20design"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="rounded-xl border border-border bg-card p-4 shadow-lg">
                <div className="flex items-center gap-2 border-b border-border pb-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-muted" />
                    <div className="h-3 w-3 rounded-full bg-muted" />
                    <div className="h-3 w-3 rounded-full bg-muted" />
                  </div>
                  <div className="flex-1 rounded bg-secondary px-3 py-1 text-center text-xs text-muted-foreground">
                    www.yourschool.com
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="h-6 w-1/3 rounded bg-primary/20" />
                  <div className="aspect-video rounded bg-muted" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-20 rounded bg-secondary" />
                    <div className="h-20 rounded bg-secondary" />
                    <div className="h-20 rounded bg-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Website Management */}
        <section id="website-management" className="border-y border-border bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="order-2 rounded-xl border border-border bg-card p-6 lg:order-1">
                <h3 className="text-lg font-semibold text-card-foreground">Website Health Dashboard</h3>
                <div className="mt-6 space-y-4">
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Content Freshness</span>
                      <span className="font-medium text-primary">Up to date</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-muted">
                      <div className="h-2 w-full rounded-full bg-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Performance Score</span>
                      <span className="font-medium text-card-foreground">92/100</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-muted">
                      <div className="h-2 w-11/12 rounded-full bg-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">SEO Health</span>
                      <span className="font-medium text-card-foreground">Good</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-muted">
                      <div className="h-2 w-4/5 rounded-full bg-primary" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  Ongoing Support
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
                  Website Management & Updates
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Keep your website current and performing well. We handle updates, add new content, and ensure your site continues to serve parents effectively.
                </p>

                <ul className="mt-8 space-y-4">
                  {websiteManagementFeatures.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-secondary-foreground">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <Button className="mt-8" size="lg" asChild>
                  <a
                    href="https://wa.me/263718032047?text=Hi%2C%20I%27m%20interested%20in%20website%20management"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Not Sure Which Service You Need?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Let&apos;s chat! We&apos;ll help you figure out the best approach for your school&apos;s digital presence.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <a
                    href="https://wa.me/263718032047"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/packages">View Packages & Pricing</Link>
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
