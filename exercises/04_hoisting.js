describe('what is hoisting javascript', function() {
    it('should hoist variables', function () {
        expect(test).toBe(undefined);

        var test = 2;

        expect(test).toBe(2);
    });

    it('should hoist functions', function () {
        expect(typeof test).toBe('function');
        expect(test()).toBe(1);

        function test () {
            return 1;
        }
    });

    it('should hoist variable functions', function () {
        expect(test).toBe(undefined);

        var test = function () {
            return 1;
        }

        expect(typeof test).toBe('function');
        expect(test()).toBe(1);
    });
});
