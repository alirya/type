import TypeParameters, { TypeType } from "./type-parameters";
import TypeParameter, { TypeArgument } from "./type-parameter";
import StringNative from "../string";
declare namespace Type {
    const Parameters: typeof TypeParameters;
    const Parameter: typeof TypeParameter;
    type Type<TypeName extends StringNative, MessageType = unknown> = TypeType<TypeName, MessageType>;
    type Argument<TypeName extends StringNative, MessageType = unknown> = TypeArgument<TypeName, MessageType>;
}
export default Type;
