/* eslint-disable @next/next/next-script-for-ga */

import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />

          {/* Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16549865575"></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'AW-16549865575');
                            `,
                        }}
                    />
                    {/* End Google Analytics */}


        </Head>

        <body>
          
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
