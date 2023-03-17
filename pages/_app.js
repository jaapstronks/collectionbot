import i18n from '../i18n'; // import the i18next instance
import { appWithTranslation } from 'next-i18next';
import "./global.css";
import React, { useEffect } from "react";


import { init } from "@socialgouv/matomo-next";


const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);