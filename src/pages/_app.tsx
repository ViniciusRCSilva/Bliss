import { Loading } from '@/components/Loading'
import { AuthProvider } from '@/context/AuthContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Lexend } from 'next/font/google'
import Head from 'next/head'

const lexend = Lexend({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>    
      <Head>
        <title>Bliss - Bem-estar</title>
      </Head>

      <AuthProvider>
        <Loading>
          <div className={lexend.className}>
            <Component {...pageProps} />
          </div>
        </Loading>
      </AuthProvider>
    </>
  )
}
