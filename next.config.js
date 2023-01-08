const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
  withContentlayer({
    reactStrictMode: true,
    modularizeImports: {
      '@heroicons/react/24/solid': {
        transform: '@heroicons/react/24/solid/{{member}}',
      },
      '@heroicons/react/20/solid': {
        transform: '@heroicons/react/20/solid/{{member}}',
      },
    },
    experimental: {
      appDir: true,
      runtime: 'edge',
      optimizeCss: process.env.NODE_ENV === 'production' ? true : false,
    },
  }),
);
