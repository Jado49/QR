// pages/index.js

import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Welcome to my Next.js App!" />
      </Head>

      <main>
        <h1>Welcome to Next.js</h1>
        <p>This is the homepage of your Next.js application.</p>
        <Link href="/about">
          <a>About Page</a>
        </Link>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Your Company Name</p>
      </footer>

      {/* Additional components or sections */}
    </div>
  );
}
