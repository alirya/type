import {CallbackClassParameters} from '@alirya/validator/validatable/callback.js';
import String from '../string.js';
import BooleanTypeParameters from '../boolean/type.js';
import {StaticParameters} from '@alirya/validator/message/function/static.js';
import Simple from '@alirya/validator/validatable/simple.js';
import Type from '../type.js';
import ValidatableType from '@alirya/validator/validatable/validatable.js';
import TypeofString from '../assert/string/type.js';
import StringNative from '../string.js';
import Value from '@alirya/value/value.js';
import Message from '@alirya/message/message.js';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable.js';
import TypeContainer from '../type/type.js';
import StrictOmit from '@alirya/object/strict-omit.js';
import TypeString from '../string';


export type TypeReturn<
    ValueT = unknown,
    TypeT extends TypeString = TypeString,
    MessageT = unknown
> = Simple<ValueT, Type<TypeT>, MessageT, {type : TypeT}>;

export function TypeParameters<ValueT = unknown, TypeT extends TypeString = TypeString, MessageT = unknown>(
    value : ValueT,
    type : TypeT,
    message : StaticParameters<ValueT, Type<TypeT>, false, true, MessageT, [StringNative]>
) : TypeReturn<ValueT, TypeT, MessageT>;

export function TypeParameters<ValueT = unknown, TypeT extends TypeString = TypeString>(
    value : ValueT,
    type : TypeT,
) : TypeReturn<ValueT, TypeT, string>;

export function TypeParameters<ValueT = unknown, TypeT extends TypeString = TypeString, MessageT = unknown>(
    value : ValueT,
    type : TypeT,
    message : StaticParameters<ValueT, Type<TypeT>, false, true, MessageT|string, [StringNative]> = TypeofString.Parameters
) : TypeReturn<ValueT, TypeT, MessageT> {

    return Object.assign(
        new CallbackClassParameters<unknown>(value, BooleanTypeParameters.Parameters, message, [type]),
        {type}
    ) as TypeReturn<ValueT, TypeT, MessageT>;

}


export type TypeArgument<
    ValueT = unknown,
    TypeT extends string = string,
    MessageT = unknown
> =
    Value<ValueT> & TypeContainer<TypeT> &
    Partial<Message<ValidatableParameter<ValueT, MessageT>>>;

export function TypeParameter<ValueT = unknown, TypeT extends TypeString = TypeString, MessageT = unknown>(
    {
        value,
        type,
        message,
    } : Required<TypeArgument<ValueT, TypeT, MessageT>>
) : TypeReturn<ValueT, TypeT, MessageT>;

export function TypeParameter<ValueT = unknown, TypeT extends TypeString = TypeString>(
    {
        value,
        type,
    } : StrictOmit<TypeArgument<ValueT, TypeT>, 'message'>
) : TypeReturn<ValueT, TypeT, string>;

export function TypeParameter<ValueT = unknown, TypeT extends TypeString = TypeString, MessageT = unknown>(
    {
        value,
        type,
        message,
    } : TypeArgument<ValueT, TypeT, MessageT|string>
) : TypeReturn<ValueT, TypeT, MessageT|string> {

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


namespace Type {
    export const Parameters = TypeParameters;
    export const Parameter = TypeParameter;
    export type Return<ValueT = unknown, TypeT extends TypeString = TypeString, MessageT = unknown>
        = TypeReturn<ValueT, TypeT, MessageT>;
    export type Argument<ValueT = unknown, TypeT extends TypeString = TypeString, MessageT = unknown>
        = TypeArgument<ValueT, TypeT, MessageT>;
}
export default Type;
