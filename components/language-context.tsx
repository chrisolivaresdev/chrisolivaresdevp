"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { Code2, Users, Target, Lightbulb } from "lucide-react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  translations: typeof translations.en
}

const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      certifications: "Certifications",
      contact: "Contact",
    },

    // Hero Section
    hero: {
      greeting: "Hi, I'm",
      role1: "Senior Frontend Developer",
      role2: "Computer Science Engineer",
      role3: "Angular Expert",
      role4: "React Specialist",
      description:
        "Computer Science Engineer crafting exceptional user experiences with Angular and React for over 5 years. Transforming ideas into interactive, responsive web applications.",
      years: "Years Exp",
      projects: "Projects",
      dedication: "Dedication",
      getInTouch: "Get In Touch",
      viewWork: "View My Work",
    },

    // About Section
    about: {
      title: "About Me",
      subtitle: "Passionate about creating digital experiences",
      journeyTitle: "My Journey",
      paragraphs: [
        "As a Computer Engineering graduate with over 5 years of experience, I've dedicated my career to mastering the art of frontend development.",
        "My expertise spans across Angular and React ecosystems, where I've built scalable, responsive applications that serve thousands of users daily.",
        "Currently working at WCS and GlobalResources, I continue to push the boundaries of what's possible in web development.",
      ],
      coffee: "Fueled by coffee",
      passion: "Powered by passion",
      values: [
        { title: "Clean Code", description: "Writing maintainable, scalable code following SOLID principles", icon: Code2 },
        { title: "Team Player", description: "Collaborating effectively in agile environments with cross-functional teams", icon: Users },
        { title: "Goal Oriented", description: "Focused on delivering high-quality solutions that exceed expectations", icon: Target, },
        { title: "Innovation", description: "Always exploring new technologies and best practices in development", icon: Lightbulb, },
      ],
      quickFactsTitle: "Quick Facts",
      quickFacts: [
        { title: "Angular", label: "Primary Framework" },
        { title: "React", label: "Secondary Expertise" },
        { title: "Full Stack", label: "Development Approach" },
        { title: "Agile", label: "Methodology Expert" },
      ],
    },

    // Skills Section
    skills: {
      title: "Technical Skills",
      subtitle: "A comprehensive toolkit built through years of hands-on experience and continuous learning",
      frontend: "Frontend Development",
      backend: "Backend Development",
      database: "Database & Tools",
      softSkills: "Soft Skills & Methodologies",
      continuousLearning: "Continuous Learning",
      learningDescription:
        "Committed to staying current with the latest technologies and best practices through continuous education and certification.",
      platziCerts: "Multiple Platzi Certifications",
    },

    // Experience Section
    experience: {
      title: "Work",
      titleHighlight: "Experience",
      subtitle: "A journey of growth, learning, and delivering exceptional results across diverse projects and teams",
      current: "Current",
      responsibilities: "Key Responsibilities",
      achievements: "Key Achievements",
      technologies: "Technologies Used",
      freelance: "Freelance",
      projects: "Projects",
      highlights: "Career Highlights",
      yearsExp: "Years Experience",
      companies: "Companies",
      satisfaction: "Client Satisfaction",
    },

    // Certifications Section
    certifications: {
      title: "Certifications",
      learning: "Learning",
      subtitle:
        "Committed to continuous learning and professional development through comprehensive certification programs",
      certificationsCount: "Certifications",
      platform: "Primary Platform",
      advanced: "Advanced",
      skillLevel: "Skill Level",
      period: "Learning Period",
      allCerts: "All Certifications",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools",
      methodology: "Methodology",
      skillsCovered: "Skills Covered",
      viewCert: "View Certificate",
      philosophy: "Continuous Learning Philosophy",
      philosophyText:
        "In the rapidly evolving world of technology, staying current isn't just an advantage—it's essential. My commitment to continuous learning through platforms like Platzi ensures I'm always equipped with the latest skills and best practices to deliver exceptional results.",
      viewAll: "View All Certificates",
    },

    // Contact Section
    contact: {
      title: "Let's Connect",
      subtitle:
        "Ready to bring your next project to life? Let's discuss how we can work together to create something amazing.",
      getInTouch: "Get In Touch",
      description:
        "I'm always interested in new opportunities, challenging projects, and collaborating with talented teams. Whether you have a project in mind or just want to say hello, feel free to reach out!",
      location: "Location",
      quickConnect: "Quick Connect",
      sendEmail: "Send Email",
      linkedinMessage: "LinkedIn Message",
      viewGithub: "View GitHub",
      readyTitle: "Ready to Start Your Project?",
      readyDescription:
        "Let's turn your ideas into reality. With over 5 years of experience in frontend development, I'm ready to help you build something extraordinary.",
      startConversation: "Start a Conversation",
      viewMyWork: "View My Work",
    },
  },
  es: {
    // Navigation
    nav: {
      home: "Inicio",
      about: "Acerca de",
      skills: "Habilidades",
      experience: "Experiencia",
      certifications: "Certificaciones",
      contact: "Contacto",
    },

    // Hero Section
    hero: {
      greeting: "Hola, soy",
      role1: "Desarrollador Frontend Senior",
      role2: "Ingeniero en Informática",
      role3: "Experto en Angular",
      role4: "Especialista en React",
      description:
        "Ingeniero en Informática creando experiencias de usuario excepcionales con Angular y React por más de 5 años. Transformando ideas en aplicaciones web interactivas y responsivas.",
      years: "Años Exp",
      projects: "Proyectos",
      dedication: "Dedicación",
      getInTouch: "Contáctame",
      viewWork: "Ver Mi Trabajo",
    },

    // About Section
    about: {
      title: "Acerca de Mí",
      subtitle: "Apasionado por crear experiencias digitales",
      journeyTitle: "Mi Trayectoria",
      paragraphs: [
        "Como graduado en Ingeniería Informática con más de 5 años de experiencia, he dedicado mi carrera a dominar el arte del desarrollo frontend.",
        "Mi experiencia abarca los ecosistemas de Angular y React, donde he construido aplicaciones escalables y responsivas que sirven a miles de usuarios diariamente.",
        "Actualmente trabajando en WCS y GlobalResources, continuo expandiendo los límites de lo posible en el desarrollo web.",
      ],
      coffee: "Impulsado por el café",
      passion: "Movido por la pasión",
      values: [
        { title: "Código Limpio", description: "Escribir código mantenible y escalable siguiendo principios SOLID", icon: Code2 },
        { title: "Trabajo en Equipo", description: "Colaborar eficazmente en entornos ágiles con equipos multifuncionales", icon: Users },
        { title: "Orientado a Metas", description: "Enfocado en entregar soluciones de alta calidad que superen expectativas", icon: Target },
        { title: "Innovación", description: "Siempre explorando nuevas tecnologías y mejores prácticas en desarrollo", icon: Lightbulb },
      ],
      quickFactsTitle: "Datos Rápidos",
      quickFacts: [
        { title: "Angular", label: "Framework Principal" },
        { title: "React", label: "Experiencia Secundaria" },
        { title: "Full Stack", label: "Enfoque de Desarrollo" },
        { title: "Agile", label: "Experto en Metodologías" },
      ],
    },

    // Skills Section
    skills: {
      title: "Habilidades Técnicas",
      subtitle:
        "Un conjunto completo de herramientas construido a través de años de experiencia práctica y aprendizaje continuo",
      frontend: "Desarrollo Frontend",
      backend: "Desarrollo Backend",
      database: "Base de Datos y Herramientas",
      softSkills: "Habilidades Blandas y Metodologías",
      continuousLearning: "Aprendizaje Continuo",
      learningDescription:
        "Comprometido con mantenerme actualizado con las últimas tecnologías y mejores prácticas a través de educación continua y certificación.",
      platziCerts: "Múltiples Certificaciones de Platzi",
    },

    // Experience Section
    experience: {
      title: "Experiencia",
      titleHighlight: "Laboral",
      subtitle:
        "Un viaje de crecimiento, aprendizaje y entrega de resultados excepcionales en diversos proyectos y equipos",
      current: "Actual",
      responsibilities: "Responsabilidades Clave",
      achievements: "Logros Clave",
      technologies: "Tecnologías Utilizadas",
      freelance: "Proyectos",
      projects: "Freelance",
      highlights: "Aspectos Destacados de la Carrera",
      yearsExp: "Años de Experiencia",
      companies: "Empresas",
      satisfaction: "Satisfacción del Cliente",
    },

    // Certifications Section
    certifications: {
      title: "Certificaciones",
      learning: "Aprendizaje",
      subtitle:
        "Comprometido con el aprendizaje continuo y el desarrollo profesional a través de programas de certificación integrales",
      certificationsCount: "Certificaciones",
      platform: "Plataforma Principal",
      advanced: "Avanzado",
      skillLevel: "Nivel de Habilidad",
      period: "Período de Aprendizaje",
      allCerts: "Todas las Certificaciones",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Herramientas",
      methodology: "Metodología",
      skillsCovered: "Habilidades Cubiertas",
      viewCert: "Ver Certificado",
      philosophy: "Filosofía de Aprendizaje Continuo",
      philosophyText:
        "En el mundo de la tecnología en rápida evolución, mantenerse actualizado no es solo una ventaja, es esencial. Mi compromiso con el aprendizaje continuo a través de plataformas como Platzi me asegura estar siempre equipado con las últimas habilidades y mejores prácticas para entregar resultados excepcionales.",
      viewAll: "Ver Todos los Certificados",
    },

    // Contact Section
    contact: {
      title: "Conectemos",
      subtitle:
        "¿Listo para dar vida a tu próximo proyecto? Hablemos sobre cómo podemos trabajar juntos para crear algo increíble.",
      getInTouch: "Ponte en Contacto",
      description:
        "Siempre estoy interesado en nuevas oportunidades, proyectos desafiantes y colaborar con equipos talentosos. Ya sea que tengas un proyecto en mente o solo quieras saludar, ¡no dudes en contactarme!",
      location: "Ubicación",
      quickConnect: "Conexión Rápida",
      sendEmail: "Enviar Email",
      linkedinMessage: "Mensaje LinkedIn",
      viewGithub: "Ver GitHub",
      readyTitle: "¿Listo para Comenzar tu Proyecto?",
      readyDescription:
        "Convirtamos tus ideas en realidad. Con más de 5 años de experiencia en desarrollo frontend, estoy listo para ayudarte a construir algo extraordinario.",
      startConversation: "Iniciar Conversación",
      viewMyWork: "Ver Mi Trabajo",
    },
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t, translations: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
