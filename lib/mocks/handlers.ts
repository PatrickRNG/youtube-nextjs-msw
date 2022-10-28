import { rest } from 'msw'

import { dealsMock } from './game/deals'

export const handlers = [
  rest.get('/api/deals', (req, res, ctx) => {
    const { searchParams } = req.url
    // Para pehar os query params
    const price = searchParams.get('price')

    return res(ctx.json(dealsMock))
  })
]
