/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== 'production'
const name = "Platical-Ranking"

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images:{
  //   loader: 'imgix',
  //   path: ["https://Plactical.github.io/Plactical-Ranking"],
  // },
  assetPrefix:!debug ? `/${name}` : '',
};

module.exports = nextConfig
