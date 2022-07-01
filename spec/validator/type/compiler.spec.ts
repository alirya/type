import {TypeParameters} from '../../../dist/validator/type';
import TypeofString from '../../../dist/assert/string/type';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe(`with message`,function() {

    it('explicit', ()=>{

        let validator = TypeParameters<'string'>( 'string', TypeofString.Parameters);
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

    it('implicit', ()=>{

        let validator = TypeParameters( 'string', TypeofString.Parameters);
        let validatable = validator(1);

        if(validatable.valid) {

            // let type : "string" = validator.type;
            let string : string = validatable.value;
            // @ts-expect-error
            let number : number = validatable.value;

        } else {

            // @ts-expect-error
            let string : string = validatable.value;
            let number : number = validatable.value;
            // let type : "string" = validator.type;
        }
    });
});

describe(`without message`,function() {

    it('explicit', ()=>{

        let validator = TypeParameters<'string'>( 'string');
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

    it('implicit', ()=>{

        let validator = TypeParameters( 'string');
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
