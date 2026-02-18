import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { images } from "@/lib/image-config"

const portfolioCategories = [
  {
    title: "School Flyers",
    description: "Professional enrollment and event flyers",
    images: images.portfolio.flyers,
    labels: [
      "School Admission",
      "Did You Know",
      "Term Opening Flyer",
      "Audience Directed Flyer",
      "Enrollment Campaign",
      "School Event Flyer",
      "Admissions Flyer",
    ],
  },
  {
    title: "Facebook Posts",
    description: "Engaging social media content",
    images: images.portfolio.facebookPosts,
    labels: [
      "Student Achievement Layout",
      "School Activity Layout",
      "Page Layout",
    ],
  },
  {
    title: "Website Mockups",
    description: "Modern school website designs",
    images: images.portfolio.websites,
    labels: [
      "Primary School Website",
      "Secondary School Website",
    ],
  },
]

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-accent py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-accent-foreground sm:text-5xl">
                Our Portfolio
              </h1>
              <p className="mt-6 text-pretty text-lg text-accent-foreground/80 leading-relaxed">
                Sample school projects showcasing our design and digital marketing work.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Sections */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {portfolioCategories.map((category) => (
                <div key={category.title}>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                      {category.title}
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {category.images.map((src, index) => (
                      <Card
                        key={src}
                        className="group overflow-hidden border-border transition-shadow hover:shadow-lg"
                      >
                        <div className="relative aspect-[4/3] bg-muted">
                          <Image
                            src={src}
                            alt={category.labels[index] || category.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        <CardHeader className="p-4">
                          <CardTitle className="text-base text-card-foreground">
                            {category.labels[index] || "Portfolio Item"}
                          </CardTitle>
                          <CardDescription className="text-sm text-muted-foreground">
                            {category.title}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* More Portfolio CTA */}
            <div className="mt-16 rounded-xl border border-border bg-secondary p-8 text-center">
              <h3 className="text-xl font-semibold text-secondary-foreground">
                Want to See More?
              </h3>
              <p className="mt-2 text-muted-foreground">
                Contact us for a personalized portfolio presentation tailored to your school&apos;s needs.
              </p>
              <Button className="mt-6" size="lg" asChild>
                <a
                  href="https://wa.me/263718032047?text=Hi%2C%20I%27d%20like%20to%20see%20more%20of%20your%20portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request Full Portfolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-primary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Ready to Create Something Great?
              </h2>
              <p className="mt-4 text-primary-foreground/80 leading-relaxed">
                Let&apos;s work together to elevate your school&apos;s digital presence.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <a
                    href="https://wa.me/263718032047"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start a Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                >
                  <Link href="/packages">View Pricing</Link>
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
