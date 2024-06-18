// pages/_app.js

import '../styles/globals.css'; // Example global styles import
import Head from 'next/head'; // Example of using Head component for metadata

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <title>Your App Title</title>
        {/* Additional meta tags, links, etc. */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
