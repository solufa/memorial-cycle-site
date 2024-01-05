import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <title>想い出サイクル</title>
        <meta name="description" content="足と映像が連動して楽しいエアロバイク" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
