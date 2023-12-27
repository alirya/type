import Validator from '@axiona/validator/simple.js';
import TypeofValidatable from '../validatable/type.js';
import StringNative from '../string.js';
import Type from '../type.js';
import {SimpleParameters, SimpleParameter} from '@axiona/validator/message/function/simple.js';
import TypeofString from '../assert/string/type.js';
import TypeContainer from '../type/type.js';
import Message from '@axiona/message/message.js';
import SimpleReturn from '@axiona/validator/value/simple.js';
import Dynamic from '@axiona/validator/value/validatable.js';

export type TypeParametersReturn<
    TypeName extends StringNative,
    MessageType = unknown
    > = Validator<unknown, Type<TypeName>, MessageType, {type : TypeName}>;

export function TypeParameters<
    TypeName extends StringNative,
    MessageType = unknown
>(
    type : TypeName,
    message : SimpleParameters<unknown, Type<TypeName>, MessageType, [StringNative]>
) : TypeParametersReturn<TypeName, MessageType>;

export function TypeParameters<
    TypeName extends StringNative
>(
    type : TypeName,
) : TypeParametersReturn<TypeName, string>;
export function TypeParameters<
    TypeName extends StringNative,
    MessageType = unknown
>(
    type : TypeName,
    message : SimpleParameters<unknown, Type<TypeName>, MessageType|string, [StringNative]> = TypeofString.Parameters,
) : TypeParametersReturn<TypeName, MessageType> {

    return function (value ) {

        return  TypeofValidatable.Parameters(value, type, message);

    } as Validator<unknown, Type<TypeName>, MessageType, { type: TypeName }>;
}


export type TypeArgument<
    TypeName extends StringNative,
    MessageType = unknown
> = TypeContainer<TypeName> &
    Message<SimpleParameter<unknown, TypeName, MessageType, TypeContainer<StringNative> &
    SimpleReturn<unknown, TypeName, Readonly<Dynamic<unknown>>>>>;

export function TypeParameter<
    TypeName extends StringNative,
    MessageType = unknown
>(
    {
        type,
        message,
    } : Required<TypeArgument<TypeName, MessageType>>
) : TypeParametersReturn<TypeName, MessageType>;

export function TypeParameter<
    TypeName extends StringNative
>(
    {
        type
    } : Omit<TypeArgument<TypeName, string>, 'message'>
) : TypeParametersReturn<TypeName, string>;
export function TypeParameter<
    TypeName extends StringNative,
    MessageType = unknown
>(
    {
        type,
        message = TypeofString.Parameter
    } : Required<TypeArgument<TypeName, MessageType|string>>
) : TypeParametersReturn<TypeName, MessageType> {

    return function (value ) {

        return  TypeofValidatable.Parameters(value, type, (a)=>message(a));

    } as Validator<unknown, Type<TypeName>, MessageType, {type:TypeName}>;
}

namespace Type {
    export const Parameters = TypeParameters;
    export const Parameter = TypeParameter;
}
export default Type;
