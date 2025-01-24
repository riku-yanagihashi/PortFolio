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
                href="https://github.com/riku-yanagihashi/Lazy-todo"
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
                className="flex items-center bg-gray-600 pointer-events-none hover:bg-blue-500 text-white font-bold py-2 px-4 rounded transition-colors"
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
                  LazyTodo is a Todo application developed for lazy people.
                  Engineers, in particular, tend to strive for efficiency and become lazy, so this app is designed with such individuals in mind.
                  The application runs in the terminal, allowing users who frequently use editors like Vim or VSCode to open and manage their Todo lists with a single command.
                  Additionally, since it can be operated without touching a mouse, this feature is especially beneficial for lazy users.
                </p>
                <p className="text-gray-300">
                  The application is written entirely in Rust, ensuring high-speed and safe execution of the program.
                  The Todo data is stored in JSON format in the current directory, making file management intuitive.
                  However, a potential drawback is that the JSON file might feel intrusive at times, but please avoid deleting it.
                </p>
              </div>
            )}

            {activeTab === "features" && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {[
                    "Terminal-based operation",
                    "Mouse-free navigation",
                    "Lightweight and fast",
                    "Dark mode for late-night productivity",
                    "JSON-based data storage",
                    "Quick setup and usage",
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
                  <li>Please type on terminal `brew tap riku-yanagihashi/ltd && brew install ltd`</li>
                  <li>This concludes the installation.</li>
                  <li>Next, we explain how to operate the system.</li>
                  <li>Its basically the same cursor control as the vim.</li>
                  <li>q to exit the application, a to add a task, e to edit, d to delete</li>
                  <li>See the README on github for details.</li>
                </ol>
              </div>
            )}

            {activeTab === "techStack" && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Rust", icon: <Code className="w-5 h-5" /> },
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


