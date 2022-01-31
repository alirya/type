import Type from '../../dist/boolean/type-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatible', function() {

    it('boolean', function() {

        let value : unknown = true;

        if(Type(value, 'boolean')) {

            let result : boolean = value;

        } else {

            // @ts-expect-error
            let result : boolean = value;
        }
    });

    it('object', function() {

        let value : unknown = {};

        if(Type(value, 'object')) {

            let result : object = value;

        } else {

            // @ts-expect-error
            let result : object = value;
        }
    });

    it('string', function() {

        let value : unknown = 'str';

        if(Type(value, 'string')) {

            let result : string = value;

        } else {

            // @ts-expect-error
            let result : string = value;
        }
    });


    it('number', function() {

        let value : unknown = 1;

        if(Type(value, 'number')) {

            let result : number = value;

        } else {

            // @ts-expect-error
            let result : number = value;
        }
    });

    it('function', function() {

        let value : unknown = ()=>null;

        if(Type(value, 'function')) {

            let result : ()=>any = value;

        } else {

            // @ts-expect-error
            let result : ()=>any = value;
        }
    });

});

describe('boolean', function() {

    it(`true`, () => {
        expect(Type(true, 'boolean')).toBeTrue();
    });

    it(`false`, () => {
        expect(Type(false, 'boolean')).toBeTrue();
    });

});

describe('string', function() {

    it(`primitive`, () => {
        expect(Type('str', 'string')).toBeTrue();
    });

    it(`object`, () => {
        expect(Type(new String('str'), 'string')).toBeFalse();
    });

});


describe('number', function() {

    it(`primitive`, () => {
        expect(Type(1, 'number')).toBeTrue();
    });

    it(`nan`, () => {
        expect(Type(NaN, 'number')).toBeTrue();
    });

});

describe('object', function() {

    it(`plain`, () => {
        expect(Type({}, 'object')).toBeTrue();
    });

    it(`instance`, () => {
        expect(Type(new Map(), 'object')).toBeTrue();
    });

});

describe('function', function() {

    it(`anonymous `, () => {
        expect(Type(function () {}, 'function')).toBeTrue();
    });

    it(`anonymous arrow`, () => {
        expect(Type(()=>{}, 'function')).toBeTrue();
    });

    it(`named`, () => {
        expect(Type(isNaN, 'function')).toBeTrue();
    });

});

describe('empty', function() {

    it(`null `, () => {
        expect(Type(null, 'object')).toBeTrue();
    });

    it(`undefined`, () => {
        expect(Type(undefined, 'undefined')).toBeTrue();
    });

});
