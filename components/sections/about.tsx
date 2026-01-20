"use client"

import React, { useEffect, useRef, useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Coffee, Code2, Users, Target, Lightbulb } from "lucide-react"
import { useLanguage } from "@/components/language-context"

function AboutComponent() {
  const { t, translations } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  const iconList = [Code2, Users, Target, Lightbulb]
  const values = useMemo(
    () => (translations?.about?.values ?? []).map((v: any, i: number) => ({ ...v, icon: iconList[i] ?? Code2 })),
    [translations],
  )

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t("about.title").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-text">{t("about.title").split(" ").slice(-1)[0]}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("about.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{t("about.journeyTitle")}</h3>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  {translations?.about?.paragraphs?.map((p: string, i: number) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Coffee className="h-4 w-4 text-primary" />
                <span>{t("about.coffee")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-accent" />
                <span>{t("about.passion")}</span>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              {values.map((value: any, index: number) => (
                <Card
                  key={value.title}
                  className={`border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                    isVisible ? "animate-fade-in-up" : ""
                  }`}
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div
          className={`mt-16 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-center mb-6">{t("about.quickFactsTitle")}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {translations?.about?.quickFacts?.map((fact: any, i: number) => (
                  <div key={i}>
                    <div className={`text-2xl font-bold ${i % 2 === 0 ? "text-primary" : "text-accent"} mb-1`}>
                      {fact.title}
                    </div>
                    <div className="text-sm text-muted-foreground">{fact.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export const About = React.memo(AboutComponent)
