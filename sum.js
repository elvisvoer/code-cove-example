function sum(...args) {
  return args.reduce((prev, cur) => {
    return prev + cur;
  }, 0);
}

module.exports = sum;
