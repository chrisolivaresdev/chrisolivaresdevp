"use client"

import React, { useEffect, useRef, useState, useMemo } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-context"

function SkillsComponent() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const { t } = useLanguage()

  const skillCategories = useMemo(
    () => [
      {
        title: t("skills.frontend"),
        icon: "🎨",
        skills: [
          { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          {
            name: "Angular",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
          },
          {
            name: "TypeScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          },
          {
            name: "JavaScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          },
          { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
          { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
          {
            name: "Tailwind CSS",
            logo: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg",
          },
        ],
      },
      {
        title: t("skills.backend"),
        icon: "⚙️",
        skills: [
          { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
          { name: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
          { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        ],
      },
      {
        title: t("skills.database"),
        icon: "🛠️",
        skills: [
          { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
          {
            name: "SQL Server",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
          },
          { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
          { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
          { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        ],
      },
    ],
    [t],
  )

  const { translations } = useLanguage()

  const softSkills = useMemo(() => translations?.skills?.softSkillsList ?? [], [translations])

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

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t("skills.title").split(" ")[0]} <span className="gradient-text">{t("skills.title").split(" ")[1]}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("skills.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className={`border-0 shadow-lg bg-card/50 backdrop-blur-sm transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className={`flex flex-col items-center p-4 rounded-lg bg-background/50 hover:bg-primary/5 transition-all duration-300 transform hover:scale-105 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      style={{ animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms` }}
                    >
                      <Image
                        src={skill.logo || "/placeholder.svg"}
                        alt={skill.name}
                        width={48}
                        height={48}
                        className="mb-2 object-contain"
                        unoptimized
                        loading="lazy"
                      />
                      <span className="font-medium text-sm text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center">
                <span className="text-2xl mr-3">🧠</span>
                {t("skills.softSkills")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {softSkills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className={`px-4 py-2 text-sm font-medium bg-card/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 ${
                      isVisible ? "animate-fade-in-up" : ""
                    }`}
                    style={{ animationDelay: `${800 + index * 50}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications Preview */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">{t("skills.continuousLearning")}</h3>
              <p className="text-muted-foreground mb-6">{t("skills.learningDescription")}</p>
              <div className="flex justify-center">
                <Badge className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2">
                  {t("skills.platziCerts")}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export const Skills = React.memo(SkillsComponent)
