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
      <footer className="flex flex-col items-center justify-center p-6 bg-violet-100 sm:flex-row">
        <p className="text-sm text-center text-gray-600">
          Made with love by Digitevo 💓 -{' '}
          <a href="mailto: contact@digitevo.fr">contact@digitevo.fr</a>
        </p>
      </footer>
    </>
  );
}

export default App;
