import { useState } from 'react'
import Router from 'next/router'

export default function ConvertKitForm({
  formId = `4864903`,
  buttonText = `Get free guide`,
  sideForm = true,
}) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    setLoading(true)
    event.preventDefault()
    try {
      await fetch(`/api/convertkit`, {
        body: JSON.stringify({
          email,
          formId, // nestJs tips form
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
    <form className="mt-4 grid max-w-lg grid-cols-8 items-end text-sm" onSubmit={handleSubmit}>
      <div
        className={`mb-2 ${
          sideForm ? `col-span-8 mr-1 sm:col-span-5 sm:mb-0 sm:mr-2` : `col-span-8 sm:mb-3`
        }`}
      >
        <label className="mb-2 block font-semibold" htmlFor="magnet">
          Your email address
        </label>
        <input
          type="email"
          name="magnet"
          id="magnet"
          className="w-full rounded-md text-sm text-gray-800 focus:ring-primary-500"
          placeholder="e.g. johnsmith@gmail.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className={`rounded-md border border-green-500 bg-green-500 px-4 py-2 font-bold text-white ${
          sideForm ? `col-span-8 sm:col-span-3` : `col-span-8`
        } `}
      >
        {loading ? 'Loading...' : buttonText}
      </button>
    </form>
  )
}
