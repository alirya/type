import TypeEqual from "../../../dist/boolean/type-equal";

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatible', function() {

    it('boolean', function() {

        expect(TypeEqual.Parameters(true, false)).toBeTrue();

    });
});