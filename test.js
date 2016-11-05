describe('Basic equalities', function() {
    it('should compare same number and return true', function () {
        expect(1).toBe(1);
    });
});

describe('lib functions', function() {
    describe('sum', function () {
        it('should sum two numbers', function () {
            var result = sum(1, 2);

            expect(result).toBe(3);
        });
    });

    describe('subtract', function () {
        it('should subtract second number from the first one', function () {
            var result = subtract(3, 2);

            expect(result).toBe(1);
        });
    });
});
