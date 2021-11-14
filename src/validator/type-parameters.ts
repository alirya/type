import Validator from "@dikac/t-validator/simple";
import ValidatorS from "@dikac/t-validator/validator";
import TypeofValidatable from "../validatable/type";
import StringNative from "../string";
import Type from "../type";
import Simple from "@dikac/t-validator/message/function/simple";
import TypeofString from "../assert/string/type";

export type TypeType<
    TypeName extends StringNative,
    MessageType = unknown
    > = Validator<unknown, Type<TypeName>, TypeofValidatable.Type<unknown, TypeName, MessageType>>

export default function TypeParameters<
    TypeName extends StringNative,
    MessageType = unknown
>(
    type : TypeName,
    message : Simple.Parameters<unknown, Type<TypeName>, MessageType, [StringNative]>// (result:Omit<Return<any, any, TypeType<TypeName>>, 'message'>)=>MessageType,
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
    message : Simple.Parameters<unknown, Type<TypeName>, MessageType|string, [StringNative]> = TypeofString.Parameters,
) : TypeType<TypeName, MessageType> {

    return function (value ) {

        return  TypeofValidatable.Parameters(value, type, message);

    } as Validator<unknown, Type<TypeName>, TypeofValidatable.Type<unknown, TypeName, MessageType>>
}
