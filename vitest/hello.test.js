import { expect, test } from 'vitest';

function throwError() {
  try {
    x.y
  } catch(e) {
    throw new Error("my parent error", {cause: e})
  }
}

test('Hello World', () => {
  expect(() => throwError()).toThrowErrorMatchingInlineSnapshot(`[Error: my parent error]`)
});
