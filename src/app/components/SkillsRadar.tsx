"use client"

import type React from "react"
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js"
import { Radar } from "react-chartjs-2"

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

interface SkillData {
  label: string
  data: number[]
  backgroundColor: string
  borderColor: string
  borderWidth: number
}

interface SkillsRadarProps {
  title: string
  labels: string[]
  datasets: SkillData[]
}

export const SkillsRadar: React.FC<SkillsRadarProps> = ({ title, labels, datasets }) => {
  const data = {
    labels,
    datasets,
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        pointLabels: {
          color: "rgba(255, 255, 255, 0.7)",
          font: {
            size: 12,
          },
        },
        ticks: {
          color: "rgba(255, 255, 255, 0.7)",
          backdropColor: "transparent",
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "rgba(255, 255, 255, 0.7)",
        },
      },
    },
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
      <div className="h-80">
        <Radar data={data} options={options} />
      </div>
    </div>
  )
}


