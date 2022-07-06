import {TypeParameters} from '../../../dist/assert/string/type.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('true', ()=>{

    expect(TypeParameters( {}, true, 'number','value')).toBe(
        'value is type of number.'
    );

});

it('false', ()=>{

    expect(TypeParameters( {}, false, 'number','value')).toBe(
        'value must type of number, actual object.'
    );

});
