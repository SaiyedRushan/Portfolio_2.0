import { Html, Head, Main, NextScript } from 'next/document'

// Applies the stored theme before first paint, otherwise the page renders light
// and flips to dark once ThemeProvider's effect runs.
const THEME_INIT = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light')document.documentElement.classList.add('dark')}catch(e){document.documentElement.classList.add('dark')}})()`

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
      </Head>
      <body className='bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
