import { NextApiRequest, NextApiResponse } from 'next'

/* eslint-disable import/no-anonymous-default-export */
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { subscriber_id } = req.query

  if (!subscriber_id) {
    return res.status(400).json({ error: 'Subscriber ID is required' })
  }

  try {
    const API_SECRET = process.env.CONVERTKIT_API_SECRET
    const response = await fetch(
      `https://api.convertkit.com/v3/subscribers/${subscriber_id}?api_secret=${API_SECRET}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      }
    )

    const data = await response.json()

    if (!response.ok) {
      console.error(`Error fetching subscriber data: ${data.message}`)
      return res.status(response.status).json({ error: data.message })
    }

    return res.status(200).json(data)
  } catch (error) {
    console.error(`Internal Server Error: ${error.message}`)
    return res.status(500).json({ error: error.message || 'Internal Server Error' })
  }
}
