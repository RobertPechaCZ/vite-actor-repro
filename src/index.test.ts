import { describe, it, expect } from "vitest";
import { test } from "./index";

describe("get stuck", () => {
  it("test", () => {
    expect(test).toMatchInlineSnapshot();
  });
});
