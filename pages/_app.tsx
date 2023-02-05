import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'
import '@fontsource/inter/variable-full.css'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import { useEffect } from 'react'
import * as Fathom from 'fathom-client'
import Router from 'next/router'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

Router.events.on('routeChangeComplete', (as, routeProps) => {
  if (!routeProps.shallow) {
    Fathom.trackPageview()
  }
})

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Fathom.load(process.env.FATHOM, {
      includedDomains: ['tomray.dev'],
    })
  }, [])
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <p>HI! {process.env.FATHOM}</p>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
