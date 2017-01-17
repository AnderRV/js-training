xdescribe('first letter of every word to upper case', function () {
    function upperCaseFirst(str) {
        // TODO
    }

    it('empty case', function () {
        var original = '';
        var expected = '';
        var actual = upperCaseFirst(original);

        expect(actual).toBe(expected);
    });

    it('single word case', function () {
        var original = 'javascript';
        var expected = 'Javascript';
        var actual = upperCaseFirst(original);

        expect(actual).toBe(expected);
    });

    it('single word case with nothing to change', function () {
        var original = 'Javascript';
        var expected = 'Javascript';
        var actual = upperCaseFirst(original);

        expect(actual).toBe(expected);
    });

    it('normal sentence', function () {
        var original = 'A town mouse and a country mouse were friends';
        var expected = 'A Town Mouse And A Country Mouse Were Friends';
        var actual = upperCaseFirst(original);

        expect(actual).toBe(expected);
    });

    it('should not convert upper to lower case', function () {
        var original = 'a TOWN moUSe';
        var expected = 'A TOWN MoUSe';
        var actual = upperCaseFirst(original);

        expect(actual).toBe(expected);
    });
});

xdescribe('array related', function () {
    function reverseOrder(arr) {
        // TODO
    }

    function arrayMax(arr) {
        // TODO
    }

    function flattenArray(arr) {
        // TODO
    }

    function countLetterAppearances() {
        // TODO
    }

    it('reverse alphabetically ordered array', function () {
        var original = ['Paul', 'George', 'Ringo', 'John'];
        var expected = ['Ringo', 'Paul', 'John', 'George'];
        var actual = reverseOrder(original);

        expect(actual).toEqual(expected);
    });

    it('get max in array', function () {
        var original = [8, 4, -15, 23, 16, -42];
        var expected = 23;
        var actual = arrayMax(original);

        expect(actual).toEqual(expected);
    });

    it('flatten array', function () {
        var original = [[0, 1], [2, 3], [4, 5]];
        var expected = [0, 1, 2, 3, 4, 5];
        var actual = flattenArray(original);

        expect(actual).toEqual(expected);
    });

    it('count letter appearances, case insensitive', function () {
        var original = 'this is it';
        var expected = {t: 2, h: 1, i: 3, s: 2, " ": 2};
        var actual = countLetterAppearances(original);

        expect(actual).toEqual(expected);
    });
});

xdescribe('exercises related to library', function () {
    var library = [
        {
            title: 'Refactoring',
            author: 'Martin Fowler',
            available: false,
            owner: 1
        },
        {
            title: 'Emotional Intelligence',
            author: 'Daniel Coleman',
            available: true,
            owner: 1
        },
        {
            title: 'Collective Intelligence',
            author: 'Toby Segaran',
            available: false,
            owner: 1
        },
        {
            title: 'Eloquent Javascript',
            author: 'Marijn Haverbeke',
            available: false,
            owner: 1
        },
        {
            title: 'Javascript: The Good Parts',
            author: 'Douglas Crockford',
            available: true,
            owner: 2
        },
        {
            title: 'Javascript: the Defintiive Guide',
            author: 'David Flanagan',
            available: true,
            owner: 2
        },
        {
            title: 'Secrets of the Javascript Ninja',
            author: 'John Resig',
            available: false,
            owner: 3
        }
    ];

    function countAvailableBooks(library) {
        // TODO
    }

    function countNotAvailableBooks(library) {
        // TODO
    }

    function countAvailableBooksWithTitleContaining(library, word) {
        // TODO
    }

    function getAuthorsForAvailableBooksWithTitleContaining(library, word) {
        // TODO


        //https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4#.43yuk07qz
        //https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e#.b0rs0z70p
    }

    it('count books with availability', function () {
        var expected = 3;
        var actual = countAvailableBooks(library);

        expect(actual).toBe(expected);
    });

    it('count books with no availability', function () {
        var expected = 4;
        var actual = countNotAvailableBooks(library);

        expect(actual).toBe(expected);
    });

    it('get count of available books containing "the" in title, case insensitive', function () {
        var expected = 2;
        var actual = countAvailableBooksWithTitleContaining(library, 'the');

        expect(actual).toBe(expected);
    });

    it('get alphabetically ordered authors with available books containing "Javascript" in title', function () {
        var expected = ['David Flanagan', 'Douglas Crockford'];
        var actual = getAuthorsForAvailableBooksWithTitleContaining(library, 'Javascript');

        expect(actual).toEqual(expected);
    });
});
