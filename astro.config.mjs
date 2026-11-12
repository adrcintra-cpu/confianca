// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Domínio de produção (canonical e OG absolutos):
  site: "https://www.confiancacred.com.br",
  build: {
    // CSS inteiro inline no <head>: zero requisições bloqueantes de estilo.
    inlineStylesheets: "always",
  },
});
