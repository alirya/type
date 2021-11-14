import TypeParameters from "./type-parameters";
export default function TypeParameter(
// value : unknown,
// valid : boolean,
// type : String,
// subject : string = '',
// conversion : (value:unknown)=>string = value=>typeof value,
{ value, valid, type, subject, conversion, }) {
    return TypeParameters(value, valid, type, subject, conversion);
}
//# sourceMappingURL=type-parameter.js.map