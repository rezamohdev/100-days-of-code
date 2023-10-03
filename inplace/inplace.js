function removeDuplicates(a) {

    let i = 0;
    for (j = 1; j < a.length; j++) {
        if (a[i] != a[j]) {
            i++;
            a[i] = a[j];
        }
    }

    return i + 1;

};