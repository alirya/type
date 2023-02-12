import {TypeParameters} from '../../../dist/validator/type.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('string', ()=>{

    const validator = TypeParameters<'string'>( 'string');

    it('valid', ()=>{

        const validatable = validator('ab');

        expect(validatable.valid).toBe(true);
        expect(validatable.type).toBe('string');
        expect(validatable.value).toBe('ab');
        expect(validatable.message).toBe('is type of string.');
    });

    it('invalid', ()=>{

        const validatable = validator(2);

        expect(validatable.message).toBe('must type of string, actual number.');
        expect(validatable.valid).toBe(false);
        expect(validatable.type).toBe('string');
        expect(validatable.value).toBe(2);
    });
});

describe('object', ()=>{

    const validator = TypeParameters<'number'>( 'number');

    it('valid', ()=>{

        const validatable = validator('ab');

        expect(validatable.message).toBe('must type of number, actual string.');
        expect(validatable.valid).toBe(false);
        expect(validatable.type).toBe('number');
        expect(validatable.value).toBe('ab');
    });

    it('invalid', ()=>{

        const validatable = validator(1);

        expect(validatable.message).toBe('is type of number.');
        expect(validatable.valid).toBe(true);
        expect(validatable.type).toBe('number');
        expect(validatable.value).toBe(1);
    });
});

