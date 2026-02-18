import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const packages = [
  {
    name: "Basic Package",
    price: "$100",
    period: "/month",
    description: "Perfect for schools starting their digital journey",
    features: [
      "2 posts per week (text, images, short videos)",
      "Basic engagement (responding to comments/messages)",
      "Monthly performance report",
    ],
    popular: false,
  },
  {
    name: "Standard Package",
    price: "$200",
    period: "/month",
    description: "Enhanced visibility and engagement",
    features: [
      "3 posts per week (text, images, short videos)",
      "Enhanced engagement (responding & interacting with followers)",
      "Monthly analytics report",
    ],
    popular: false,
  },
  {
    name: "Enhanced Standard",
    price: "$300",
    period: "/month",
    description: "Best for consistent growth",
    features: [
      "5 posts per week (text, images, short videos)",
      "Enhanced engagement",
      "Monthly analytics report",
    ],
    popular: true,
  },
  {
    name: "Premium Package",
    price: "$400",
    period: "/month",
    description: "Complete digital marketing solution",
    features: [
      "Daily posts (7 per week, including videos)",
      "Comprehensive engagement (community management)",
      "Weekly analytics report",
      "Basic social media advertising ($30 ad spend included)",
    ],
    popular: false,
    isPremium: true,
  },
]

const faqs = [
  {
    question: "How does the Facebook management work?",
    answer: "We create and schedule professional posts for your school's Facebook page. You provide us with information about events, announcements, and achievements, and we turn them into engaging content.",
  },
  {
    question: "Can I upgrade my package later?",
    answer: "Yes! You can upgrade from Starter to Growth package at any time. We'll simply adjust your billing for the next month.",
  },
  {
    question: "How is website design priced?",
    answer: "Website design is priced separately based on your school's size and specific requirements. Contact us for a custom quote.",
  },
  {
    question: "What information do you need from us?",
    answer: "We'll need access to your Facebook page, your school's branding guidelines (colors, logo), and regular updates about school activities and announcements.",
  },
  {
    question: "How quickly can you start?",
    answer: "Once you sign up, we can typically begin creating content within 3-5 business days. Website projects take longer depending on scope.",
  },
]

export default function PackagesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-accent py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-accent-foreground sm:text-5xl">
                Simple, Transparent Pricing
              </h1>
              <p className="mt-6 text-pretty text-lg text-accent-foreground/80 leading-relaxed">
                Choose the package that fits your school&apos;s needs. All packages include professional support and quality designs.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {packages.map((pkg) => (
                <Card
                  key={pkg.name}
                  className={`relative flex flex-col border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                    pkg.popular ? "border-2 border-primary shadow-lg" : ""
                  } ${pkg.isPremium ? "border-2 border-accent" : ""}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                        Most Popular
                      </span>
                    </div>
                  )}
                  {pkg.isPremium && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-accent px-4 py-1 text-sm font-medium text-accent-foreground">
                        Premium
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl text-card-foreground">{pkg.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">{pkg.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                      <span className="text-muted-foreground">{pkg.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <ul className="flex-1 space-y-3">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                          <span className="text-sm text-card-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="mt-8 w-full"
                      variant={pkg.popular ? "default" : "outline"}
                      size="lg"
                      asChild
                    >
                      <a
                        href={`https://wa.me/263718032047?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(pkg.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 rounded-xl border border-border bg-secondary p-8 text-center">
              <h3 className="text-xl font-semibold text-secondary-foreground">Need a Custom Website?</h3>
              <p className="mt-2 text-muted-foreground">
                Website design is priced separately depending on your school&apos;s size and requirements.
              </p>
              <Button className="mt-6" size="lg" asChild>
                <a
                  href="https://wa.me/263718032047?text=Hi%2C%20I%27m%20interested%20in%20a%20custom%20school%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="border-t border-border bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <div className="mt-12 space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-lg border border-border bg-card p-6">
                  <h3 className="text-lg font-semibold text-card-foreground">{faq.question}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground">Still have questions?</p>
              <Button className="mt-4" size="lg" asChild>
                <a
                  href="https://wa.me/263718032047?text=Hi%2C%20I%20have%20a%20question%20about%20your%20packages"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
