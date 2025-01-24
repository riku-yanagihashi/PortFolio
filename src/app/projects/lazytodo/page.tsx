"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Code, CheckCircle, Zap } from "lucide-react"
import BackgroundEffect from "../../components/BackgroundEffect"

export default function LazyToDoProject() {
  const [activeTab, setActiveTab] = useState("about")

  const tabs = [
    { id: "about", label: "About" },
    { id: "features", label: "Features" },
    { id: "usage", label: "Usage" },
    { id: "techStack", label: "Tech Stack" },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <BackgroundEffect />
      <header className="fixed w-full bg-black bg-opacity-50 backdrop-blur-md z-10">
        <nav className="container mx-auto px-6 py-4">
          <Link href="/#projects" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </nav>
      </header>

      <main className="pt-20 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 neon-text animate-fadeInUp">LazyToDo</h1>

          <div className="mb-8 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://github.com/yourusername/lazytodo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
              <a
                href="https://lazytodo-demo.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </a>
            </div>
          </div>

          <div className="mb-8 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <div className="flex space-x-4 border-b border-gray-700">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`py-2 px-4 focus:outline-none ${
                    activeTab === tab.id
                      ? "text-blue-400 border-b-2 border-blue-400"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            {activeTab === "about" && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">About LazyToDo</h2>
                <p className="text-gray-300 mb-4">
                  LazyToDo is a minimalist, yet powerful task management application designed for procrastinators and
                  efficiency enthusiasts alike. It combines sleek design with intelligent task prioritization to help
                  users focus on what truly matters.
                </p>
                <p className="text-gray-300">
                  Built with modern web technologies, LazyToDo offers a seamless experience across devices, ensuring
                  that your tasks are always at your fingertips, whether you&apos;re on your desktop, tablet, or smartphone.
                </p>
              </div>
            )}

            {activeTab === "features" && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {[
                    "Intelligent task prioritization",
                    "Cross-device synchronization",
                    "Customizable categories and tags",
                    "Dark mode for late-night productivity",
                    "Voice input for hands-free task creation",
                    "Pomodoro timer integration",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "usage" && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">How to Use LazyToDo</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>Sign up for an account or log in if you already have one.</li>
                  <li>Create a new task by clicking the + button or using voice input.</li>
                  <li>Set priority, due date, and add any relevant tags or categories.</li>
                  <li>Let LazyToDo&apos;s AI suggest the best order to tackle your tasks.</li>
                  <li>Start your focused work session with the integrated Pomodoro timer.</li>
                  <li>Mark tasks as complete and watch your productivity soar!</li>
                </ol>
              </div>
            )}

            {activeTab === "techStack" && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "React", icon: <Code className="w-5 h-5" /> },
                    { name: "Next.js", icon: <Zap className="w-5 h-5" /> },
                    { name: "TypeScript", icon: <Code className="w-5 h-5" /> },
                    { name: "Tailwind CSS", icon: <Code className="w-5 h-5" /> },
                    { name: "Node.js", icon: <Zap className="w-5 h-5" /> },
                    { name: "MongoDB", icon: <Code className="w-5 h-5" /> },
                  ].map((tech, index) => (
                    <div key={index} className="flex items-center bg-gray-800 rounded p-3">
                      {tech.icon}
                      <span className="ml-2">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-zinc-900 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </footer>
    </div>
  )
}


