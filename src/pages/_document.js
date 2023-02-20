import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Marck+Script&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="L'agence web qui révolutionne le développement de projets grâce à un modèle de collaboration innovant."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="portal" />
      </body>
    </Html>
  );
}
