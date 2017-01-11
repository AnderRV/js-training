describe('classes', function () {
    it('public classes', function () {
        var Car = function (brand) {
            this.brand = brand;
            this.getBrand = function () {
                return this.brand;
            }
        };

        var toyota = new Car('toyota');

        expect(toyota.hasOwnProperty('brand'));
        expect(toyota.hasOwnProperty('getBrand'));
        expect(typeof toyota.getBrand === 'function');
        expect(toyota.getBrand()).toBe('toyota');
    });

    it('private', function () {
        var priv = (function () {
            var a = 'a';
            var getA = function () {
                return a;
            };

            return {
                getA: getA
            };
        })();

        expect(priv.a).toBe(undefined);
        expect(priv.getA()).toBe('a');
    });
});
