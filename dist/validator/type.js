import TypeofValidatable from "../validatable/type";
import StringType from "../validatable/string/type";
export default function Type(type, message = StringType) {
    return function (value) {
        return new TypeofValidatable(value, type, message);
    };
}
//# sourceMappingURL=type.js.map