import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://satoriarw.vercel.app",
  trailingSlash: "never",
  vite: {
    plugins: [tailwind()],
  },
  integrations: [
    react({
      experimentalReactChildren: true,
    }),
  ],
});
