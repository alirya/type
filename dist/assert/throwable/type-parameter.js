import TypeParameters from "./type-parameters";
export default function TypeParameter(
// value : unknown,
// type : String,
// message : Dynamic.Parameter<unknown, string, DynamicValue<unknown> & Type<String>> = TypeString,
// error : (message:string)=>Error = (v)=>new Error(v),
{ value, type, message, error, }) {
    return TypeParameters(value, type, (value, valid, type) => message({ type, value, valid }), error);
}
//# sourceMappingURL=type-parameter.js.map