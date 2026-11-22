// @lovable.dev/vite-tanstack-config already includes tanstackStart, react, tailwind, nitro etc. — do NOT add them manually.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: { base: "/" },
  tanstackStart: {
    server: { entry: "server" },
    // Static HTML for GitHub Pages (user site girdhari-jaat.github.io is served at "/", so no base path needed).
    pages: [{ path: "/" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
