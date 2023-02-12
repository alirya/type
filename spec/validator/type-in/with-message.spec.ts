import {TypeInParameters} from '../../../dist/validator/type-in.js';
import TypeofString from '../../../dist/assert/string/type-in.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('string', ()=>{

    const validator = TypeInParameters<['string', 'number']>( ['string', 'number'], TypeofString.Parameters);

    it('valid', ()=>{

        const validatable = validator('ab');

        expect(validatable.message).toBe('is in type of string, number.');
        expect(validatable.valid).toBe(true);
        expect(validatable.types).toEqual(['string', 'number']);
        expect(validatable.value).toBe('ab');
    });

    it('invalid', ()=>{

        const validatable = validator({});

        expect(validatable.message).toBe('must in type of string, number, actual type object.');
        expect(validatable.valid).toBe(false);
        expect(validatable.types).toEqual(['string', 'number']);
        expect(validatable.value).toEqual({});
    });
});

describe('object', ()=>{

    const validator = TypeInParameters<['string', 'number']>(['string', 'number'], TypeofString.Parameters);

    it('valid', ()=>{

        const validatable = validator({});

        expect(validatable.message).toBe('must in type of string, number, actual type object.');
        expect(validatable.valid).toBe(false);
        expect(validatable.types).toEqual(['string', 'number']);
        expect(validatable.value).toEqual({});
    });

    it('invalid', ()=>{

        const validatable = validator(1);

        expect(validatable.message).toBe('is in type of string, number.');
        expect(validatable.valid).toBe(true);
        expect(validatable.types).toEqual(['string', 'number']);
        expect(validatable.value).toBe(1);
    });
});

