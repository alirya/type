import Validator from "@dikac/t-validator/simple";
import ValidatorS from "@dikac/t-validator/validator";
import TypeofValidatable, {TypeType as TypeofValidatableType} from "../validatable/type-parameters";
import StringNative from "../string";
import Type from "../type";
import Simple from "@dikac/t-validator/message/function/simple-parameters";
import TypeofString from "../assert/string/type-parameters";

export type TypeType<
    TypeName extends StringNative,
    MessageType = unknown
    > = Validator<unknown, Type<TypeName>, TypeofValidatableType<unknown, TypeName, MessageType>>

export default function TypeParameters<
    TypeName extends StringNative,
    MessageType = unknown
>(
    type : TypeName,
    message : Simple<unknown, Type<TypeName>, MessageType, [StringNative]>// (result:Omit<Return<any, any, TypeType<TypeName>>, 'message'>)=>MessageType,
) : TypeType<TypeName, MessageType>;

export default function TypeParameters<
    TypeName extends StringNative
>(
    type : TypeName,
) : TypeType<TypeName, string>;
export default function TypeParameters<
    TypeName extends StringNative,
    MessageType = unknown
>(
    type : TypeName,
    message : Simple<unknown, Type<TypeName>, MessageType|string, [StringNative]> = TypeofString,
) : TypeType<TypeName, MessageType> {

    return function (value ) {

        return  TypeofValidatable(value, type, message);

    } as Validator<unknown, Type<TypeName>, TypeofValidatableType<unknown, TypeName, MessageType>>
}
