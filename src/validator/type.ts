import TypeParameters, {TypeType} from "./type-parameters";
import TypeParameter, {TypeArgument} from "./type-parameter";
import String from "../string";
import StringNative from "../string";

namespace Type {

    export const Parameters = TypeParameters;
    export const Parameter = TypeParameter;
    export type Type<
        TypeName extends StringNative,
        MessageType = unknown
        > = TypeType<TypeName, MessageType>;

    export type Argument<
        TypeName extends StringNative,
        MessageType = unknown
        > = TypeArgument<TypeName, MessageType>;

}

export default Type;
