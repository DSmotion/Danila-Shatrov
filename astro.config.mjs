import { defineConfig } from "astro/config";
import svgr from "vite-plugin-svgr";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svgr({
      include: "**/*.svg?react",
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          plugins: ["preset-default", "removeTitle", "removeDesc", "removeDoctype", "cleanupIds"],
        },
      },
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
