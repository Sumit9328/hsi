// "use client";

// import React from "react";
// import Script from "next/script";

// export default function Scripts(): React.ReactElement {
// 	return (
// 		<>
// 			{/* Core deps first */}
// 			<Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" strategy="beforeInteractive" />
// 			{/* Local plugin bundle & site scripts */}
// 			<Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
// 			<Script src="/js/plugin.js" strategy="afterInteractive" />
// 			<Script src="/js/main.js" strategy="afterInteractive" />
// 			<Script src="/js/main-1.js" strategy="afterInteractive" />
// 			<Script src="/js/preloader.js" strategy="afterInteractive" />
// 			<Script src="/js/custom-swiper2.js" strategy="afterInteractive" />
// 			<Script src="/js/custom-countdown.js" strategy="afterInteractive" />
// 		</>
// 	);
// }



"use client";

import React from "react";
import Script from "next/script";

export default function Scripts(): React.ReactElement {
  return (
    <>
      {/* Core deps first */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
        strategy="afterInteractive"
      />
      {/* Local plugin bundle & site scripts */}
      <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/js/plugin.js" strategy="afterInteractive" />
      <Script src="/js/main.js" strategy="afterInteractive" />
      <Script src="/js/main-1.js" strategy="afterInteractive" />
      <Script src="/js/preloader.js" strategy="afterInteractive" />
      <Script src="/js/custom-swiper2.js" strategy="afterInteractive" />
      <Script src="/js/custom-countdown.js" strategy="afterInteractive" />
    </>
  );
}
