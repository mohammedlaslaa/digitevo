import { Html, Head, Main, NextScript } from 'next/document';
import { GoogleAnalytics, sendGAEvent } from '@next/third-parties/google'

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
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-995113096">
      </script>
      <script>
        {
          function gtag_report_conversion(url) {
          var callback = function() {
            if (typeof (url) != 'undefined') {
              window.location = url;
            }
          };

          sendGAEvent('event', 'conversion', {
            'send_to': 'AW-995113096/yGDNCL7914sBEIjxwNoD',
            'value': 1.0,
            'currency': 'EUR',
            'transaction_id': '',
            'event_callback': callback
          });

          return false;
        }}
      </script>

      <GoogleAnalytics gaId="AW-995113096" />
    </Html>
  );
}
