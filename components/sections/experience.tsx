"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, ExternalLink, Briefcase } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export function Experience() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  const { translations } = useLanguage()

  const experiences = translations.experience.items

  const freelanceProjects = translations.experience.freelanceProjects

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate items with staggered delay
          experiences.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index])
            }, index * 300)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {translations.experience.title}{" "}
            <span className="gradient-text">{translations.experience.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{translations.experience.subtitle}</p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative transition-all duration-1000 ${
                  visibleItems.includes(index) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background hidden md:block" />

                <div className="md:ml-20">
                  <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl mb-2 flex items-center gap-2">
                            <Briefcase className="h-5 w-5 text-primary" />
                            {exp.position}
                            {exp.current && (
                              <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                                {translations.experience.current}
                              </Badge>
                            )}
                          </CardTitle>
                          <h4 className="text-lg font-semibold text-primary mb-2">{exp.company}</h4>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <CalendarDays className="h-4 w-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </div>
                            <Badge variant="outline">{exp.type}</Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Description */}
                      <div>
                        <h5 className="font-semibold mb-3">{translations.experience.responsibilities}:</h5>
                        <ul className="space-y-2">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      {exp.achievements && (
                        <div>
                          <h5 className="font-semibold mb-3">{translations.experience.achievements}:</h5>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Technologies */}
                      <div>
                        <h5 className="font-semibold mb-3">{translations.experience.technologies}:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Freelance Projects */}
        <div
          className={`mt-20 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            {translations.experience.freelance}{" "}
            <span className="gradient-text">{translations.experience.projects}</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {freelanceProjects.map((project, index) => (
              <Card
                key={project.name}
                className={`border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${1200 + index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-lg">{project.name}</span>
                    {project.url !== "#" && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-accent transition-colors duration-200"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{project.period}</p>
                </CardHeader>
                <CardContent>
                  {project.description && <p className="text-sm text-muted-foreground mb-4">{project.description}</p>}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Career Summary */}
        <div
          className={`mt-16 transition-all duration-1000 delay-1400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-4">{translations.experience.highlights}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">5+</div>
                  <div className="text-sm text-muted-foreground">{translations.experience.yearsExp}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">3</div>
                  <div className="text-sm text-muted-foreground">{translations.experience.companies}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">{translations.experience.projects}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">{translations.experience.satisfaction}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
