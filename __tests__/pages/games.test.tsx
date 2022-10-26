import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Game from '../../pages/index'

describe('Home', () => {
  it('renders', async () => {
    const user = userEvent.setup()

    render(<Game />)

    const heading = screen.getByRole('heading', {
      name: 'Game Deals'
    })

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')

    await user.type(input, '10')
    await user.click(button)

    const gameData = await screen.findAllByTestId('game-row')

    expect(heading).toBeInTheDocument()
    expect(gameData[0]).toBeInTheDocument()
  })
})
