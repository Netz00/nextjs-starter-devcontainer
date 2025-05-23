import type { NextConfig } from 'next';
import WebpackObfuscator from 'webpack-obfuscator';
import obfuscatorOptions from './obfuscator.config';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack(config, { isServer, dev }) {
    if (!isServer && !dev) {
      config.plugins!.push(new WebpackObfuscator(obfuscatorOptions, ['runtime~*.js']));
    }
    return config;
  },
};

export default nextConfig;
