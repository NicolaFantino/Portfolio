// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://nicolafantino.github.io/Portfolio/',
  base: '/Portfolio/',
  vite: {
    plugins: [tailwindcss()],
  },
});
