import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import satoriAstro from "satori-astro";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react({
      experimentalReactChildren: true,
    }),
    satoriAstro(),
  ],
});
