import React from "react";
import Script from 'next/script';

// este compoente não está utilizado ainda. Só o do index principal no doc do pages

const GoogleAnalytics = () => {
  return (
    <>
      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-16549865575"
      />
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
    </>
  );
};

export default GoogleAnalytics;
