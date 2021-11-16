const { calendarFormat } = require("moment-timezone");

// next.config.js
module.exports = {
    images: {
      domains: ['testblobbee.blob.core.windows.net', 'goedetendenhaag.nl', 'media-cdn.tripadvisor.com', 'i1.wp.com', 'goedeten.blob.core.windows.net', 'image.freepik.com', ''],
    },
    webpack(config, { dev }) {
        config.devServer = config.devServer || {}
        config.devServer.proxy = "http://localhost:8080"
        // {

        //     // '/api': {
        //         target: 'http://localhost:8080',
        //         changeOrigin: true,
        //         secure: false,
        //         onProxyReq(request, req, res) {
        //             request.setHeader('origin', 'http://localhost:8080')
        //         }
        //         //pathRewrite: { '^/api': '/api' }
        //     // }
        // }

        //config.devServer.proxy = 'http://localhost:7000/api'

        return config
    }
  }


    
