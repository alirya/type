export function TypeEqualParameters(
    value : any,
    compare : any
) : boolean {

    return typeof value === typeof compare;
}

export function TypeEqualParameter(
    {
        value,
        compare,
    } : Record<'value'|'compare', any>
) : boolean {

    return TypeEqualParameters(value, compare);
}


namespace TypeEqual {
    export const Parameters = TypeEqualParameters;
    export const Parameter = TypeEqualParameter;
}
export default TypeEqual;
