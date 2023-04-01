/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */

const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([]);
const { i18n } = require("./next-i18next.config");

const plugins = [
  [
    withTM,
    {
      webpack5: true,
      reactStrictMode: true,
    },
  ],
];

/**
 * @type {import('next').NextConfig}
 * */
const config = {
  i18n,
  distDir: "build",
  swcMinify: true,
  webpack: (cfg, { isServer }) => {
    if (!isServer) {
      cfg.resolve.fallback.fs = false;
      cfg.optimization.minimize = false;
    }
    return cfg;
  },

  env: {
    GRAPH_URI: process.env.GRAPH_URI,
  },
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: "/redirect-test",
        destination: "/",
        permanent: true,
      },
    ];
  },
  poweredByHeader: false,
};

module.exports = withPlugins(plugins, config);
