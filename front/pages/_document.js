import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
 
  render() {
    return (
      <Html lang="fr">
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/logo.png" />
          <meta name="description" content="réservation de gîtes près d'Aiguillon" />
          <meta name="apple-mobile-web-app-status-bar" content="#2196f3" />
          <meta name="theme-color" content="#2196f3" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;