import React from "react";
import Script from 'next/script';

// este compoente não está utilizado ainda. Só o do index principal no doc do pages

const GoogleAnalytics = () => {
  return (
    <>
      {/* Google Analytics */}
      <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16549865575">
</script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-16549865575');
</script>
      {/* End Google Analytics */}
    </>
  );
};

export default GoogleAnalytics;
