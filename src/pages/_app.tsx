import React from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import NavBar from 'components/NavBar';

import 'styles/global.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>Digitevo</title>
      </Head>
      <NavBar />
      <div className="flex-1 flex flex-col justify-even">
        <Component {...pageProps} />
      </div>
      <footer className="flex flex-col items-center justify-center p-6 bg-violet-100 dark:bg-gray-900 sm:flex-row">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Made with love by Digitevo 💓
        </p>
      </footer>
    </>
  );
}

export default App;
