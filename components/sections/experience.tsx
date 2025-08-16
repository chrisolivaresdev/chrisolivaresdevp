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

  const { language, translations } = useLanguage()

  const experiences = [
    {
      id: 1,
      company: "WCS (Sistemas Webconsult Colombia)",
      position: language === "en" ? "Full Stack Developer" : "Desarrollador Full Stack",
      type: language === "en" ? "Full Time" : "Tiempo Completo",
      period: language === "en" ? "Oct 2023 - Present" : "Oct 2023 - Presente",
      location: "Colombia",
      current: true,
      description:
        language === "en"
          ? [
              "Implemented interactive and responsive user interfaces using Angular and React with Next.js",
              "Designed and developed reusable components to improve efficiency and consistency in frontend development",
              "Guaranteed code quality through implementation of good development practices and code reviews",
              "Collaborated closely with designers, project managers and developers in agile environments",
              "Provided ongoing support for applications, resolving bugs and improving functionality",
            ]
          : [
              "Implementé interfaces de usuario interactivas y responsivas usando Angular y React con Next.js",
              "Diseñé y desarrollé componentes reutilizables para mejorar la eficiencia y consistencia en el desarrollo frontend",
              "Garanticé la calidad del código mediante la implementación de buenas prácticas de desarrollo y revisiones de código",
              "Colaboré estrechamente con diseñadores, gerentes de proyecto y desarrolladores en entornos ágiles",
              "Proporcioné soporte continuo para aplicaciones, resolviendo errores y mejorando la funcionalidad",
            ],
      technologies: [
        "Angular",
        "React",
        "Next.js",
        "TypeScript",
        "C#",
        ".NET",
        "Node.js",
        "Express.js",
        "NestJS",
        "MongoDB",
        "SQL",
        "Tailwind CSS",
        "Bootstrap",
      ],
      achievements:
        language === "en"
          ? [
              "Led frontend architecture decisions for multiple projects",
              "Improved code quality through comprehensive review processes",
              "Mentored junior developers in best practices",
            ]
          : [
              "Lideré decisiones de arquitectura frontend para múltiples proyectos",
              "Mejoré la calidad del código a través de procesos de revisión integrales",
              "Mentoré desarrolladores junior en mejores prácticas",
            ],
    },
    {
      id: 2,
      company: "GlobalResources",
      position: language === "en" ? "Frontend Developer" : "Desarrollador Frontend",
      type: language === "en" ? "Full Time" : "Tiempo Completo",
      period: language === "en" ? "Mar 2024 - Present" : "Mar 2024 - Presente",
      location: language === "en" ? "Remote" : "Remoto",
      current: true,
      description:
        language === "en"
          ? [
              "Specialized in React development for modern web applications",
              "Collaborated with international teams on scalable frontend solutions",
              "Implemented responsive designs and optimized user experiences",
              "Participated in agile development processes and sprint planning",
            ]
          : [
              "Especializado en desarrollo React para aplicaciones web modernas",
              "Colaboré con equipos internacionales en soluciones frontend escalables",
              "Implementé diseños responsivos y optimicé experiencias de usuario",
              "Participé en procesos de desarrollo ágil y planificación de sprints",
            ],
      technologies: ["React", "TypeScript", "JavaScript", "CSS3", "HTML5", "Git"],
      achievements:
        language === "en"
          ? [
              "Successfully delivered multiple React-based projects",
              "Improved application performance through optimization techniques",
            ]
          : [
              "Entregué exitosamente múltiples proyectos basados en React",
              "Mejoré el rendimiento de aplicaciones a través de técnicas de optimización",
            ],
    },
    {
      id: 3,
      company: "DisaService",
      position: language === "en" ? "Frontend Developer" : "Desarrollador Frontend",
      type: language === "en" ? "Full Time" : "Tiempo Completo",
      period: language === "en" ? "Jun 2021 - Jun 2023" : "Jun 2021 - Jun 2023",
      location: "Colombia",
      current: false,
      description:
        language === "en"
          ? [
              "Designed and developed attractive and functional user interfaces using Angular as the main framework",
              "Successfully integrated services and backend APIs into user interfaces using Angular best practices",
              "Diagnosed and solved technical problems and errors in the frontend",
              "Actively contributed to team meetings and code review sessions",
              "Focused on creating intuitive user experiences that improved customer satisfaction",
            ]
          : [
              "Diseñé y desarrollé interfaces de usuario atractivas y funcionales usando Angular como framework principal",
              "Integré exitosamente servicios y APIs backend en interfaces de usuario usando mejores prácticas de Angular",
              "Diagnostiqué y resolví problemas técnicos y errores en el frontend",
              "Contribuí activamente en reuniones de equipo y sesiones de revisión de código",
              "Me enfoqué en crear experiencias de usuario intuitivas que mejoraron la satisfacción del cliente",
            ],
      technologies: [
        "Angular",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "SASS",
        "Bootstrap",
        "PrimeNG",
        "Angular Material",
        "CSS Grid",
        "Flexbox",
      ],
      achievements:
        language === "en"
          ? [
              "Improved customer satisfaction through intuitive UI design",
              "Established best practices for API integration",
              "Contributed to team knowledge sharing and collaboration",
            ]
          : [
              "Mejoré la satisfacción del cliente a través de diseño de UI intuitivo",
              "Establecí mejores prácticas para integración de APIs",
              "Contribuí al intercambio de conocimientos y colaboración del equipo",
            ],
    },
  ]

  const freelanceProjects = [
    {
      name: "AP Building Maintenance",
      url: "https://apbuildingmaintenence.com/",
      period: language === "en" ? "Jun 2023" : "Jun 2023",
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
    },
    {
      name: "VieraFloors",
      url: "https://vierafloor.com",
      period: language === "en" ? "Sep 2021" : "Sep 2021",
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
    },
    {
      name: "Dexter-Price",
      url: "#",
      period: language === "en" ? "Nov 2021" : "Nov 2021",
      description:
        language === "en"
          ? "Website focused on selling coloring books for children"
          : "Sitio web enfocado en la venta de libros para colorear para niños",
      technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
    },
  ]

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
