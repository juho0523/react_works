const add = (x, y) => x + y;

const myAbs = (x) => {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};

export { add, myAbs };