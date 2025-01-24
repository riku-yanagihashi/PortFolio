import type React from "react"
import { useState, useEffect } from "react"

interface TransitionAnimationProps {
  isTransitioning: boolean
}

const TransitionAnimation: React.FC<TransitionAnimationProps> = ({ isTransitioning }) => {
  const [animationClass, setAnimationClass] = useState("")

  useEffect(() => {
    if (isTransitioning) {
      setAnimationClass("animate-transition-in")
      setTimeout(() => setAnimationClass("animate-transition-out"), 500)
    } else {
      setAnimationClass("")
    }
  }, [isTransitioning])

  if (!isTransitioning && animationClass === "") return null

  return (
    <div className={`fixed inset-0 bg-black z-50 ${animationClass}`}>
      <div className="h-full w-full flex items-center justify-center">
        <div className="text-4xl font-bold text-white">Loading...</div>
      </div>
    </div>
  )
}

export default TransitionAnimation


