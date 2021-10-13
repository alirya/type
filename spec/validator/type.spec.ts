import Typeof from "../../dist/validator/type";
import TypeofString from "../../dist/validatable/string/type";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    describe('explicit', ()=>{

        let validator = Typeof<"string">( 'string', TypeofString);
        let validatable = validator(1);

        if(validatable.valid) {

            // let type : "string" = validator.type;
            let string : string = validatable.value;

        } else {

            // @ts-expect-error
            let string : string = validatable.value;
            // let type : "string" = validator.type;
        }


    });

    describe('implicit', ()=>{

        let validator = Typeof( 'string', TypeofString);
        let validatable = validator(1);

        if(validatable.valid) {

            // let type : "string" = validator.type;
            let string : string = validatable.value;

        } else {

            // @ts-expect-error
            let string : string = validatable.value;
            // let type : "string" = validator.type;
        }


    });
});

describe(`validate`,function() {

    describe('string', ()=>{

        let validator = Typeof<"string">( 'string', TypeofString);

        it('valid', ()=>{

            let validatable = validator('ab');

            // expect(validator.type).toBe('string');
            expect(validatable.valid).toBe(true);
            expect(validatable.type).toBe('string');
            expect(validatable.value).toBe('ab');
        });

        it('valid', ()=>{

            let validatable = validator(2);

            // expect(validator.type).toBe('string');
            expect(validatable.valid).toBe(false);
            expect(validatable.type).toBe('string');
            expect(validatable.value).toBe(2);
        });
    });

    describe('object', ()=>{

        let validator = Typeof<"number">( 'number', TypeofString);

        it('valid', ()=>{

            let validatable = validator('ab');

            // expect(validator.type).toBe('number');
            expect(validatable.valid).toBe(false);
            expect(validatable.type).toBe('number');
            expect(validatable.value).toBe('ab');
        });

        it('valid', ()=>{

            let validatable = validator(1);

            // expect(validator.type).toBe('number');
            expect(validatable.valid).toBe(true);
            expect(validatable.type).toBe('number');
            expect(validatable.value).toBe(1);
        });
    });

});
