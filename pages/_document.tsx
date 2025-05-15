import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='bg-white dark:bg-black text-black dark:text-white transition-colors duration-300'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
