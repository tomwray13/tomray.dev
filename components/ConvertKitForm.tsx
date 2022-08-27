import { useState } from 'react'
import Router from 'next/router'

export default function ConvertKitForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    setLoading(true)
    event.preventDefault()
    try {
      await fetch(`/api/convertkit`, {
        body: JSON.stringify({
          email,
          formId: `3543469`, // nestJs tips form
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
      Router.push(`/almost/nestjs-cheat-sheet`)
    } catch (error) {
      setLoading(false)
    }
  }
  return (
    <form className="mt-4 grid grid-cols-3 gap-1" onSubmit={handleSubmit}>
      <input
        type="email"
        name="magnet"
        id="magnet"
        className="col-span-3 mb-2 rounded-md text-gray-800 sm:col-span-2 sm:mb-0 sm:mr-2"
        placeholder="e.g. elon@tesla.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button
        type="submit"
        className="col-span-3 rounded-md bg-green-600 px-4 py-2 font-bold text-white sm:col-span-1"
      >
        {loading ? 'Loading...' : 'Get cheat sheet'}
      </button>
    </form>
  )
}
