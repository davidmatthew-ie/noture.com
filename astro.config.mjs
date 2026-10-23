import { defineConfig, fontProviders } from 'astro/config';
import { transformerNotationDiff, transformerNotationHighlight } from '@shikijs/transformers';
import customTheme from './src/assets/shiki/classic-dark.json';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  fonts: [
    {
      name: "Inter",
      cssVariable: "--font-source-sans",
      provider: fontProviders.fontsource(),
      weights: [400, 500, 700],
      styles: ["normal"]
    },
    {
      name: "Fragment Mono",
      cssVariable: "--font-fragment-mono",
      provider: fontProviders.fontsource(),
      weights: [400],
      styles: ["normal"]
    }
  ],
  markdown: {
    shikiConfig: {
      theme: customTheme,
      transformers: [
        transformerNotationDiff(),
        transformerNotationHighlight()
      ]
    }
  },

  site: "https://noture.com",

  vite: {
    plugins: [tailwindcss()],
  }
});