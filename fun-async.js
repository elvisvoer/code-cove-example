async function funAsync(...args) {
  switch (args.length) {
    case 0:
      throw new Error("Expected at least 1 params");
    case 1:
      throw new Error("Neh, 2 would do");
    case 2:
      return 2;

    default:
      return -1;
  }
}

module.exports = funAsync;
