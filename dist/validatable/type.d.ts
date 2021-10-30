import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import MergeWrapper from "@dikac/t-validator/validatable/readonly-wrapper";
import TypeInterface from "../type/type";
import String from "../string";
export default class Type<ValueT = unknown, TypeT extends String = String, MessageT = unknown> extends MergeWrapper.Parameter<Value<ValueT>, Message<MessageT>, Validatable> {
    readonly type: TypeT;
    constructor(value: ValueT, type: TypeT, message: (result: Readonly<Value<ValueT> & TypeInterface<TypeT> & Validatable>) => MessageT);
}
