import {expect,test } from "bun:test"
import { toPairs } from "../utils/toPairs"

test("test the toParis function", () => {
  expect(toPairs({ a: 1, b: 2, c: 3 })).toEqual([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ]);
})