"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink, Calendar, Star, BookOpen, Trophy } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export function Certifications() {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const sectionRef = useRef<HTMLElement>(null)
  const { language, translations } = useLanguage()

  const certifications = [
    {
      id: 1,
      title: "Angular Professional",
      provider: "Platzi",
      category: "frontend",
      date: "2023",
      level: "Advanced",
      description: "Advanced Angular concepts, architecture patterns, and best practices",
      skills: ["Angular", "TypeScript", "RxJS", "NgRx"],
      color: "from-red-500 to-red-600",
    },
    {
      id: 2,
      title: "React.js Professional",
      provider: "Platzi",
      category: "frontend",
      date: "2023",
      level: "Advanced",
      description: "Modern React development with hooks, context, and performance optimization",
      skills: ["React", "JavaScript", "Hooks", "Context API"],
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 3,
      title: "JavaScript Professional",
      provider: "Platzi",
      category: "frontend",
      date: "2022",
      level: "Advanced",
      description: "Advanced JavaScript concepts, ES6+, and modern development practices",
      skills: ["JavaScript", "ES6+", "Async/Await", "Modules"],
      color: "from-yellow-500 to-yellow-600",
    },
    {
      id: 4,
      title: "TypeScript Professional",
      provider: "Platzi",
      category: "frontend",
      date: "2023",
      level: "Advanced",
      description: "Type-safe development with TypeScript for scalable applications",
      skills: ["TypeScript", "Interfaces", "Generics", "Decorators"],
      color: "from-blue-600 to-blue-700",
    },
    {
      id: 5,
      title: "Node.js Backend Development",
      provider: "Platzi",
      category: "backend",
      date: "2022",
      level: "Intermediate",
      description: "Server-side development with Node.js and Express.js",
      skills: ["Node.js", "Express.js", "APIs", "Authentication"],
      color: "from-green-500 to-green-600",
    },
    {
      id: 6,
      title: "Database Design & MongoDB",
      provider: "Platzi",
      category: "backend",
      date: "2022",
      level: "Intermediate",
      description: "Database design principles and MongoDB implementation",
      skills: ["MongoDB", "Database Design", "Aggregation", "Indexing"],
      color: "from-green-600 to-green-700",
    },
    {
      id: 7,
      title: "Git & GitHub Professional",
      provider: "Platzi",
      category: "tools",
      date: "2021",
      level: "Advanced",
      description: "Version control mastery and collaborative development workflows",
      skills: ["Git", "GitHub", "Branching", "Collaboration"],
      color: "from-gray-600 to-gray-700",
    },
    {
      id: 8,
      title: "Web Performance Optimization",
      provider: "Platzi",
      category: "frontend",
      date: "2023",
      level: "Advanced",
      description: "Techniques for optimizing web application performance and user experience",
      skills: ["Performance", "Optimization", "Lighthouse", "Core Web Vitals"],
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 9,
      title: "Agile Methodologies & Scrum",
      provider: "Platzi",
      category: "methodology",
      date: "2022",
      level: "Intermediate",
      description: "Agile development practices and Scrum framework implementation",
      skills: ["Scrum", "Agile", "Sprint Planning", "Team Collaboration"],
      color: "from-orange-500 to-orange-600",
    },
  ]

  const categories = [
    { id: "all", label: translations.certifications.allCerts, count: certifications.length },
    {
      id: "frontend",
      label: translations.certifications.frontend,
      count: certifications.filter((c) => c.category === "frontend").length,
    },
    {
      id: "backend",
      label: translations.certifications.backend,
      count: certifications.filter((c) => c.category === "backend").length,
    },
    {
      id: "tools",
      label: translations.certifications.tools,
      count: certifications.filter((c) => c.category === "tools").length,
    },
    {
      id: "methodology",
      label: translations.certifications.methodology,
      count: certifications.filter((c) => c.category === "methodology").length,
    },
  ]

  const filteredCertifications =
    selectedCategory === "all" ? certifications : certifications.filter((cert) => cert.category === selectedCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate items with staggered delay
          filteredCertifications.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index])
            }, index * 100)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [filteredCertifications])

  // Reset visible items when category changes
  useEffect(() => {
    setVisibleItems([])
    if (isVisible) {
      filteredCertifications.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems((prev) => [...prev, index])
        }, index * 100)
      })
    }
  }, [selectedCategory, isVisible])

  return (
    <section id="certifications" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">{translations.certifications.title}</span> &{" "}
            {translations.certifications.learning}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{translations.certifications.subtitle}</p>
        </div>

        {/* Stats Overview */}
        <div
          className={`mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{certifications.length}+</div>
                  <div className="text-sm text-muted-foreground">{translations.certifications.certificationsCount}</div>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <BookOpen className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-accent mb-1">Platzi</div>
                  <div className="text-sm text-muted-foreground">{translations.certifications.platform}</div>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{translations.certifications.advanced}</div>
                  <div className="text-sm text-muted-foreground">{translations.certifications.skillLevel}</div>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <Calendar className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-accent mb-1">2020-2025</div>
                  <div className="text-sm text-muted-foreground">{translations.certifications.period}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category Filter */}
        <div
          className={`mb-12 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-primary to-accent text-white"
                    : "hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {category.label}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((cert, index) => (
            <Card
              key={cert.id}
              className={`border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-500 transform hover:scale-105 group ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <CardHeader className="relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <Award className={`h-6 w-6 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`} />
                    <Badge variant="outline" className="text-xs">
                      {cert.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mb-2">{cert.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-primary">{cert.provider}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{cert.description}</p>

                <div>
                  <h5 className="font-semibold mb-2 text-sm">{translations.certifications.skillsCovered}:</h5>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-primary hover:text-primary-foreground hover:bg-primary transition-colors duration-200"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {translations.certifications.viewCert}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Philosophy */}
        <div
          className={`mt-16 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">{translations.certifications.philosophy}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {translations.certifications.philosophyText}
                </p>
                <div className="flex justify-center">
                  <Button className="bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 transition-all duration-300 transform hover:scale-105">
                    <BookOpen className="h-4 w-4 mr-2" />
                    {translations.certifications.viewAll}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
