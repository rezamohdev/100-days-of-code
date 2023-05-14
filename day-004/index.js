function highAndLow(numbers) {
    let arr = numbers.split` `.map(x => +x).sort();
    return `${Math.max(...arr)} ${Math.min(...arr)}`;
}