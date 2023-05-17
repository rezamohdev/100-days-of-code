function findEvenIndex(arr) {
    let left = 0;
    let right = 0;
    const reducer = (ac, cv) => ac + cv;
    if (arr.length == 0) { return -1; }
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            right = arr.slice(1).reduce(reducer, 0);
            if (right === i) { return i; }
        } else {
            left = arr.slice(0, i).reduce(reducer, 0);
            right = arr.slice(i + 1).reduce(reducer, 0);
            if (left == right) { return i; }
        }
    }
    return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]));
console.log(findEvenIndex([1, 100, 50, 55, 20, -88]));