const cov = Array(18).fill(0);// foo.js
function foo(...args) {
cov[2]++;switch (args.length) {
    case 0:
cov[4]++;throw new Error("Expected at least 1 param");
    case 1:
cov[6]++;throw new Error("Neh, 2 would do");
    case 2:
cov[8]++;return 2;
    case 3:
cov[10]++;return undef.something;

    default:
cov[13]++;return -1;
  }
}

cov[17]++;module.exports = foo;
module.exports.__cov__ = cov;
