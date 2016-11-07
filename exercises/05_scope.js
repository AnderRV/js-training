describe('how does javascript scope work', function() {
    it('should store variable inside a function', function () {
        var test = 'outer';

        function doWork() {
            // if there is no var keyword bad things happen
            var test = 'inner';

            return test;
        }

        expect(doWork()).toBe('inner');
        expect(test).toBe('outer');
    });

    it('should store variable inside a function and modify internally', function () {
        var revealSecret = (function() {
            var secretNumber = 42;

            return function(password) {
                return secretNumber++;
            };
        }());

        // expect(revealSecret.toString()).toBe('');

        expect(typeof revealSecret).toBe('function');

        expect(revealSecret()).toBe(42);
        expect(revealSecret()).toBe(43);
        expect(revealSecret()).toBe(44);
    });
});
