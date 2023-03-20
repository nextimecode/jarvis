const url = 'https://www.nextime.com.br'
module.exports = {
  siteUrl: process.env.SITE_URL || url,
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: [],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${url}/sitemap.xml`,
    ],
  },
}
