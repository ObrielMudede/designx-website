"use client"

import React from "react"

import { useState } from "react"
import { ArrowRight, Clock, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    schoolName: "",
    contactName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to an API
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-accent py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-accent-foreground sm:text-5xl">
                Get in Touch
              </h1>
              <p className="mt-6 text-pretty text-lg text-accent-foreground/80 leading-relaxed">
                We work with primary and secondary schools only. Fast WhatsApp response during business hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* WhatsApp CTA */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Fastest Way to Reach Us
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  WhatsApp is our preferred communication channel. You&apos;ll get a quick response during business hours.
                </p>

                <Card className="mt-8 border-2 border-primary bg-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-foreground">
                      <MessageCircle className="h-5 w-5 text-primary" />
                      WhatsApp Chat
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Click below to start a conversation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="lg" className="w-full" asChild>
                      <a
                        href="https://wa.me/263718032047"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Start WhatsApp Chat
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Business Hours</p>
                      <p className="text-sm text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-sm text-muted-foreground">Saturday: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">Based in Zimbabwe</p>
                      <p className="text-sm text-muted-foreground">Serving schools nationwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Send Us a Message</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      Fill out the form below and we&apos;ll get back to you shortly.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {submitted ? (
                      <div className="py-8 text-center">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <MessageCircle className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-card-foreground">Message Sent!</h3>
                        <p className="mt-2 text-muted-foreground">
                          Thank you for reaching out. We&apos;ll respond within 24 hours.
                        </p>
                        <Button className="mt-6 bg-transparent" variant="outline" onClick={() => setSubmitted(false)}>
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="schoolName" className="text-card-foreground">School Name</Label>
                            <Input
                              id="schoolName"
                              name="schoolName"
                              value={formData.schoolName}
                              onChange={handleChange}
                              placeholder="ABC Primary School"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="contactName" className="text-card-foreground">Your Name</Label>
                            <Input
                              id="contactName"
                              name="contactName"
                              value={formData.contactName}
                              onChange={handleChange}
                              placeholder="John Doe"
                              required
                            />
                          </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-card-foreground">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="school@example.com"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-card-foreground">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+263 77 123 4567"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-card-foreground">How Can We Help?</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your school and what services you're interested in..."
                            rows={4}
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full" size="lg">
                          Send Message
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <p className="text-center text-xs text-muted-foreground">
                          We work exclusively with primary and secondary schools.
                        </p>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
