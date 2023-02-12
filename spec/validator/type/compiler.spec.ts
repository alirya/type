import {TypeParameters} from '../../../dist/validator/type.js';
import TypeofString from '../../../dist/assert/string/type.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`with message`,function() {

    it('explicit', ()=>{

        const validator = TypeParameters<'string'>( 'string', TypeofString.Parameters);
        const validatable = validator(1);

        if(validatable.valid) {

            // let type : "string" = validator.type;
            const string : string = validatable.value;

        } else {

            // @ts-expect-error
            const string : string = validatable.value;
            // let type : "string" = validator.type;
        }


    });

    it('implicit', ()=>{

        const validator = TypeParameters( 'string', TypeofString.Parameters);
        const validatable = validator(1);

        if(validatable.valid) {

            // let type : "string" = validator.type;
            const string : string = validatable.value;
            // @ts-expect-error
            const number : number = validatable.value;

        } else {

            // @ts-expect-error
            const string : string = validatable.value;
            const number : number = validatable.value;
            // let type : "string" = validator.type;
        }
    });
});

describe(`without message`,function() {

    it('explicit', ()=>{

        const validator = TypeParameters<'string'>( 'string');
        const validatable = validator(1);

        if(validatable.valid) {

            // let type : "string" = validator.type;
            const string : string = validatable.value;

        } else {

            // @ts-expect-error
            const string : string = validatable.value;
            // let type : "string" = validator.type;
        }


    });

    it('implicit', ()=>{

        const validator = TypeParameters( 'string');
        const validatable = validator(1);

        if(validatable.valid) {

            // let type : "string" = validator.type;
            const string : string = validatable.value;

        } else {

            // @ts-expect-error
            const string : string = validatable.value;
            // let type : "string" = validator.type;
        }
    });
});
