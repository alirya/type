import TypeParameters, { TypeType } from "./type-parameters";
import TypeParameter from "./type-parameter";
import String from "../string";
declare namespace Type {
    const Parameters: typeof TypeParameters;
    const Parameter: typeof TypeParameter;
    type Type<ValueT = unknown, TypeT extends String = String, MessageT = unknown> = TypeType<ValueT, TypeT, MessageT>;
}
export default Type;
