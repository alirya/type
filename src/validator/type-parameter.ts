import Validator from '@alirya/validator/simple';
import TypeofValidatable, {TypeType as TypeofValidatableType} from '../validatable/type-parameters';
import StringNative from '../string';
import Type from '../type';
import TypeContainer from '../type/type';
import Simple from '@alirya/validator/message/function/simple-parameters';
import TypeofString from '../assert/string/type-parameters';
import Message from '@alirya/message/message';
import {TypeType} from './type-parameters';

export type TypeArgument<
    TypeName extends StringNative,
    MessageType = unknown
    > = TypeContainer<TypeName> & Message<Simple<unknown, Type<TypeName>, MessageType, [TypeName]>>;

export default function TypeParameter<
    TypeName extends StringNative,
    MessageType = unknown
>(
    type : TypeName,
    message : Simple<unknown, Type<TypeName>, MessageType, [StringNative]>
) : TypeType<TypeName, MessageType>;

export default function TypeParameter<
    TypeName extends StringNative
>(
    type : TypeName,
) : TypeType<TypeName, string>;
export default function TypeParameter<
    TypeName extends StringNative,
    MessageType = unknown
>(
    type : TypeName,
    message : Simple<unknown, Type<TypeName>, MessageType|string, [StringNative]> = TypeofString,
) : TypeType<TypeName, MessageType> {

    return function (value ) {

        return  TypeofValidatable(value, type, message);

    } as Validator<unknown, Type<TypeName>, TypeofValidatableType<unknown, TypeName, MessageType>>;
}
