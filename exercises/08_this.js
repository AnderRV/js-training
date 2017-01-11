describe('this', function () {
    it('global context', function () {
        function func() {
            return this;
        }

        expect(func()).toEqual(window);
    });

    it('global context', function () {
        function func() {
            'use strict';

            return this;
        }

        expect(func()).toEqual(undefined);
    });

    it('object context', function () {
        var o = {
            prop1: 'prop1',
            prop2: function () {
                return this.prop1;
            }
        };

        expect(o.prop2()).toBe('prop1');
    });

    it('common error', function () {
        var o = {
            prop1: 'prop1',
            prop2: function () {
                return this.prop1;
            }
        };
        var b = o.prop2;

        //expect(b()).toBe(window);
    });

    it('bind', function () {
        var o = {
            prop1: 'prop1',
            prop2: function () {
                return this;
            }
        };

        var b = o.prop2.bind(o);

        expect(b()).toBe(o);
    });

    it('exercise', function () {
        var func = function () {
            return this.prop1;
        };

        var o = {
            prop1: 'prop1'
        };

        o.prop2 = func;

        expect(o.prop2()).toBe('prop1');
    });

    it('this is lost', function () {
        var arr = [1, 2];
        var mapFunc = function (value, index, array) {
            expect(this).toBe(window);
        };

        arr.map(mapFunc);
    });

    it('solution', function () {
        var arr = [1, 2];

        var mapFunc = function (value, index, array) {
            //expect(this).toBe(array);
            expect(this).toBe(arr);
        };

        arr.map(mapFunc.bind(arr));
    });
});
