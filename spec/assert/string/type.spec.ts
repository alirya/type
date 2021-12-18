import Type from "../../../dist/assert/string/type-parameters";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('true', ()=>{

    expect(Type( {}, true, 'number','value')).toBe(
        'value is type of number.'
    );

});

it('false', ()=>{

    expect(Type( {}, false, 'number','value')).toBe(
        'value must type of number, actual object.'
    );

});
