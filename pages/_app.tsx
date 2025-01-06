import type { AppProps } from 'next/app'
// import type { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}