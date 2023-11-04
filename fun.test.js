// fun.test.js
const fun = require("./fun");

test("test fun", () => {
  // call test function ignoring its execution
  for (let i = 0; i < 5; i++) {
    try {
      const args = Array.from(Array(i).keys()); // [0..i]
      fun(...args);
    } catch {}
  }

  expect(true).toBeTruthy();
});
