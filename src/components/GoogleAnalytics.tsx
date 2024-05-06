import React from "react";
import Script from 'next/script';

const GoogleAnalytics = () => {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16549865575"
        strategy="afterInteractive"
      />
      <Script strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16549865575');
        `}
      </Script>
      {/* End Google Analytics */}
    </>
  );
};

export default GoogleAnalytics;
