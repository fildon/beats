export type InstrumentLine = { instrument: string; pattern: string };

export const parseLine = (tabLine: string): InstrumentLine | null => {
  // Only split on the first '|' so internal bar separators remain part of the pattern.
  const firstSeparatorIndex = tabLine.indexOf("|");
  if (firstSeparatorIndex === -1) return null;

  const instrument = tabLine.slice(0, firstSeparatorIndex).trim();
  const rawPattern = tabLine.slice(firstSeparatorIndex + 1);

  // Preserve internal spacing (timing), but trim only trailing delimiters/padding.
  const pattern = rawPattern.replace(/\|+\s*$/, "").replace(/\s+$/, "");

  return instrument && pattern ? { instrument, pattern } : null;
};

export const parseTabToInstrumentLines = (tab: string): InstrumentLine[] => {
  // Standardize newlines just in case.
  const normalizedTab = tab.replace(/(\r\n)|\r|\n/g, "\n");
  const tabLines = normalizedTab.split(/\n/g);
  return tabLines
    .map(parseLine)
    .filter((line): line is InstrumentLine => line !== null);
};

// Internal '|' separators are visual only and do not consume rhythmic steps.
export const toPlayableSymbols = (pattern: string): string[] =>
  pattern.split("").filter((symbol) => symbol !== "|");
