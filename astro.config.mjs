import { defineConfig, fontProviders } from 'astro/config';
import { transformerNotationDiff, transformerNotationHighlight } from '@shikijs/transformers';
import customTheme from './src/assets/shiki/classic-dark.json';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  fonts: [
    {
      name: "Inter",
      cssVariable: "--font-inter",
      provider: fontProviders.fontsource(),
      weights: [400, 600],
      styles: ["normal", "italic"]
    },
    {
      name: "Cormorant",
      cssVariable: "--font-cormorant",
      provider: fontProviders.fontsource(),
      weights: [600],
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
  site: "https://davidmatthew-ie.github.io",
  base: "/noture.com",
  vite: {
    plugins: [tailwindcss()],
  }
});