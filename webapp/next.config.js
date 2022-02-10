const { calendarFormat } = require("moment-timezone");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// next.config.js
module.exports = withBundleAnalyzer({
    compiler: {
      // ssr and displayName are configured by default
      styledComponents: true,
    },
    swcMinify: true,  
    images: {
      domains: ['testblobbee.blob.core.windows.net', 'goedetendenhaag.nl', 'media-cdn.tripadvisor.com', 'i1.wp.com', 'goedeten.blob.core.windows.net', 'image.freepik.com', ''],
    },
    webpack(config, { dev }) {
        config.devServer = config.devServer || {}
        config.devServer.proxy = "http://localhost:8080"
        return config
    }
  });


    
