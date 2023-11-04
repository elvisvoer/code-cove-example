// index.js
const foo = require("./foo-cov");

for (let i = 0; i < 5; i++) {
  try {
    const args = Array.from(Array(i).keys()); // [0..i]
    foo(...args);
  } catch {}
}

console.log(JSON.stringify(foo.__cov__));
