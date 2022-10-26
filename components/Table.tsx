import { Table } from 'flowbite-react'

import { GameDeals } from '../lib/types/games'

export const DealsTable: React.FC<{ deals: GameDeals[] }> = ({ deals }) => {
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Game</Table.HeadCell>
        <Table.HeadCell>Deal Price</Table.HeadCell>
        <Table.HeadCell>Price</Table.HeadCell>
        <Table.HeadCell>Rating</Table.HeadCell>
        <Table.HeadCell>Release Date</Table.HeadCell>
      </Table.Head>
      <Table.Body className='divide-y'>
        {deals.map(deal => (
          <Table.Row
            key={deal.dealID}
            className='bg-white dark:border-gray-700 dark:bg-gray-800'
            data-testid='game-row'
          >
            <Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
              {deal.title}
            </Table.Cell>
            <Table.Cell>${deal.salePrice}</Table.Cell>
            <Table.Cell>${deal.normalPrice}</Table.Cell>
            <Table.Cell>{deal.steamRatingCount}</Table.Cell>
            <Table.Cell>
              {new Date(Number(deal.releaseDate * 1000)).toLocaleDateString(
                'en-US'
              )}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
