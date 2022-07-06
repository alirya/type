import {TypeParameters} from '../../../dist/validator/type.js';
import TypeofString from '../../../dist/assert/string/type.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('string', ()=>{

    let validator = TypeParameters<'string'>( 'string', TypeofString.Parameters);

    it('valid', ()=>{

        let validatable = validator('ab');

        expect(validatable.message).toBe('is type of string.');
        expect(validatable.valid).toBe(true);
        expect(validatable.type).toBe('string');
        expect(validatable.value).toBe('ab');
    });

    it('invalid', ()=>{

        let validatable = validator(2);

        expect(validatable.message).toBe('must type of string, actual number.');
        expect(validatable.valid).toBe(false);
        expect(validatable.type).toBe('string');
        expect(validatable.value).toBe(2);
    });
});

describe('object', ()=>{

    let validator = TypeParameters<'number'>( 'number', TypeofString.Parameters);

    it('valid', ()=>{

        let validatable = validator('ab');

        expect(validatable.message).toBe('must type of number, actual string.');
        expect(validatable.valid).toBe(false);
        expect(validatable.type).toBe('number');
        expect(validatable.value).toBe('ab');
    });

    it('invalid', ()=>{

        let validatable = validator(1);

        expect(validatable.message).toBe('is type of number.');
        expect(validatable.valid).toBe(true);
        expect(validatable.type).toBe('number');
        expect(validatable.value).toBe(1);
    });
});

