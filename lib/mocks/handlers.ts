import { rest } from 'msw'

import { dealsMock } from './game/deals'

export const handlers = [
  rest.get('/api/deals', (req, res, ctx) => {
    const { searchParams } = req.url
    
    return res(ctx.json(dealsMock))
  }),
]
