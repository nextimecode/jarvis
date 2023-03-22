const url = 'https://www.nextime.com.br'
module.exports = {
  siteUrl: process.env.SITE_URL || url,
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [],
  robotsTxtOptions: {
    additionalSitemaps: [`${url}/sitemap.xml`, `${url}/server-sitemap-index.xml`]
  }
}
