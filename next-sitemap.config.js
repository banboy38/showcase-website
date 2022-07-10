/** @type {import('next-sitemap').IConfig} */

const config = {
    siteUrl: process.env.SITE_URL || 'https://www.anirbanhalder.social',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
  
      additionalPaths: async (config) => [
        await config.transform(config, "/comments"),
      ],
     
    },
  }
  
  export default config