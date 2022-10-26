import { AppProps } from 'next/app'
import '../styles/globals.css'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../lib/mocks')
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
