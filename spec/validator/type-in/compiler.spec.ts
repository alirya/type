import {TypeInParameters} from '../../../dist/validator/type-in.js';
import TypeofString from '../../../dist/assert/string/type-in.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`with message`,function() {

    it('explicit', ()=>{

        const validator = TypeInParameters<['string', 'number']>( ['string', 'number'], TypeofString.Parameters);
        const validatable = validator({});

        if(validatable.valid) {

            // let type : "string" = validator.type;
            const string : string|number = validatable.value;

        } else {

            // @ts-expect-error
            const string : string|number = validatable.value;
            // let type : "string" = validator.type;
        }


    });

    it('implicit', ()=>{

        const validator = TypeInParameters( ['string', 'number'], TypeofString.Parameters);
        const validatable = validator({});

        if(validatable.valid) {

            // let type : "string" = validator.type;
            const stringNumber : string|number = validatable.value;

            // @ts-expect-error
            const number : number = validatable.value;
            // @ts-expect-error
            const string : string = validatable.value;
            // @ts-expect-error
            const object : object = validatable.value;

        } else {

            // @ts-expect-error
            const string : string = validatable.value;
            const object : object = validatable.value;
            // let type : "string" = validator.type;
        }
    });
});

describe(`without message`,function() {

    it('explicit', ()=>{

        const validator = TypeInParameters<['string', 'number']>( ['string', 'number']);
        const validatable = validator({});

        if(validatable.valid) {

            // let type : "string" = validator.type;
            const stringNumber : string|number = validatable.value;

            // @ts-expect-error
            const object : object = validatable.value;
            // @ts-expect-error
            const number : number = validatable.value;
            // @ts-expect-error
            const string : string = validatable.value;

        } else {

            // @ts-expect-error
            const stringNumber : string|number = validatable.value;

            // let type : "string" = validator.type;

            const object : object = validatable.value;
            // @ts-expect-error
            const number : number = validatable.value;
            // @ts-expect-error
            const string : string = validatable.value;
        }


    });

    it('implicit', ()=>{

        const validator = TypeInParameters(['string', 'number']);
        const validatable = validator({});

        if(validatable.valid) {

            // let type : "string" = validator.type;
            const stringNumber : string|number = validatable.value;

            // @ts-expect-error
            const object : object = validatable.value;
            // @ts-expect-error
            const number : number = validatable.value;
            // @ts-expect-error
            const string : string = validatable.value;

        } else {

            // @ts-expect-error
            const stringNumber : string|number = validatable.value;

            // let type : "string" = validator.type;

            const object : object = validatable.value;
            // @ts-expect-error
            const number : number = validatable.value;
            // @ts-expect-error
            const string : string = validatable.value;
        }
    });
});
