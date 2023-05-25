function solution(number) {
    var sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 == 0) {
            sum += i;
        } else if (i % 5 == 0) {
            sum += i;
        } else { continue; }
    }
    return sum;
}
const componentToHex = (c) => {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
const rgb = (r, g, b) => {
    return `#${componentToHex(r) + componentToHex(g) + componentToHex(b)}`;
}
console.log(rgb(255, 255, 255)) // returns FFFFFF
console.log(rgb(255, 255, 300)) // returns FFFFFF
console.log(rgb(0, 0, 0)) // returns 000000
console.log(rgb(148, 0, 211)) // returns 9400D3

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

console.log(rgbToHex(255, 255, 300)); // #0033ff