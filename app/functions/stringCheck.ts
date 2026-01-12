const HIRAGANA = "\u3040-\u309F";
const KATAKANA = "\u30A0-\u30FF";
const KANJI = "\u4E00-\u9FFF";

export function getIsCharOrUnderscore(value: string): boolean {
  const charOrUnderscore = new RegExp(
    `^[a-zA-Z_${HIRAGANA}${KATAKANA}${KANJI}]+$`
  );

  return charOrUnderscore.test(value);
}

// Regex for valid variable names (letters, underscores, starting with letter)
export const VARIABLE_REGEX = /^[a-zA-Z][a-zA-Z_]*$/;

// Regex to find variables in mustache syntax
export const MUSTACHE_REGEX = /{{([^{}]*)}}+/g;

// Regex to find multiline variables
export const MULTILINE_VARIABLE_REGEX = /{{[^}]*\n[^}]*}}/g;

// Regex to find unclosed variables
export const UNCLOSED_VARIABLE_REGEX = /{{(?![^{]*}})/g;

export function isValidVariableName(variable: string): boolean {
  return VARIABLE_REGEX.test(variable);
}

export function extractVariables(mustacheString: string): string[] {
  const matches = Array.from(mustacheString.matchAll(MUSTACHE_REGEX))
    .map((match) => match[1])
    .filter(isValidVariableName);

  return [...new Set(matches)];
}

export function stringifyValue(value: unknown) {
  switch (typeof value) {
    case "string":
      return value;
    case "number":
      return value.toString();
    case "boolean":
      return value.toString();
    default:
      return JSON.stringify(value);
  }
}
