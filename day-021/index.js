const parse = data => {

    var response = [];
    var num = 0;

    data.split("").forEach(function (val) {

        if (val == "d") {
            num--;
        } else if (val == "i") {
            num++;
        } else if (val == "s") {
            num = num * num;
        } else if (val == "o") {
            response.push(num);
        }

    });

    return response;

}

console.log(parse("iiisdoso"));