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

const CountdownText: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate))

  useEffect(() => {
    const timerTimeout = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(timerTimeout)
  }, [targetDate])

  return (
    <>
      <span className="">{timeLeft.days}</span> <span className="">Days,</span>{' '}
      <span className="">{timeLeft.hours}</span> <span className="">Hours,</span>{' '}
      <span className="">{timeLeft.minutes}</span> <span className="">Minutes</span>
      {' and '}
      <span className="">{timeLeft.seconds}</span> <span className="">Seconds</span>
    </>
  )
}

export default CountdownText
