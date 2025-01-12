import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';

// Define the base hostname of your website
const hostname = 'https://jajdonghomesinc.com';

// Define your website's routes and metadata
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/models', changefreq: 'weekly', priority: 0.9 },
  { url: '/models/sable-palm', changefreq: 'monthly', priority: 0.8 },
  { url: '/models/sable-palm-plus', changefreq: 'monthly', priority: 0.8 },
  { url: '/models/bamboo-palm', changefreq: 'monthly', priority: 0.8 },
  { url: '/models/the-1350', changefreq: 'monthly', priority: 0.8 },
  { url: '/models/the-duplex', changefreq: 'monthly', priority: 0.8 },
  { url: '/privacy', changefreq: 'yearly', priority: 0.5 },
  { url: '/about', changefreq: 'yearly', priority: 0.6 },
];

(async () => {
  try {
    const sitemapStream = new SitemapStream({ hostname });
    const writeStream = createWriteStream('./dist/sitemap.xml');

    sitemapStream.pipe(writeStream);

    routes.forEach((route) => {
      sitemapStream.write({
        url: route.url,
        changefreq: route.changefreq,
        priority: route.priority,
      });
    });

    sitemapStream.end();

    writeStream.on('finish', () => {
      console.log('Sitemap generated successfully at ./dist/sitemap.xml');
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
})();
