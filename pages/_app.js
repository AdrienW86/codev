import '@/styles/globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Script Google Ads */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17164941415"
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17164941415');
        `}
      </Script>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
