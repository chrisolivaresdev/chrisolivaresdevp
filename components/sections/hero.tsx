"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Code, Zap, Rocket, Globe } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import Image from "next/image"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const { language, setLanguage, t } = useLanguage()

  const roles = [t("hero.role1"), t("hero.role2"), t("hero.role3"), t("hero.role4")]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    return () => {
      clearInterval(interval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [roles.length])

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleViewWorkClick = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-[120vh] flex items-center justify-center relative overflow-hidden">
      <div className="fixed bottom-5 left-6 z-50">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLanguage(language === "en" ? "es" : "en")}
          className="bg-background/80 backdrop-blur-md hover:bg-primary/10 transition-colors duration-200 border border-border/50"
        >
          <Globe className="h-4 w-4 mr-1" />
          {language.toUpperCase()}
        </Button>
      </div>

      {/* Animated Background with parallax */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-float"
          style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.05}px)` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                {t("hero.greeting")} <span className="gradient-text">Christopher Olivares</span>
              </h1>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                  <span className="gradient-text">{roles[currentRole]}</span>
                </h2>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                {t("hero.description")}
              </p>
            </div>

            {/* Stats */}
            <div
              className={`transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">{t("hero.years")}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">50+</div>
                  <div className="text-sm text-muted-foreground">{t("hero.projects")}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">{t("hero.dedication")}</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className={`transition-all duration-1000 delay-900 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={handleContactClick}
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  {t("hero.getInTouch")}
                </Button>
                <Button
                  onClick={handleViewWorkClick}
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
                >
                  <ArrowDown className="mr-2 h-5 w-5" />
                  {t("hero.viewWork")}
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div
              className={`transition-all duration-1000 delay-1100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex justify-center lg:justify-start space-x-6">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary transition-colors duration-200"
                  asChild
                >
                  <a href="https://github.com/chrisolivaresdev" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary transition-colors duration-200"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/chrisolivaresdev/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary transition-colors duration-200"
                  asChild
                >
                  <a href="mailto:chrisolivaresdev@gmail.com">
                    <Mail className="h-6 w-6" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="relative min-h-[600px] flex items-center justify-center">
            <div
              className={`transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
              style={{ transform: `translateY(${scrollY * 0.02}px)` }}
            >
              {/* Logo with floating animation - made larger container */}
              <div className="relative mx-auto w-96 h-96 lg:w-[450px] lg:h-[450px]">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Christopher Olivares"
                    width={350}
                    height={350}
                    className="animate-float drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Floating Tech Icons with parallax */}
              <div
                className="absolute top-10 left-10 animate-float delay-500"
                style={{ transform: `translateY(${scrollY * 0.03}px)` }}
              >
                <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                  <Code className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div
                className="absolute top-20 right-10 animate-float delay-1000"
                style={{ transform: `translateY(${-scrollY * 0.04}px)` }}
              >
                <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div
                className="absolute bottom-22 left-20 animate-float delay-1500"
                style={{ transform: `translateY(${scrollY * 0.025}px)` }}
              >
                <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="animate-bounce cursor-pointer" onClick={handleViewWorkClick}>
            <ArrowDown className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors duration-200" />
          </div>
        </div>
      </div>
    </section>
  )
}
