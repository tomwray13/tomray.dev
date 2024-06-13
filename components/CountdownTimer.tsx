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
    <div className="flex flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md">
      <p className="m-0 mb-1 font-semibold">🔥 Exclusive 60% Discount Ending Soon 🔥</p>
      <p className="m-0 mb-2 text-sm">Time left to claim the discount:</p>
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
      <a
        className="mt-8 block rounded-md bg-blue-600 px-3.5 py-2.5 text-center !font-bold !text-white !no-underline shadow hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:mt-6"
        href="#pricing"
      >
        Enroll now (at 60% off)
      </a>
    </div>
  )
}

export default CountdownTimer
