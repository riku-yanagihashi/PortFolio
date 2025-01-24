"use client"

import { Github, Mail } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import BackgroundEffect from "./components/BackgroundEffect"
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext"
import { translations, type TranslationKey } from "./utils/translations"
import { SkillsRadar } from "./components/SkillsRadar"

const projects = [
  {
    id: 1,
    title: "Lazy Todo",
    description: "Cool todo app for lazy people",
    link: "/projects/lazytodo",
    technologies: ["Rust"],
  },
  {
    id: 2,
    title: 'Django Project "Dpro"',
    description: "Web application to search books",
    link: "/projects/Dpro",
    technologies: ["Django", "PostgreSQL"],
  },
  {
    id: 3,
    title: "My Portfolio Website",
    description: "Portfolio created with Next.js+React+TailwindCSS+TypeScript",
    link: "/",
    technologies: ["Next.js", "React", "TailwindCSS", "TypeScript"],
  },
  {
    id: 4,
    title: "Project Four",
    description: "Description for project four.",
    link: "/projects/four",
    technologies: [],
  },
]

const technologyIcons: { [key: string]: string } = {
  React: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  TypeScript: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  "Next.js": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  TailwindCSS: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  Django: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg",
  PostgreSQL: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  "Node.js": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  MongoDB: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
  Rust: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
  Java: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
}

function HomeContent() {
  const [activeSection, setActiveSection] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})
  const { language, setLanguage } = useLanguage()

  const t = (key: TranslationKey) => translations[language][key]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    // Opening animation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [])

  const skillsData = {
    technical: {
      labels: ["JavaScript", "React", "Node.js", "Python", "SQL", "Java"],
      datasets: [
        {
          label: "Current Skills",
          data: [1, 3, 3, 3, 4, 5],
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgb(54, 162, 235)",
          borderWidth: 1,
        },
        {
          label: "Target Skills",
          data: [4, 5, 4, 3, 5, 5],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 1,
        },
      ],
    },
    soft: {
      labels: ["Communication", "Teamwork", "Problem Solving", "Adaptability", "Creativity", "Time Management"],
      datasets: [
        {
          label: "Current Skills",
          data: [3, 4, 4, 3, 2, 5],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgb(75, 192, 192)",
          borderWidth: 1,
        },
        {
          label: "Target Skills",
          data: [5, 5, 5, 5, 5, 4],
          backgroundColor: "rgba(255, 206, 86, 0.2)",
          borderColor: "rgb(255, 206, 86)",
          borderWidth: 1,
        },
      ],
    },
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="text-4xl font-bold text-white animate-pulse">Welcome to My Portfolio</div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${language === "ja" ? "font-noto-sans-jp" : "font-serif"}`}>
      <BackgroundEffect />
      <header className="fixed w-full bg-black bg-opacity-50 backdrop-blur-md z-10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <ul className="flex space-x-8 font-noto-sans-jp">
            {["home", "about", "projects", "skills", "contact"].map((section) => (
              <li key={section}>
                <Link
                  href={`#${section}`}
                  className={`hover:text-blue-400 transition-colors ${activeSection === section ? "neon-text" : ""}`}
                >
                  {t(section as TranslationKey)}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setLanguage(language === "en" ? "ja" : "en")}
            className="text-white hover:text-blue-400 transition-colors"
          >
            {language === "en" ? "日本語" : "English"}
          </button>
        </nav>
      </header>

      <main>
        <section
          id="home"
          ref={(el) => {
            sectionRefs.current["home"] = el
          }}
          className="h-screen flex items-center justify-center"
        >
          <div className="text-center animate-fadeInUp">
            <h1 className="text-6xl font-bold mb-4 neon-text font-noto-sans-jp">{t("name")}</h1>
            <p className="text-2xl text-gray-400 font-noto-sans-jp">{t("title")}</p>
          </div>
        </section>

        <section
          id="about"
          ref={(el) => {
            sectionRefs.current["about"] = el
          }}
          className="min-h-screen flex items-center justify-center bg-zinc-900"
        >
          <div className="max-w-3xl mx-auto px-6 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-8 neon-text font-noto-sans-jp">{t("aboutMe")}</h2>
            <p className="text-xl leading-relaxed font-noto-sans-jp">{t("aboutContent")}</p>
          </div>
        </section>

        <section
          id="projects"
          ref={(el) => {
            sectionRefs.current["projects"] = el
          }}
          className="min-h-screen flex items-center justify-center"
        >
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center neon-text animate-fadeInUp font-noto-sans-jp">{t("projects")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-zinc-900 p-6 rounded-lg transform hover:scale-105 transition-transform neon-border animate-fadeInUp"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <h3 className="text-2xl font-semibold mb-4 font-noto-sans-jp">{project.title}</h3>
                  <p className="text-gray-400 mb-4 font-noto-sans-jp">{project.description}</p>
                  <div className="flex space-x-4 mb-4">
                    {project.technologies.map((tech) => (
                      <img
                        key={tech}
                        src={technologyIcons[tech] || "/placeholder.svg"}
                        alt={tech}
                        className="h-8 w-8"
                        title={tech}
                      />
                    ))}
                  </div>
                  <Link href={project.link} className="text-blue-400 hover:underline">
                    {t("learnMore")}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          ref={(el) => {
            sectionRefs.current["skills"] = el
          }}
          className="min-h-screen flex items-center justify-center bg-zinc-900"
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center neon-text animate-fadeInUp font-noto-sans-jp">{t("skills")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-noto-sans-jp">
              <SkillsRadar
                title={t("technicalSkills")}
                labels={skillsData.technical.labels}
                datasets={skillsData.technical.datasets}
              />
              <SkillsRadar
                title={t("softSkills")}
                labels={skillsData.soft.labels}
                datasets={skillsData.soft.datasets}
              />
            </div>
          </div>
        </section>

        <section
          id="contact"
          ref={(el) => {
            sectionRefs.current["contact"] = el
          }}
          className="min-h-screen flex items-center justify-center bg-zinc-900"
        >
          <div className="text-center animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-8 neon-text font-noto-sans-jp">{t("getInTouch")}</h2>
            <p className="text-xl mb-8 font-noto-sans-jp">{t("connectMessage")}</p>
            <div className="flex justify-center space-x-6">
              <Link
                href="https://github.com/riku-yanagihashi"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-8 h-8" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="mailto:riku.yanagihashi0420@gmail.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-8 h-8" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black py-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Riku Yanagihashi. {t("allRightsReserved")}
        </p>
      </footer>
    </div>
  )
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  )
}

