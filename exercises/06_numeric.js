describe('how do javascript Math and numerics work', function() {
    it('should show why we shouldn\'t use big numbers', function () {
        expect(9999999999999999).toBe(10000000000000000);
    });

    it('another reason', function () {
        expect(1.05 - 1).not.toBe(0.05);
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
