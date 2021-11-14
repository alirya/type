import TypeofValidatable from "../validatable/type";
import TypeofString from "../assert/string/type";
export default function TypeParameters(type, message = TypeofString.Parameters) {
    return function (value) {
        return TypeofValidatable.Parameters(value, type, message);
    };
}
//# sourceMappingURL=type-parameters.js.map