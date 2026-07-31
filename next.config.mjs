import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  },
  webpack(config) {
    // Provide a local shim for react-server-dom-webpack server entry used by some libs
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-server-dom-webpack/server.edge': path.resolve(__dirname, 'shims/react-server-dom-webpack-server.edge.js')
    };
    return config;
  }
};

export default nextConfig;
