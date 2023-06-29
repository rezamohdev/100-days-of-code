
function capitalize(string) {
    const lowercaseString = string.toLowerCase();

    const words = lowercaseString.split(" ");

    const capitalizedWords = words.map((word) => {
        return word[0].toUpperCase() + word.slice(1);
    });

    const capitalizedString = capitalizedWords.join(" ");

    return capitalizedString;
}

capitalize("Hello my dear friend");