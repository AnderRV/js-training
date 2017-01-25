function bookAvailability(desiredStatus) {
    return function (book) {
        return book.available === desiredStatus;
    };
}

function bookTitleContainsWord(word) {
    return function (book) {
        return book.title.toLowerCase().includes(word.toLowerCase());
    };
}

var isBookAvailable = bookAvailability(true);
var isBookNotAvailable = bookAvailability(false);

function countAvailableBooks(library) {
    return library.filter(isBookAvailable).length;
}

function countNotAvailableBooks(library) {
    return library.filter(isBookNotAvailable).length;
}

function countAvailableBooksWithTitleContaining(library, word) {
    var titleFilter = bookTitleContainsWord(word);

    return library
        .filter(isBookAvailable)
        .filter(titleFilter)
        .length;
}

function getBookAuthor(book) {
    return book.author;
}

function getAuthorsForAvailableBooksWithTitleContaining(library, word) {
    var titleFilter = bookTitleContainsWord(word);

    return library
        .filter(isBookAvailable)
        .filter(titleFilter)
        .map(getBookAuthor)
        .sort();
}

function arrayMax1(arr) {
    return Math.max.apply(null, arr);
}

function arrayMax2(arr) {
    return arr && arr.length > 0 && arr.reduce(function (a, b) {
            return Math.max(a, b);
        });
}
