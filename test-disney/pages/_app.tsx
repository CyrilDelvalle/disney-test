import '../styles/globals.css'
import Header from '../components/Header'
// import Footer from '../components/Footer'
import type { AppProps } from 'next/app'
import store from '../store/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Provider store={store}>
      <div className='min-h-screen flex flex-col'>
        <Header />
        <div className='relative flex flex-grow'>
          <main className='bg-blue-900 flex-1 p-6'>
            <Component {...pageProps} />
          </main>
        </div>
      {/* <Footer /> */}
      </div>
    </Provider>
  </>
}

export default MyApp
