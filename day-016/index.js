const solution = (str) => {
    var newString = str.split("");
    var splitStr = str.split("");
    var capitalStr = str.toUpperCase().split("");
    for (var i = splitStr.length - 1; i >= 0; i--) {
        if (splitStr[i] === capitalStr[i]) {
            newString.splice(i, 0, ' ');
        }
    }
    return newString.join("");
}
console.log(solution('camelCasing'));
console.log(solution('camelCasingTest'));
console.log(solution(''));