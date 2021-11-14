import Validator from "@dikac/t-validator/simple";
import TypeofValidatable from "../validatable/type";
import StringNative from "../string";
import Type from "../type";
import TypeContainer from "../type/type";
import Simple from "@dikac/t-validator/message/function/simple";
import TypeofString from "../assert/string/type";
import Message from "@dikac/t-message/message";
import {TypeType} from "./type-parameters";

export type TypeArgument<
    TypeName extends StringNative,
    MessageType = unknown
    > = TypeContainer<TypeName> & Message<Simple.Parameters<unknown, Type<TypeName>, MessageType, [TypeName]>>

export default function TypeParameter<
    TypeName extends StringNative,
    MessageType = unknown
>(
    type : TypeName,
    message : Simple.Parameters<unknown, Type<TypeName>, MessageType, [StringNative]>// (result:Omit<Return<any, any, TypeType<TypeName>>, 'message'>)=>MessageType,
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
    message : Simple.Parameters<unknown, Type<TypeName>, MessageType|string, [StringNative]> = TypeofString.Parameters,
) : TypeType<TypeName, MessageType> {

    return function (value ) {

        return  TypeofValidatable.Parameters(value, type, message);

    } as Validator<unknown, Type<TypeName>, TypeofValidatable.Type<unknown, TypeName, MessageType>>
}
