describe('how do javascript Math and numerics work', function() {
    it('should show why we shouldn\'t use big numbers', function () {
        expect(9999999999999999).toBe(10000000000000000);
    });

    it('max safe integer', function () {
        expect(Number.MAX_SAFE_INTEGER).toBe(Math.pow(2, 53) - 1);
        expect(Number.isSafeInteger(9007199254740991)).toBe(true);
        expect(Number.isSafeInteger(9007199254740992)).toBe(false);
    });

    it('one reason not to use floating point numbers in javascript', function () {
        expect(1.05 - 1).not.toBe(0.05);
    });

    it('another reason', function () {
        expect(0.1 + 0.1 + 0.1).not.toBe(0.3);
    });

    it('workaround for floating point number calculus', function () {
        var sum = (1 + 1 + 1) / 10;

        expect(sum).toBe(0.3);
    });

    it('should show Infinity', function () {
        expect(1/0).toBe(Infinity);
    });

    it('should show Infinity', function () {
        expect(-1/0).toBe(-Infinity);
    });

    it('should be an octal starting with 0', function () {
        expect(011).toBe(9);
    });

    it('should equal zero and minus zero', function () {
        expect(-0).toBe(0);
    });

    it('should round downwards', function () {
        var result = Math.round(0.4999999999999999);
        expect(result).toBe(0);
    });

    it('and another reason', function () {
        var result = Math.round(0.49999999999999999);
        expect(result).toBe(1);
    });

    it('', function () {
        var result = Math.floor(0.9999999999999999);
        // TODO
        // expect(result).toBe();
    });

    it('', function () {
        var result = Math.floor(0.99999999999999999);
        // TODO
        // expect(result).toBe();
    });
});
