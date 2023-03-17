import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import Link from 'next/link'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {

  const { t } = useTranslation();

  


  return (
    <div>
      <Head>
      <title>{t('title')}</title>
        <link rel="favicon" href="/favicon.png" />
        <meta property="og:image" content="/opengraph.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="/opengraph.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nieuwe Instituut CollectionBot" />
        <meta property="og:title" content="Nieuwe Instituut CollectionBot" />
        <meta property="og:description" content="A prototype demonstrating the use of a generative AI application to disclose collection data." />
        <meta property="twitter:description" content="A prototype demonstrating the use of a generative AI application to disclose collection data." />
        
      </Head>

     
        <header className={styles.header}>
        <div className={styles.headercontainer}>
        <img src="/ni-logo-small.png" className={styles.icon} />
        </div>
 
        </header>
        <main className={styles.main}>

        <h1 className={styles.title}><span className={styles.cerial}>{t('mainTitle')}</span></h1>
        <p className={styles.intro}>{t('intro')}</p> 
        
        <p className={styles.regular}>This website was made using the <a href="https://openai.com/blog/introducing-chatgpt-and-whisper-apis">new ChatGPT API by OpenAI</a>. It prepends user questions with specific information about a collection item, allowing for a fair amount of control over the accuracy of the AI's response, while still benefiting from the AI's abilities to add all kinds of information in a customizable, conversational interface. The following collection items are available:</p>

        <div className={styles.cardContainer}>
  <Link href="/van-doesburg-interior-model" className={styles.card}>
    
      <img src="/maquette.jpeg" className={styles.cardImage} alt="Van Doesburg's interior model for l'Aubette" />
      <div className={styles.titleWrapper}> <h4 className={styles.cardTitle}>Van Doesburg's interior model for l'Aubette</h4></div>

  </Link>
  <Link href="/sonneveld-house" className={styles.card}>
  
      <img src="/sonneveld.jpg" className={styles.cardImage} alt="Sonneveld House" />
     <div className={styles.titleWrapper}><h4 className={styles.cardTitle}>Sonneveld House</h4></div>
    
  </Link>
</div>


        
     

<p className={styles.disclaimer}>This prototype was made by Jaap Stronks.</p>
      </main>
    </div>
  );
}


// Add the getServerSideProps function here
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['translation'])),
    },
  };
}