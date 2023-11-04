// fun.js
function fun(...args) {
  switch (args.length) {
    case 0:
      throw new Error("Expected at least 1 param");
    case 1:
      throw new Error("Neh, 2 would do");
    case 2:
      return 2;
    case 3:
      return undef.something;

    default:
      return -1;
  }
}

module.exports = fun;
