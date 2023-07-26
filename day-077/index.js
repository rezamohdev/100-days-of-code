const str = '04/20/2019';
const regex = /0[1-6]\W\d\d\W2019/g; // this pattern searches for months in the first half of 2019
str.match(regex); // [ '04/20/2019' ]