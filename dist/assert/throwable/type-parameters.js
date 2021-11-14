import TypeString from "../string/type";
export default function TypeParameters(value, type, message = TypeString.Parameters, error = (v) => new Error(v)) {
    return error(message(value, false, type));
}
//# sourceMappingURL=type-parameters.js.map