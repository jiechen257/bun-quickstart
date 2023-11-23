import { expect, test } from "bun:test";
import { add } from "../utils/add";

test("test the add function", () => {
	expect(add(1, 2, 3, 4)).toBe(10);
});
