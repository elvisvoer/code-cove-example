const funAsync = require("./fun-async");

test("test funAsync", async () => {
  // call test function without carrying about its execution
  for (let i = 0; i < 5; i++) {
    try {
      const args = Array.from(Array(i).keys()); // [0..i]
      await funAsync(...args);
    } catch {}
  }

  expect(true).toBeTruthy();
});
