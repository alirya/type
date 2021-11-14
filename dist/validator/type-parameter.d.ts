import StringNative from "../string";
import Type from "../type";
import TypeContainer from "../type/type";
import Simple from "@dikac/t-validator/message/function/simple";
import Message from "@dikac/t-message/message";
import { TypeType } from "./type-parameters";
export declare type TypeArgument<TypeName extends StringNative, MessageType = unknown> = TypeContainer<TypeName> & Message<Simple.Parameters<unknown, Type<TypeName>, MessageType, [TypeName]>>;
export default function TypeParameter<TypeName extends StringNative, MessageType = unknown>(type: TypeName, message: Simple.Parameters<unknown, Type<TypeName>, MessageType, [StringNative]>): TypeType<TypeName, MessageType>;
export default function TypeParameter<TypeName extends StringNative>(type: TypeName): TypeType<TypeName, string>;
