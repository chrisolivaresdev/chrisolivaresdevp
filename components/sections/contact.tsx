"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, MapPin, MessageCircle, Coffee } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.emailLabel"),
      value: "chrisolivaresdev@gmail.com",
      href: "mailto:chrisolivaresdev@gmail.com",
      color: "text-primary",
    },
    {
      icon: Github,
      label: t("contact.githubLabel"),
      value: "github.com/chrisolivaresdev",
      href: "https://github.com/chrisolivaresdev",
      color: "text-foreground",
    },
    {
      icon: Linkedin,
      label: t("contact.linkedinLabel"),
      value: "linkedin.com/in/chrisolivaresdev",
      href: "https://www.linkedin.com/in/chrisolivaresdev/",
      color: "text-blue-600",
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: "Venezuela",
      href: null,
      color: "text-accent",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t("contact.title").split(" ")[0]} <span className="gradient-text">{t("contact.title").split(" ")[1]}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 justify-center">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  {t("contact.getInTouch")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-center">{t("contact.description")}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                        <info.icon className={`h-5 w-5 ${info.color}`} />
                      </div>
                      <div>
                        <div className="font-medium text-sm text-muted-foreground">{info.label}</div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-foreground font-medium">{info.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2 justify-center">
                  <Coffee className="h-5 w-5 text-primary" />
                  {t("contact.quickConnect")}
                </h3>
                <div className="grid sm:grid-cols-3 gap-3">
                  <Button
                    className="w-full justify-center bg-card/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    variant="ghost"
                    asChild
                  >
                    <a href="mailto:chrisolivaresdev@gmail.com">
                      <Mail className="h-4 w-4 mr-2" />
                      {t("contact.sendEmail")}
                    </a>
                  </Button>
                  <Button
                    className="w-full justify-center bg-card/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    variant="ghost"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/chrisolivaresdev/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      {t("contact.linkedinMessage")}
                    </a>
                  </Button>
                  <Button
                    className="w-full justify-center bg-card/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    variant="ghost"
                    asChild
                  >
                    <a href="https://github.com/chrisolivaresdev" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      {t("contact.viewGithub")}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">{t("contact.readyTitle")}</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{t("contact.readyDescription")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <a href="mailto:chrisolivaresdev@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    {t("contact.startConversation")}
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105 bg-transparent"
                  asChild
                >
                  <a href="#experience">
                    <Coffee className="mr-2 h-5 w-5" />
                    {t("contact.viewMyWork")}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
