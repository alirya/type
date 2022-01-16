import Value from '@alirya/value/value';
import Message from '@alirya/message/message';
import String from '../string';
import MessageDynamic from '@alirya/validator/message/function/validatable-parameter';
import Simple from '@alirya/validator/validatable/simple';
import Type from '../type';
import TypeContainer from '../type/type';
import ValidatableType from '@alirya/validator/validatable/validatable';
import StrictOmit from '@alirya/object/strict-omit';
import TypeParameters from './type-parameters';

export type TypeType<
    ValueT = unknown,
    TypeT extends String = String,
    MessageT = unknown
> = Simple<ValueT, Type<TypeT>, ValidatableType<unknown, MessageT>> & {type : TypeT};

export type TypeArgument<
    ValueT = unknown,
    TypeT extends String = String,
    MessageT = unknown
> =
    Value<ValueT> & TypeContainer<TypeT> &
    Partial<Message<MessageDynamic<ValueT, MessageT>>>;

export default function TypeParameter<ValueT = unknown, TypeT extends String = String, MessageT = unknown>(
    {
        value,
        type,
        message,
    } : Required<TypeArgument<ValueT, TypeT, MessageT>>
) : TypeType<ValueT, TypeT, MessageT>;

export default function TypeParameter<ValueT = unknown, TypeT extends String = String>(
    {
        value,
        type,
    } : StrictOmit<TypeArgument<ValueT, TypeT>, 'message'>
) : TypeType<ValueT, TypeT, string>;

export default function TypeParameter<ValueT = unknown, TypeT extends String = String, MessageT = unknown>(
    {
        value,
        type,
        message,
    } : TypeArgument<ValueT, TypeT, MessageT|string>
) : TypeType<ValueT, TypeT, MessageT|string> {

    if(message) {

        return TypeParameters(
            value,
            type,
            (value, valid) => message({value, valid})
        );

    } else {

        return TypeParameters(value, type, );
    }
}
