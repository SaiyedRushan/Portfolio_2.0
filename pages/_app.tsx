import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '../context/ThemeContext'

const SITE_URL = 'https://saiyedrushan.vercel.app'
const TITLE = 'Rushanshah Saiyed — Senior Software Engineer'
const DESCRIPTION =
  'Senior software engineer building websites, web apps, and mobile apps end-to-end, independent through RushDevs. 4+ years shipping full-stack, distributed systems at Afresh, Speer, and Bell Canada.'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{TITLE}</title>
        <meta name='description' content={DESCRIPTION} />
        <link rel='canonical' href={SITE_URL} />
        <link rel='icon' href='/RS_Favicon.png' />

        {/* Open Graph */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={SITE_URL} />
        <meta property='og:title' content={TITLE} />
        <meta property='og:description' content={DESCRIPTION} />
        <meta property='og:image' content={`${SITE_URL}/linkedin.jpg`} />
        <meta property='og:site_name' content='Rushanshah Saiyed' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={TITLE} />
        <meta name='twitter:description' content={DESCRIPTION} />
        <meta name='twitter:image' content={`${SITE_URL}/linkedin.jpg`} />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
