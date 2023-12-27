import React from 'react'

interface ProjectCardProps {
  label: string
  title: string
  lessons: string[]
  isReady: boolean
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, lessons, label, isReady }) => {
  return (
    <div className="w-full rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 sm:max-w-xs">
      <div className="p-5">
        <span className="mb-2 block text-center text-xs font-semibold uppercase opacity-40">
          {label}
        </span>
        <h5 className="text-center text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        {!isReady && (
          <div className="rounded-md bg-yellow-50 p-4 text-sm">
            🔨 This project is currently under construction and will be available in February 2024.
          </div>
        )}
        <ul className="mt-2 mb-4">
          {lessons.map((lesson, index) => (
            <li key={index} className="-ml-3 text-sm text-gray-700 dark:text-gray-400">
              {lesson}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProjectCard
