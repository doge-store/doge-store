// https://vitejs.dev/config/

import { defineConfig } from 'vite'
// import { defineConfig } from "vitest/config";
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert'//npm i vite-plugin-mkcert -D
import path from "path";

export default defineConfig({
  plugins: [react(), mkcert()],
  esbuild: {
    logOverride: {"this-is-undefined-in-esm": "silent"},
  },
  server: {
    host: true,
    https: true,
    proxy: {
      "^/api/.*": {
        target: "https://doge-coin.store",
        changeOrigin: true,
        secure: true,
        rewrite: (path: string) => path.replace(/^\/api/, "")
      }
    },//proxy
  },
  resolve: {}
});
