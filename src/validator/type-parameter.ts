import Validator from '@alirya/validator/simple';
import TypeofValidatable, {TypeParametersReturn as TypeofValidatableType} from '../validatable/type-parameters';
import StringNative from '../string';
import Type from '../type';
import TypeContainer from '../type/type';
import Simple from '@alirya/validator/message/function/simple-parameters';
import TypeofString from '../assert/string/type-parameters';
import Message from '@alirya/message/message';
import {TypeParametersReturn} from './type-parameters';

export type TypeParameterArgument<
    TypeName extends StringNative,
    MessageType = unknown
    > = TypeContainer<TypeName> & Partial<Message<Simple<unknown, Type<TypeName>, MessageType, [TypeName]>>>;

export default function TypeParameter<
    TypeName extends StringNative,
    MessageType = unknown
>(
    {
        type,
        message,
    } : Required<TypeParameterArgument<TypeName, MessageType>>
) : TypeParametersReturn<TypeName, MessageType>;

export default function TypeParameter<
    TypeName extends StringNative
>(
    {
        type
    } : Omit<TypeParameterArgument<TypeName, string>, 'message'>
) : TypeParametersReturn<TypeName, string>;
export default function TypeParameter<
    TypeName extends StringNative,
    MessageType = unknown
>(
    {
        type,
        message = TypeofString
    } : Required<TypeParameterArgument<TypeName, MessageType|string>>
) : TypeParametersReturn<TypeName, MessageType> {

    return function (value ) {

        return  TypeofValidatable(value, type, message);

    } as Validator<unknown, Type<TypeName>, TypeofValidatableType<unknown, TypeName, MessageType>>;
}
