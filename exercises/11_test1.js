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
