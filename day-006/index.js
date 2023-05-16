function nbYear(p0, percent, aug, p) {
    let year = 0;
    while (p0 < p) {
        p0 = Math.trunc(p0 + (p0 * percent) / 100 + aug);
        ++year;
    }
    return year;
}