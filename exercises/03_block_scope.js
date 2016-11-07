describe('there is (was) no block scope in javascript', function() {
    it('should modificate defined variable inside a block', function () {
        var a = 1;

        if (true) {
            a = 2;
        }

        expect(a).toBe(2);
    });

    it('should defined a variable inside a block a be accesible from the outside', function () {
        if (true) {
            var a = 2;
        }

        expect(typeof a).toBe('number');
        expect(a).toBe(2);
    });

    it('should defined local variable (ES6)!', function () {
        if (true) {
            let a = 2;
        }

        expect(typeof a).toBe('undefined');
    });
});

describe('there is function scope in javascript', function() {
    it('should be undefined if declared inside a function', function () {
        function doWork() {
            var a = 2;

            return a;
        }

        expect(doWork()).toBe(2);
        expect(typeof a).toBe('undefined');
    });
});
