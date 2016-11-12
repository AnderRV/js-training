describe('how javascript works with parameters, by value or reference', function () {
    it('test with strings', function () {
        var str = 'outer';

        function doWork(str) {
            str = 'inner';
        }

        expect(str).toBe('outer');
        doWork(str);
        expect(str).toBe('outer');
    });

    it('test with numbers', function () {
        var number = 13;

        function doWork(number) {
            number = 23;
        }

        expect(number).toBe(13);
        doWork(number);
        expect(number).toBe(13);
    });

    it('test with booleans', function () {
        var bool = true;

        function doWork(bool) {
            bool = false;
        }

        expect(bool).toBe(true);
        doWork(bool);
        expect(bool).toBe(true);
    });

    it('test with booleans', function () {
        var bool = true;

        function doWork(bool) {
            bool = false;
        }

        expect(bool).toBe(true);
        doWork(bool);
        expect(bool).toBe(true);
    });

    it('test with objects', function () {
        var obj = {
            test: 'outer'
        };

        function doWork(obj) {
            obj.test = 'inner';
        }

        expect(obj.test).toBe('outer');
        doWork(obj);
        expect(obj.test).toBe('inner');
    });

    it('test with arrays', function () {
        var arr = [1, 2, 3];

        function doWork(arr) {
            arr.push(4);
        }

        expect(arr.length).toBe(3);
        // TODO what should arr contain
        // expect(arr).to....;

        doWork(arr);

        expect(arr.length).toBe(4);
        // TODO what should arr contain
        // expect(arr).to.....;
    });

    it('should freeze an object', function () {
        // 'use strict';

        var obj = {
            test: 'that',
            another: 'one'
        };

        Object.freeze(obj);

        obj.test = 'modified';
        delete obj.another;

        expect(obj.test).toBe('that');
        expect(obj.another).toBe('one');
        expect(Object.isFrozen(obj)).toBe(true);
    });

    it('All that glitters is not gold', function () {
        // 'use strict';

        var obj = {
            test: {
                inner: 'value'
            },
            another: 'one'
        };

        Object.freeze(obj);

        obj.test.inner = 'modified';
        delete obj.another;

        expect(obj.test.inner).toBe('modified');
        expect(obj.another).toBe('one');
        expect(Object.isFrozen(obj)).toBe(true);
        expect(Object.isFrozen(obj.test)).toBe(false);
        // https://facebook.github.io/immutable-js/
    });

    it('should throw an error when array is frozen', function () {
        var arr = [1, 2];


        function doWork() {
            arr.push(3);
        }

        Object.freeze(arr);

        expect(doWork).toThrowError("Can't add property 2, object is not extensible");
        expect(Object.isFrozen(arr)).toBe(true);
    });

    it('', function () {
        var obj1 = {},
            obj2 = {},
            obj3 = {};

        obj2.test = 'yes';
        Object.freeze(obj2);
        obj1.first = obj2;
        obj1.first.that = 'yes';
        obj1.last = obj3;
        Object.freeze(obj1);
        obj1.last.test = 'no';

        // TODO
        // expect(obj1.first.test).toBe();
        // expect(obj1.first.that).toBe();
        // expect(obj1.last.test).toBe();
        // expect(obj1.last.that).toBe();
    });
});
