let add = (x, y) => x + y;

let myAbs = (x) => {
  if (x >= 0) {
    return x;
    } else {
    return -x;
  }
}
module.exports = { add, myAbs };