import { describe, expect, it } from "vitest";

import {
  extractVariables,
  getIsCharOrUnderscore,
  isValidVariableName,
  stringifyValue,
} from "./stringCheck";

describe("getIsCharOrUnderscore", () => {
  it("returns true for letters, underscores, and Japanese characters", () => {
    expect(getIsCharOrUnderscore("abc")).toBe(true);
    expect(getIsCharOrUnderscore("ABC_")).toBe(true);
    expect(getIsCharOrUnderscore("あいう")).toBe(true);
    expect(getIsCharOrUnderscore("アイウ")).toBe(true);
    expect(getIsCharOrUnderscore("漢字")).toBe(true);
    expect(getIsCharOrUnderscore("a_あ")).toBe(true);
  });

  it("returns false for digits, symbols, or empty strings", () => {
    expect(getIsCharOrUnderscore("a1")).toBe(false);
    expect(getIsCharOrUnderscore("a-b")).toBe(false);
    expect(getIsCharOrUnderscore("")).toBe(false);
  });
});

describe("isValidVariableName", () => {
  it("accepts names that start with a letter and include letters/underscores", () => {
    expect(isValidVariableName("foo")).toBe(true);
    expect(isValidVariableName("Foo_bar")).toBe(true);
  });

  it("rejects names that start with non-letters or contain other characters", () => {
    expect(isValidVariableName("_foo")).toBe(false);
    expect(isValidVariableName("1foo")).toBe(false);
    expect(isValidVariableName("foo1")).toBe(false);
    expect(isValidVariableName("foo-bar")).toBe(false);
  });
});

describe("extractVariables", () => {
  it("returns unique, valid variable names from mustache strings", () => {
    const input =
      "Hello {{name}} and {{name}} and {{foo_bar}} and {{ invalid }} and {{_bad}}";

    expect(extractVariables(input)).toEqual(["name", "foo_bar"]);
  });
});

describe("stringifyValue", () => {
  it("stringifies primitives and objects", () => {
    expect(stringifyValue("text")).toBe("text");
    expect(stringifyValue(42)).toBe("42");
    expect(stringifyValue(false)).toBe("false");
    expect(stringifyValue({ a: 1 })).toBe('{"a":1}');
    expect(stringifyValue(null)).toBe("null");
  });
});
