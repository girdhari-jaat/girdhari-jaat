import { describe, expect, it, vi } from "vitest";

const captured = vi.hoisted(() => ({
  config: {
    vite: { base: "" },
    tanstackStart: {
      pages: [] as { path: string }[],
      prerender: { enabled: false, autoStaticPathsDiscovery: true },
    },
  },
}));

vi.mock("@lovable.dev/vite-tanstack-config", () => ({
  defineConfig: (config: typeof captured.config) => {
    captured.config = config;
    return config;
  },
}));

import "../../vite.config";

describe("GitHub Pages deployment", () => {
  it("uses / for the username.github.io root URL", () => {
    expect(captured.config.vite.base).toBe("/");
  });

  it("prerenders the portfolio root without discovering other routes", () => {
    expect(captured.config.tanstackStart.pages).toEqual([{ path: "/" }]);
    expect(captured.config.tanstackStart.prerender.enabled).toBe(true);
    expect(captured.config.tanstackStart.prerender.autoStaticPathsDiscovery).toBe(false);
  });
});