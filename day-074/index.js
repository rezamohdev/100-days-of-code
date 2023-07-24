

const int32ToIp = (int32) => {
    let binaryNumber = int32.toString(2).padStart(32, '0');
    let buffer = [];
    let result = [];
    let i = 8;

    for (let index = 0; index < 4; index++) {
        buffer[index] = binaryNumber.slice(i - 8, i);
        i += 8;
        if (!buffer[index]) {
            buffer[index] = '0';
        }
    }

    for (let i = 0; i < buffer.length; i++) {
        result[i] = parseInt(buffer[i], 2);
    }

    return result.toString().replace(/,/g, '.');
}

console.log(int32ToIp(2149583361), 'expect', '128.32.10.1');
console.log(int32ToIp(1069972272), 'expect', '63.198.123.48');