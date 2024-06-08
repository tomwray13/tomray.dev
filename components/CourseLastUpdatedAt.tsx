import React from 'react'

const CourseLastUpdatedAt = () => {
  const currentDate = new Date()
  currentDate.setMonth(currentDate.getMonth() - 1)
  if (currentDate.getMonth() === 11 && new Date().getMonth() === 0) {
    currentDate.setFullYear(currentDate.getFullYear() - 1)
  }
  const monthName = currentDate.toLocaleString('default', { month: 'long' })
  const year = currentDate.getFullYear()
  const monthYear = `${monthName} ${year}`
  return (
    <span className="opacity-64 rounded-full bg-white px-3 py-1 text-sm text-gray-900 shadow">
      ⚡️ Last updated in {monthYear}
    </span>
  )
}

export default CourseLastUpdatedAt
