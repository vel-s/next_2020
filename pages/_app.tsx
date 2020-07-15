import NextNProgress from 'nextjs-progressbar'
import '../styles/main.scss'
import React from "react"
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="yellow"
        startPosition="0.4"
        stopDelayMs="200"
        height="2"
      />
      <Component {...pageProps}/>
    </>
  )
}