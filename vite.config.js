import { defineConfig } from "vite";
import viteImagemin from "vite-plugin-imagemin";
import svgSpritemapPlugin from "@spiriit/vite-plugin-svg-spritemap";

export default defineConfig({
  base: "./",
  plugins: [
    svgSpritemapPlugin("src/icons/**/*.svg", {
      output: { filename: "sprites.svg", svgo: true },
    }),
    viteImagemin({
      gifsicle: { optimizationLevel: 3, interlaced: false },
      optipng: { optimizationLevel: 5 },
      mozjpeg: { quality: 75 },
      svgo: {
        plugins: [
          { name: "removeViewBox" },
          { name: "removeEmptyAttrs", active: false },
        ],
      },
    }),
  ],
});
