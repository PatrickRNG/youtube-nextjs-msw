import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const delay = (time: number) => {
  return new Promise(res =>
    setTimeout(() => {
      return res(null)
    }, time)
  )
}

export default async function backlinksAnalyzer(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { price } = req.query

  try {
    const { data } = await axios.get(
      `https://www.cheapshark.com/api/1.0/deals?upperPrice=${price}`
    )

    await delay(2000)

    res.status(200).json(data)
  } catch (error) {
    return res.status(500).send('Internal Server Error')
  }
}
