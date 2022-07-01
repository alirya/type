import Validator from '@alirya/validator/simple';
import TypeofValidatable from '../validatable/type';
import StringNative from '../string';
import Type from '../type';
import {SimpleParameters, SimpleParameter} from '@alirya/validator/message/function/simple';
import TypeofString from '../assert/string/type';
import TypeContainer from '../type/type';
import Message from '@alirya/message/message';
import SimpleReturn from '@alirya/validator/value/simple';
import Dynamic from '@alirya/validator/value/validatable';

export type TypeParametersReturn<
    TypeName extends StringNative,
    MessageType = unknown
    > = Validator<unknown, Type<TypeName>, TypeofValidatable.Return<unknown, TypeName, MessageType>>;

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

    } as Validator<unknown, Type<TypeName>, TypeofValidatable.Return<unknown, TypeName, MessageType>>;
}


export type TypeArgument<
    TypeName extends StringNative,
    MessageType = unknown
    > = TypeContainer<TypeName> & Message<SimpleParameter<unknown, TypeName, MessageType, TypeContainer<StringNative> & SimpleReturn<unknown, TypeName, Readonly<Dynamic<unknown>>>>>;

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

    } as Validator<unknown, Type<TypeName>, TypeofValidatable.Return<unknown, TypeName, MessageType>>;
}

namespace Type {
    export const Parameters = TypeParameters;
    export const Parameter = TypeParameter;
}
export default Type;
