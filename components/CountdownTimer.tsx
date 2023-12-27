import React, { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const difference = +targetDate - +new Date()
  let timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  return timeLeft
}

const CountdownTimer: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate))

  useEffect(() => {
    const timerTimeout = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(timerTimeout)
  }, [targetDate])

  return (
    <div className="flex flex-col items-center justify-center rounded-lg pt-4">
      <h2 className="mt-0 mb-4 text-base font-normal ">Course launches in:</h2>
      <div className="flex space-x-4">
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-blue-600">{timeLeft.days}</span>
          <span className="text-sm text-gray-600">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-blue-600">{timeLeft.hours}</span>
          <span className="text-sm text-gray-600">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-blue-600">{timeLeft.minutes}</span>
          <span className="text-sm text-gray-600">Minutes</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold text-blue-600">{timeLeft.seconds}</span>
          <span className="text-sm text-gray-600">Seconds</span>
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer
