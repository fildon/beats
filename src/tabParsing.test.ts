import { describe, expect, it } from "vitest";
import {
  parseLine,
  parseTabToInstrumentLines,
  toPlayableSymbols,
} from "./tabParsing";

describe("parseLine", () => {
  it("keeps internal bar separators inside the parsed pattern", () => {
    expect(parseLine("HH|x-x-|x-x-||")).toEqual({
      instrument: "HH",
      pattern: "x-x-|x-x-",
    });
  });

  it("preserves leading spacing in the pattern", () => {
    expect(parseLine("S|  --o---||")).toEqual({
      instrument: "S",
      pattern: "  --o---",
    });
  });

  it("treats trailing spaces as non-semantic while preserving internal spacing", () => {
    expect(parseLine("S|x-  -o   ||")).toEqual({
      instrument: "S",
      pattern: "x-  -o",
    });
  });

  it("returns null for invalid lines", () => {
    expect(parseLine("This is not a tab line")).toBeNull();
  });
});

describe("parseTabToInstrumentLines", () => {
  it("normalizes mixed newline styles", () => {
    const tab = "HH|x-x-x-x-||\r\nS|----o---||\nB|o---o---||\rT1|--------||";

    expect(parseTabToInstrumentLines(tab)).toEqual([
      { instrument: "HH", pattern: "x-x-x-x-" },
      { instrument: "S", pattern: "----o---" },
      { instrument: "B", pattern: "o---o---" },
      { instrument: "T1", pattern: "--------" },
    ]);
  });
});

describe("toPlayableSymbols", () => {
  it("ignores visual bar separators for timing steps", () => {
    const symbols = toPlayableSymbols("x---|x---|x---|x---");
    expect(symbols.join("")).toBe("x---x---x---x---");
    expect(symbols.length).toBe(16);
  });

  it("keeps non-bar symbols, including spaces", () => {
    const symbols = toPlayableSymbols("x- -| o--");
    expect(symbols).toEqual(["x", "-", " ", "-", " ", "o", "-", "-"]);
  });
});

describe("integration: full tab parsing", () => {
  const hitSteps = (symbols: string[]) =>
    symbols
      .map((symbol, index) => ({ symbol, index }))
      .filter(({ symbol }) => symbol === "x" || symbol === "o")
      .map(({ index }) => index);

  const toInstrumentMap = (
    lines: ReturnType<typeof parseTabToInstrumentLines>,
  ) =>
    Object.fromEntries(
      lines.map(({ instrument, pattern }) => [
        instrument,
        {
          symbols: toPlayableSymbols(pattern),
          hits: hitSteps(toPlayableSymbols(pattern)),
        },
      ]),
    ) as Record<string, { symbols: string[]; hits: number[] }>;

  const requireInstrument = (
    byInstrument: Record<string, { symbols: string[]; hits: number[] }>,
    instrument: string,
  ) => {
    const instrumentData = byInstrument[instrument];
    if (!instrumentData) {
      throw new Error(`Missing instrument in test fixture: ${instrument}`);
    }

    return instrumentData;
  };

  it("keeps all instruments aligned to expected hit steps with internal bars", () => {
    const tab = [
      "HH|x-x-|x-x-|x-x-|x-x-||",
      "S |----|o---|----|o---||",
      "BD|o---|----|o---|----||",
      "T1|----|----|--o-|----||",
      " 1 + 2 + 3 + 4 +",
    ].join("\n");

    const lines = parseTabToInstrumentLines(tab);
    const byInstrument = toInstrumentMap(lines);
    const hh = requireInstrument(byInstrument, "HH");
    const s = requireInstrument(byInstrument, "S");
    const bd = requireInstrument(byInstrument, "BD");
    const t1 = requireInstrument(byInstrument, "T1");

    expect(hh.symbols.length).toBe(16);
    expect(s.symbols.length).toBe(16);
    expect(bd.symbols.length).toBe(16);
    expect(t1.symbols.length).toBe(16);

    expect(hh.hits).toEqual([0, 2, 4, 6, 8, 10, 12, 14]);
    expect(s.hits).toEqual([4, 12]);
    expect(bd.hits).toEqual([0, 8]);
    expect(t1.hits).toEqual([10]);
  });

  it("handles uneven bar formatting and trailing whitespace without changing timing", () => {
    const tab = [
      "HH|x---|x--|x---|x----||   ",
      "S|----|o--|----|---o- ||",
      "B|o--|---|o---|------||",
      " 1 + 2 + 3 + 4 +",
    ].join("\n");

    const lines = parseTabToInstrumentLines(tab);
    const byInstrument = toInstrumentMap(lines);
    const hh = requireInstrument(byInstrument, "HH");
    const s = requireInstrument(byInstrument, "S");
    const b = requireInstrument(byInstrument, "B");

    expect(hh.symbols.length).toBe(16);
    expect(s.symbols.length).toBe(16);
    expect(b.symbols.length).toBe(16);

    expect(hh.hits).toEqual([0, 4, 7, 11]);
    expect(s.hits).toEqual([4, 14]);
    expect(b.hits).toEqual([0, 6]);
  });

  it("supports mixed step counts across instruments", () => {
    const tab = [
      "HH|x---|x---|x---|x---||",
      "S|---o---o----||",
      "B|o-----o-----o-----||",
      "T1|--o--||",
      " 1 + 2 + 3 + 4 +",
    ].join("\n");

    const lines = parseTabToInstrumentLines(tab);
    const byInstrument = toInstrumentMap(lines);
    const hh = requireInstrument(byInstrument, "HH");
    const s = requireInstrument(byInstrument, "S");
    const b = requireInstrument(byInstrument, "B");
    const t1 = requireInstrument(byInstrument, "T1");

    expect(hh.symbols.length).toBe(16);
    expect(s.symbols.length).toBe(12);
    expect(b.symbols.length).toBe(18);
    expect(t1.symbols.length).toBe(5);

    expect(hh.hits).toEqual([0, 4, 8, 12]);
    expect(s.hits).toEqual([3, 7]);
    expect(b.hits).toEqual([0, 6, 12]);
    expect(t1.hits).toEqual([2]);
  });
});
