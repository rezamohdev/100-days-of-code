function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    if (Number.isInteger(Math.sqrt(sq))) { return (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1); }
    return -1;
}
console.log(findNextSquare(121));
console.log(findNextSquare(2475));
console.log(findNextSquare(625));
console.log(findNextSquare(114));