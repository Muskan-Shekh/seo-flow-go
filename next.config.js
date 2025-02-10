module.exports = {
    reactStrictMode: true,
    basePath: '',  // use only if your app is served in a subdirectory
    assetPrefix: '',  // use if serving assets from a CDN or different path
  
    // Custom Webpack Configuration (if needed)
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],  // for handling SVG files (if needed)
      });
      return config;
    },
  
    // To prevent overly aggressive caching or allow custom caching strategies
    headers() {
      return [
        {
          source: '/_next/static/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',  // Example for long-term caching static files
            },
          ],
        },
      ];
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        staticFolder: '/static',
      },
  };
  