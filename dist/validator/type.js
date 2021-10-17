import TypeofValidatable from "../validatable/type";
export default function Type(type, message) {
    return function (value) {
        return new TypeofValidatable(value, type, message);
    };
}
//# sourceMappingURL=type.js.map