import String from "../string";
import MessageStatic from "@dikac/t-validator/message/function/static";
import Simple from "@dikac/t-validator/validatable/simple";
import Type from "../type";
import ValidatableType from "@dikac/t-validator/validatable/validatable";
import StringNative from "../string";
export declare type TypeType<ValueT = unknown, TypeT extends String = String, MessageT = unknown> = Simple<ValueT, Type<TypeT>, ValidatableType<unknown, MessageT>> & {
    type: TypeT;
};
export default function TypeParameters<ValueT = unknown, TypeT extends String = String, MessageT = unknown>(value: ValueT, type: TypeT, message: MessageStatic.Parameters<ValueT, Type<TypeT>, false, true, MessageT, [StringNative]>): TypeType<ValueT, TypeT, MessageT>;
export default function TypeParameters<ValueT = unknown, TypeT extends String = String>(value: ValueT, type: TypeT): TypeType<ValueT, TypeT, string>;
