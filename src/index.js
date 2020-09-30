
exports.min = function min (array) {
    let ithem = 0;
    Array.isArray(array) ? array.forEach((element) => { element < ithem ? ithem = element : element++ }) : ithem = 0;
    return ithem;
}

exports.max = function max (array) {
    let ithem = 0;
    Array.isArray(array) ? array.forEach((element) => { element > ithem ? ithem = element : element++ }) : ithem = 0;
    return ithem;
}

exports.avg = function avg (array) {
    let ithem = 0;
    (Array.isArray(array) && array.length > 0) ? ithem = (array.reduce((a, b) => { return ithem = a + b; })) / array.length : ithem = 0;
    return ithem;
}
