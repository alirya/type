import {TypeInParameters} from '../../../dist/validator/type-in';
import TypeofString from '../../../dist/assert/string/type-in';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`with message`,function() {

    it('explicit', ()=>{

        let validator = TypeInParameters<['string', 'number']>( ['string', 'number'], TypeofString.Parameters);
        let validatable = validator({});

        if(validatable.valid) {

            // let type : "string" = validator.type;
            let string : string|number = validatable.value;

        } else {

            // @ts-expect-error
            let string : string|number = validatable.value;
            // let type : "string" = validator.type;
        }


    });

    it('implicit', ()=>{

        let validator = TypeInParameters( ['string', 'number'], TypeofString.Parameters);
        let validatable = validator({});

        if(validatable.valid) {

            // let type : "string" = validator.type;
            let stringNumber : string|number = validatable.value;

            // @ts-expect-error
            let number : number = validatable.value;
            // @ts-expect-error
            let string : string = validatable.value;
            // @ts-expect-error
            let object : object = validatable.value;

        } else {

            // @ts-expect-error
            let string : string = validatable.value;
            let object : object = validatable.value;
            // let type : "string" = validator.type;
        }
    });
});

describe(`without message`,function() {

    it('explicit', ()=>{

        let validator = TypeInParameters<['string', 'number']>( ['string', 'number']);
        let validatable = validator({});

        if(validatable.valid) {

            // let type : "string" = validator.type;
            let stringNumber : string|number = validatable.value;

            // @ts-expect-error
            let object : object = validatable.value;
            // @ts-expect-error
            let number : number = validatable.value;
            // @ts-expect-error
            let string : string = validatable.value;

        } else {

            // @ts-expect-error
            let stringNumber : string|number = validatable.value;

            // let type : "string" = validator.type;

            let object : object = validatable.value;
            // @ts-expect-error
            let number : number = validatable.value;
            // @ts-expect-error
            let string : string = validatable.value;
        }


    });

    it('implicit', ()=>{

        let validator = TypeInParameters(['string', 'number']);
        let validatable = validator({});

        if(validatable.valid) {

            // let type : "string" = validator.type;
            let stringNumber : string|number = validatable.value;

            // @ts-expect-error
            let object : object = validatable.value;
            // @ts-expect-error
            let number : number = validatable.value;
            // @ts-expect-error
            let string : string = validatable.value;

        } else {

            // @ts-expect-error
            let stringNumber : string|number = validatable.value;

            // let type : "string" = validator.type;

            let object : object = validatable.value;
            // @ts-expect-error
            let number : number = validatable.value;
            // @ts-expect-error
            let string : string = validatable.value;
        }
    });
});
