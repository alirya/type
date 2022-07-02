export default function TypeEqualParameters(
    value : any,
    compare : any
) : boolean {

    return typeof value === typeof compare;
}
