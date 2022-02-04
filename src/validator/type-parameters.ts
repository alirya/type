import Validator from '@alirya/validator/simple';
import TypeofValidatable, {TypeParametersReturn as TypeofValidatableType} from '../validatable/type-parameters';
import StringNative from '../string';
import Type from '../type';
import Simple from '@alirya/validator/message/function/simple-parameters';
import TypeofString from '../assert/string/type-parameters';

export type TypeParametersReturn<
    TypeName extends StringNative,
    MessageType = unknown
    > = Validator<unknown, Type<TypeName>, TypeofValidatableType<unknown, TypeName, MessageType>>;

export default function TypeParameters<
    TypeName extends StringNative,
    MessageType = unknown
>(
    type : TypeName,
    message : Simple<unknown, Type<TypeName>, MessageType, [StringNative]>
) : TypeParametersReturn<TypeName, MessageType>;

export default function TypeParameters<
    TypeName extends StringNative
>(
    type : TypeName,
) : TypeParametersReturn<TypeName, string>;
export default function TypeParameters<
    TypeName extends StringNative,
    MessageType = unknown
>(
    type : TypeName,
    message : Simple<unknown, Type<TypeName>, MessageType|string, [StringNative]> = TypeofString,
) : TypeParametersReturn<TypeName, MessageType> {

    return function (value ) {

        return  TypeofValidatable(value, type, message);

    } as Validator<unknown, Type<TypeName>, TypeofValidatableType<unknown, TypeName, MessageType>>;
}
