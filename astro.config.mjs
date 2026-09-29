// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Defina o domínio de produção para gerar canonical/OG absolutos:
  // site: "https://seu-dominio.com",
  build: {
    // CSS inteiro inline no <head>: zero requisições bloqueantes de estilo.
    inlineStylesheets: "always",
  },
});
