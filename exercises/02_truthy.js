describe('truthy and falsy', function() {
    it('should determine that some values are falsy', function () {
        expect(false).toBeFalsy();
        expect(null).toBeFalsy();
        expect(0).toBeFalsy();
        expect(undefined).toBeFalsy();
        expect('').toBeFalsy();
        expect(NaN).toBeFalsy();
    });

    it('should determine that some values are truthy', function () {
        expect(true).toBeTruthy();
        expect(1).toBeTruthy();
        expect(' ').toBeTruthy();
        expect([]).toBeTruthy();
        expect({}).toBeTruthy();
    });
});
