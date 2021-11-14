import TypeParameters, {TypeType} from "./type-parameters";
import TypeParameter from "./type-parameter";
import String from "../string";

namespace Type {

    export const Parameters = TypeParameters;
    export const Parameter = TypeParameter;
    export type Type<
        ValueT = unknown,
        TypeT extends String = String,
        MessageT = unknown
    > = TypeType<ValueT, TypeT, MessageT>;

}

export default Type;
