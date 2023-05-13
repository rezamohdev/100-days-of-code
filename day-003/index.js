function isIsogram(str) {
    // Convert the string in lower case letters
    str = str.toLowerCase();
    let len = str.length;

    let arr = str.split('');

    arr.sort();
    for (let i = 0; i < len - 1; i++) {
        if (arr[i] == arr[i + 1])
            return false;
    }
    return true;
}

let isogramWord = "Okay";
let noIsogramWord = "Oh My gOd!";
if (isIsogram(isogramWord)) {
    console.log("true");
} else {
    "false"
}