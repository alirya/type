import Type from "../../dist/boolean/type";
it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe("compiler compatible", function() {

    describe("boolean", function() {

        let value : unknown = true;

        if(Type.Parameters(value, "boolean")) {

            let result : boolean = value;

        } else {

            // @ts-expect-error
            let result : boolean = value;
        }
    });

    describe("object", function() {

        let value : unknown = {};

        if(Type.Parameters(value, "object")) {

            let result : object = value;

        } else {

            // @ts-expect-error
            let result : object = value;
        }
    });

    describe("string", function() {

        let value : unknown = 'str';

        if(Type.Parameters(value, "string")) {

            let result : string = value;

        } else {

            // @ts-expect-error
            let result : string = value;
        }
    });


    describe("number", function() {

        let value : unknown = 1;

        if(Type.Parameters(value, "number")) {

            let result : number = value;

        } else {

            // @ts-expect-error
            let result : number = value;
        }
    });

    describe("function", function() {

        let value : unknown = ()=>null;

        if(Type.Parameters(value, "function")) {

            let result : ()=>any = value;

        } else {

            // @ts-expect-error
            let result : ()=>any = value;
        }
    });

});

describe("boolean", function() {

    it(`true`, () => {
        expect(Type.Parameters(true, "boolean")).toBeTrue();
    });

    it(`false`, () => {
        expect(Type.Parameters(false, "boolean")).toBeTrue();
    });

});

describe("string", function() {

    it(`primitive`, () => {
        expect(Type.Parameters('str', "string")).toBeTrue();
    });

    it(`object`, () => {
        expect(Type.Parameters(new String('str'), "string")).toBeFalse();
    });

});


describe("number", function() {

    it(`primitive`, () => {
        expect(Type.Parameters(1, "number")).toBeTrue();
    });

    it(`nan`, () => {
        expect(Type.Parameters(NaN, "number")).toBeTrue();
    });

});

describe("object", function() {

    it(`plain`, () => {
        expect(Type.Parameters({}, "object")).toBeTrue();
    });

    it(`instance`, () => {
        expect(Type.Parameters(new Map(), "object")).toBeTrue();
    });

});

describe("function", function() {

    it(`anonymous `, () => {
        expect(Type.Parameters(function () {}, "function")).toBeTrue();
    });

    it(`anonymous arrow`, () => {
        expect(Type.Parameters(()=>{}, "function")).toBeTrue();
    });

    it(`named`, () => {
        expect(Type.Parameters(isNaN, "function")).toBeTrue();
    });

});

describe("empty", function() {

    it(`null `, () => {
        expect(Type.Parameters(null, "object")).toBeTrue();
    });

    it(`undefined`, () => {
        expect(Type.Parameters(undefined, "undefined")).toBeTrue();
    });

});
