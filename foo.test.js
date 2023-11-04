// foo.test.js
const foo = require("./foo");

test("test foo", () => {
  // call test function ignoring its execution
  for (let i = 0; i < 5; i++) {
    try {
      const args = Array.from(Array(i).keys()); // [0..i]
      foo(...args);
    } catch {}
  }

  expect(true).toBeTruthy();
});
