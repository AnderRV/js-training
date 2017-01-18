function upperCaseFirst1(str) {
    var splitArray = str.split(' ');
    var result = [];

    for (var x = 0; x < splitArray.length; x++) {
        result.push(splitArray[x].charAt(0).toUpperCase() + splitArray[x].slice(1));
    }

    return result.join(' ');
}

/******************/

function firstLetterToUpperCase(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function upperCaseFirst2(sentence) {
    return sentence.split(' ').map(firstLetterToUpperCase).join(' ');
}
