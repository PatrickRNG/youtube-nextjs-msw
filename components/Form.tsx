import { TextInput, Button, Spinner } from 'flowbite-react'
import { FormEvent, useState } from 'react'

export const Form: React.FC<{
  loading?: boolean
  onSubmit: (price: string) => void
}> = ({ onSubmit, loading }) => {
  const [price, setPrice] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(price)
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className='flex mb-10'>
        <TextInput
          id='price'
          name='price'
          type='text'
          onChange={e => setPrice(e.target.value)}
          placeholder='Search by price'
          required={true}
          shadow={true}
        />
        <div className='ml-3'>
          <Button type='submit'>
            {!loading ? (
              <>Search</>
            ) : (
              <>
                <div className='mr-3'>
                  <Spinner size='sm' light={true} />
                </div>
                Loading ...
              </>
            )}
          </Button>
        </div>
      </div>
    </form>
  )
}
