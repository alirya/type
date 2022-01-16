import Typeof from "../../../dist/validator/type-parameters";
import TypeofString from "../../../dist/assert/string/type-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`with message`,function() {

    describe('explicit', ()=>{

        let validator = Typeof<"string">( 'string', TypeofString);
        let validatable = validator(1);

        if(validatable.valid) {

            // let type : "string" = validator.type;
            let string : string = validatable.value;

        } else {

            // @ts-expecerror
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
            // @ts-expecerror
            let number : number = validatable.value;

        } else {

            // @ts-expecerror
            let string : string = validatable.value;
            let number : number = validatable.value;
            // let type : "string" = validator.type;
        }
    });
});

describe(`without message`,function() {

    describe('explicit', ()=>{

        let validator = Typeof<"string">( 'string');
        let validatable = validator(1);

        if(validatable.valid) {

            // let type : "string" = validator.type;
            let string : string = validatable.value;

        } else {

            // @ts-expecerror
            let string : string = validatable.value;
            // let type : "string" = validator.type;
        }


    });

    describe('implicit', ()=>{

        let validator = Typeof( 'string');
        let validatable = validator(1);

        if(validatable.valid) {

            // let type : "string" = validator.type;
            let string : string = validatable.value;

        } else {

            // @ts-expecerror
            let string : string = validatable.value;
            // let type : "string" = validator.type;
        }
    });
});
