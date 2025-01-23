"use client"

import { Github, Mail } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import BackgroundEffect from "./components/BackgroundEffect"

export default function Home() {
  const [activeSection, setActiveSection] = useState("")
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const projects = [
    {
      id: 1,
      title: 'Lazy Todo',
      description: 'Cool todo app for lazy people',
      link: '/projects/one',
      technologies: ['Rust'],
    },
    {
      id: 2,
      title: 'Django Project "Dpro"',
      description: 'Web application to search books',
      link: '/projects/two',
      technologies: ['Django', 'PostgreSQL'],
    },
    {
      id: 3,
      title: 'My Portfolio Website',
      description: 'Portfolio created with Next.js+React+TailwindCSS+TypeScript',
      link: '/projects/three',
      technologies: ['Next.js', 'React', 'TailwindCSS', 'TypeScript'],
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'Description for project four.',
      link: '/projects/four',
      technologies: [],
    },
  ];

  const technologyIcons: { [key: string]: string } = {
    'React': 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    'TypeScript': 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    'Next.js': 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
    'TailwindCSS': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    'Django': 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg',
    'PostgreSQL': 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
    'Node.js': 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    'MongoDB': 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg',
    'Rust': 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg',
    'Java': 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
  };


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

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <BackgroundEffect />
      <header className="fixed w-full bg-black bg-opacity-50 backdrop-blur-md z-10">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-8">
            {["home", "about", "projects", "contact"].map((section) => (
              <li key={section}>
                <Link
                  href={`#${section}`}
                  className={`hover:text-blue-400 transition-colors ${activeSection === section ? "neon-text" : ""}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section
          id="home"
          ref={(el) => 
            {sectionRefs.current["home"] = el
          }}
          className="h-screen flex items-center justify-center"
        >
          <div className="text-center animate-fadeInUp">
            <h1 className="text-6xl font-bold mb-4 neon-text">Riku Yanagihashi</h1>
            <p className="text-2xl text-gray-400">Tecnnical College Student</p>
          </div>
        </section>

        <section
          id="about"
          ref={(el) => {sectionRefs.current["about"] = el}}
          className="min-h-screen flex items-center justify-center bg-zinc-900"
        >
          <div className="max-w-3xl mx-auto px-6 animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-8 neon-text">About Me</h2>
            <p className="text-xl leading-relaxed">
              Hello! I&apos;m Riku Yanagihashi, a 2nd year student at Technical College. I&apos;m passionate about technology and
              I&apos;m always looking for new ways to improve my skills.
            </p>
          </div>
        </section>

        <section id="projects" ref={(el) => { sectionRefs.current["projects"] = el }} className="min-h-screen flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center neon-text animate-fadeInUp">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-zinc-900 p-6 rounded-lg transform hover:scale-105 transition-transform neon-border animate-fadeInUp"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex space-x-4 mb-4">
                    {project.technologies.map((tech) => (
                      <img
                        key={tech}
                        src={technologyIcons[tech]}
                        alt={tech}
                        className="h-8 w-8"
                        title={tech}
                      />
                    ))}
                  </div>
                  <Link href={project.link} className="text-blue-400 hover:underline">
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          ref={(el) => 
            {sectionRefs.current["contact"] = el
          }}
          className="min-h-screen flex items-center justify-center bg-zinc-900"
        >
          <div className="text-center animate-fadeInUp">
            <h2 className="text-4xl font-bold mb-8 neon-text">Get In Touch</h2>
            <p className="text-xl mb-8">Interested in collaborating? Let&apos;s connect!</p>
            <div className="flex justify-center space-x-6">
              <Link href="https://github.com/riku-yanagihashi" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-8 h-8" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="mailto:riku.yanagihashi0420@gmail.com" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-8 h-8" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Riku Yanagihashi. All rights reserved.</p>
      </footer>
    </div>
  )
}

