describe('javascript is weak typed', function() {
    it('should convert type to "adequate" one', function () {
        expect(1 + 2).toBe(3);
        expect('1' + '2').toBe('12');

        expect(1 + '2').toBe('12');
        expect('1' + 2).toBe('12');

        expect(1 + 2 + '').toBe('3');
        expect('' + 1 + 2).toBe('12');

        expect(7 + 7 + 7).toBe(21);
        expect(7 + 7 + '7').toBe('147');
        expect('7' + 7 + 7).toBe('777');
    });

    it('should allow to change variable\'s type', function () {
        var test;

        expect(typeof test).toBe('undefined');

        test = 'test';
        expect(typeof test).toBe('string');

        test = {};
        expect(typeof test).toBe('object');

        test = [];
        expect(typeof test).toBe('object');

        test = true;
        expect(typeof test).toBe('boolean');

        test = 1.5;
        expect(typeof test).toBe('number');

        test = 1;
        expect(typeof test).toBe('number');
        expect(test).toBe(1);
    });
});
