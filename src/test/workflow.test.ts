import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const workflow = readFileSync(".github/workflows/deploy.yml", "utf8");

describe("GitHub Pages workflow", () => {
  it("uploads .output/public, the folder npm run build creates on GitHub", () => {
    expect(workflow).toMatch(/upload-pages-artifact@v\d+\s+with:\s+path: \.output\/public\s/);
  });

  it("no longer references dist/client, which does not exist on GitHub", () => {
    expect(workflow).not.toContain("dist/client");
  });
});
