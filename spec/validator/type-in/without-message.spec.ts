import {TypeInParameters} from '../../../dist/validator/type-in';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('string', ()=>{

    let validator = TypeInParameters<['string', 'number']>( ['string', 'number']);

    it('valid', ()=>{

        let validatable = validator('ab');

        expect(validatable.valid).toBe(true);
        expect(validatable.types).toBe(['string', 'number']);
        expect(validatable.value).toBe('ab');
        expect(validatable.message).toBe('is type of string.');
    });

    it('invalid', ()=>{

        let validatable = validator({});

        expect(validatable.message).toBe('must type of string, actual number.');
        expect(validatable.valid).toBe(false);
        expect(validatable.types).toBe(['string', 'number']);
        expect(validatable.value).toBe({});
    });
});

describe('object', ()=>{

    let validator = TypeInParameters<['string', 'number']>( ['string', 'number']);

    it('valid', ()=>{

        let validatable = validator({});

        expect(validatable.message).toBe('must type of number, actual string.');
        expect(validatable.valid).toBe(false);
        expect(validatable.types).toBe(['string', 'number']);
        expect(validatable.value).toBe('ab');
    });

    it('invalid', ()=>{

        let validatable = validator(1);

        expect(validatable.message).toBe('is type of number.');
        expect(validatable.valid).toBe(true);
        expect(validatable.types).toBe(['string', 'number']);
        expect(validatable.value).toBe(1);
    });
});

