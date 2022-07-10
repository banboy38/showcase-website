const siteUrl = "https://anirbanhalder.social/";
module.exports = {
  siteUrl,
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
};