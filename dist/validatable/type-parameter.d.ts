import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import String from "../string";
import MessageDynamic from "@dikac/t-validator/message/function/validatable";
import Simple from "@dikac/t-validator/validatable/simple";
import Type from "../type";
import TypeContainer from "../type/type";
import ValidatableType from "@dikac/t-validator/validatable/validatable";
import StrictOmit from "@dikac/t-object/strict-omit";
export declare type TypeType<ValueT = unknown, TypeT extends String = String, MessageT = unknown> = Simple<ValueT, Type<TypeT>, ValidatableType<unknown, MessageT>> & {
    type: TypeT;
};
export declare type TypeArgument<ValueT = unknown, TypeT extends String = String, MessageT = unknown> = Value<ValueT> & TypeContainer<TypeT> & Partial<Message<MessageDynamic.Parameter<ValueT, MessageT>>>;
export default function TypeParameter<ValueT = unknown, TypeT extends String = String, MessageT = unknown>({ value, type, message, }: Required<TypeArgument<ValueT, TypeT, MessageT>>): TypeType<ValueT, TypeT, MessageT>;
export default function TypeParameter<ValueT = unknown, TypeT extends String = String>({ value, type, }: StrictOmit<TypeArgument<ValueT, TypeT>, 'message'>): TypeType<ValueT, TypeT, string>;
