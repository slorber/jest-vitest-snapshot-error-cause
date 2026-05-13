
function throwError() {
  try {
    x.y
  } catch(e) {
    throw new Error("my parent error", {cause: e})
  }
}

test('Hello World', () => {
  expect(() => throwError()).toThrowErrorMatchingInlineSnapshot(`
"my parent error
Cause: x is not defined"
`)
});
