// next-sitemap.config.js
module.exports = {
  siteUrl: "https://triplemultipurposetechnology.com.ng", // ✅ Replace with your real domain
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/admin", "/api/*"],
};
