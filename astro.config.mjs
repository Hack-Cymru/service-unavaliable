// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: "server",
  vite: {
    plugins: [tailwindcss()],
    define: {
      'import.meta.env': '{}', // Prevent inlining __vite_import_meta_env__
    },
  },

  adapter: node({
    mode: 'standalone'
  })
});