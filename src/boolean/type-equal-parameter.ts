import TypeEqualParameters from "./type-equal-parameters";

export default function TypeEqualParameter(
    {
        value,
        compare,
    } : Record<'value'|'compare', any>
) : boolean {

    return TypeEqualParameters(value, compare);
}
