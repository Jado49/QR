// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Custom meta tags, links, and other elements */}
          <meta name="description" content="Your website description" />
          <link rel="icon" href="/favicon.ico" />
          {/* Additional stylesheets or scripts */}
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
