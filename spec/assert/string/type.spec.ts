import Type from "../../../dist/assert/string/type";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('true', ()=>{

    expect(Type.Parameters( {}, true, 'number','value')).toBe(
        'value is type of number.'
    );

});

it('false', ()=>{

    expect(Type.Parameters( {}, false, 'number','value')).toBe(
        'value must type of number, actual object.'
    );

});
