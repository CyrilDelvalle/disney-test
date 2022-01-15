import '../styles/globals.css'
import Header from '../components/Header'
// import Footer from '../components/Footer'
import type { AppProps } from 'next/app'
import store from '../store/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Provider store={store}>
    <Header />
      <Component {...pageProps} />
    {/* <Footer /> */}
      </Provider>
  </>
}

export default MyApp
