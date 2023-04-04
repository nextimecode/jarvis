// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.nextime.com.br',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.nextime.com.br/server-sitemap.xml', // <==== Add here
    ],
  },
}
