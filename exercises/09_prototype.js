describe('prototype', function () {
    it('new statement should return new object', function () {
        var toyota;

        function Car(brand) {
            this.getBrand = function () {
                return brand;
            };
        }

        toyota = new Car('toyota');

        expect(toyota.getBrand()).toBe('toyota');
        expect(toyota.hasOwnProperty('getBrand')).toBe(true);
    });

    it('without new statement should not return any object', function () {
        var toyota;

        function car(brand) {
            this.getBrand = function () {
                return brand;
            }
        }

        toyota = car('toyota');

        expect(toyota).toBe(undefined);
        expect(window.getBrand()).toBe('toyota');
    });

    it('Bad practices', function () {
        var Car = function (brand) {
            this.brand = brand;
            this.getBrand = function () {
                return this.brand;
            }
        };

        var toyota = new Car('toyota');
        var ferrari = new Car('ferrari');

        expect(toyota.getBrand === ferrari.getBrand).toBe(false);
    });

    it('use prototypes', function () {
        var Car = function (brand) {
            this.brand = brand;
        };

        Car.prototype.getBrand = function () {
            return this.brand;
        };

        var toyota = new Car('toyota');
        var ferrari = new Car('ferrari');

        expect(toyota.getBrand === ferrari.getBrand).toBe(true);
    });
});
