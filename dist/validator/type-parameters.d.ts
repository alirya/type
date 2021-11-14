import Validator from "@dikac/t-validator/simple";
import TypeofValidatable from "../validatable/type";
import StringNative from "../string";
import Type from "../type";
import Simple from "@dikac/t-validator/message/function/simple";
export declare type TypeType<TypeName extends StringNative, MessageType = unknown> = Validator<unknown, Type<TypeName>, TypeofValidatable.Type<unknown, TypeName, MessageType>>;
export default function TypeParameters<TypeName extends StringNative, MessageType = unknown>(type: TypeName, message: Simple.Parameters<unknown, Type<TypeName>, MessageType, [StringNative]>): TypeType<TypeName, MessageType>;
export default function TypeParameters<TypeName extends StringNative>(type: TypeName): TypeType<TypeName, string>;
