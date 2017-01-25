function arrayMultiplied(arr, by) {
    return arr.map(function (value) {
        return value * by;
    });
}

function flattenArray(arr) {
    return arr.reduce(function (a, b) {
        return a.concat(b);
    }, []);
}

function reverseOrder(arr) {
    return arr.sort().reverse();
}

function addOneToObjectProperty(obj, key) {
    if (obj[key]) {
        ++obj[key];
    } else {
        obj[key] = 1;
    }

    return obj;
}

function addOneToObjectPropertyObfuscated(obj, key) {
    // I do not recommend this
    return (obj[key]++ || (obj[key] = 1)) && obj;
}

function countLetterAppearances(str) {
    return str.split('').reduce(addOneToObjectProperty, {});
}

function arrayMax1(arr) {
    return Math.max.apply(null, arr);
}

function arrayMax2(arr) {
    return arr && arr.length > 0 && arr.reduce(function (a, b) {
            return Math.max(a, b);
        });
}
