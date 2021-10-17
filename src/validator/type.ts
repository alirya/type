import Validator from "@dikac/t-validator/simple";
import Message from "@dikac/t-message/message";
import TypeofValidatable from "../validatable/type";
import StringNative from "../string";
import TypeType from "../type";
import Return from "@dikac/t-validator/validatable/simple";
import Replace from "@dikac/t-validatable/boolean/replace";

export default function Type<
    TypeName extends StringNative,
    MessageT = unknown
>(
    type : TypeName,
    message : (result:Omit<Return<any, any, TypeType<TypeName>>, 'message'>)=>MessageT,
) : Validator<unknown, TypeType<TypeName>, TypeofValidatable<unknown, TypeName, MessageT>> {

    return function<Argument extends any, ArgumentType extends TypeType<TypeName>> (value : Argument|ArgumentType) {

        return <Return<any, Argument, TypeType<TypeName>, TypeofValidatable< Argument, TypeName, MessageT>>>
            new TypeofValidatable(value, type, message);

    } as Validator<unknown, TypeType<TypeName>, TypeofValidatable<unknown, TypeName, MessageT>>
}
