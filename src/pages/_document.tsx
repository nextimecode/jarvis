/* eslint-disable @next/next/next-script-for-ga */
import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/next_ico.svg" />
          <meta
            name="keywords"
            content="criação de sites, empresas de sites, desenvolvedor de sites, programador de sites, criação de aplicativos, desenvolver aplicativos, criação de site profissional, criação de websites, criador de sites, criar um site, desenvolvedor de aplicativos, site responsivo, criação de app, elaboração de sites, site personalizado, desenvolver ecommerce, design system, designer para fazer site, site alto padrão"
          />
          <meta property="og:url" content="https://www.nextime.com.br/" />
          <meta property="og:type" content="page" />
          <meta property="og:title" content="NeXTIME" />
          <meta
            property="og:image"
            content="https://www.nextime.com.br/images/logos/logo_nextime.svg"
          />
          <meta
            property="og:description"
            content="Site da empresa NeXTIME, temos como visão: otimizar o tempo através do desenvolvimento de novas tecnologias, produtos inovadores, soluções criativas e educação. Possibilitando aos indivíduos gastarem suas energias realizando os seus sonhos."
          />
          <meta property="og:site_name" content="NeXTIME" />
          <meta property="article:author" content="NeXTIME" />
          <meta name="twitter:title" content="NeXTIME" />
          <meta
            name="twitter:description"
            content="Site da empresa NeXTIME, temos como visão: otimizar o tempo através do desenvolvimento de novas tecnologias, produtos inovadores, soluções criativas e educação. Possibilitando aos indivíduos gastarem suas energias realizando os seus sonhos."
          />
          <meta
            property="twitter:image:src"
            content="https://www.nextime.com.br/images/logos/logo_nextime.svg"
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-HN7P9PMXX2" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HN7P9PMXX2');
            `
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:2699382,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
