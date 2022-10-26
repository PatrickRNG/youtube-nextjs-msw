import { useState } from 'react'
import axios from 'axios'

import { GameDeals } from '../lib/types/games'
import { Form } from '../components/Form'
import { DealsTable } from '../components/Table'

export default function Home() {
  const [deals, setDeals] = useState<GameDeals[] | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (price: string) => {
    setLoading(true)
    const { data } = await axios.get(`/api/deals?price=${price}`)
    setDeals(data)
    setLoading(false)
  }

  return (
    <div className='container mx-auto my-8'>
      <h1 className='text-5xl font-bold mb-8'>Game Deals</h1>
      <Form loading={loading} onSubmit={handleSubmit} />
      {deals && <DealsTable deals={deals} />}
    </div>
  )
}
