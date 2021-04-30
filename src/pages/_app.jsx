import { SumContextProvider } from '../components/Context'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SumContextProvider>
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
    </SumContextProvider>
  )
}

export default MyApp