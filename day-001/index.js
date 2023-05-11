

const button = document.querySelector('#button');

function reverseWords(str) {
    const words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].split("").reverse().join("");
    }
    return words.join(" ");
}

button.addEventListener('click', () => {
    document.querySelector("#output").textContent = reverseWords(document.querySelector("#input").value);


});
