import Validator from "@dikac/t-validator/simple";
import TypeofValidatable from "../validatable/type";
import StringNative from "../string";
import TypeType from "../type";
import Return from "@dikac/t-validator/validatable/simple";
import StringType from "../validatable/string/type";

export default function Type<
    TypeName extends StringNative,
    MessageType = unknown
>(
    type : TypeName,
    message : (result:Omit<Return<any, any, TypeType<TypeName>>, 'message'>)=>MessageType,
) : Validator<unknown, TypeType<TypeName>, TypeofValidatable<unknown, TypeName, MessageType>>;

export default function Type<
    TypeName extends StringNative
>(
    type : TypeName,
) : Validator<unknown, TypeType<TypeName>, TypeofValidatable<unknown, TypeName, string>>;
export default function Type<
    TypeName extends StringNative,
    MessageType = unknown
>(
    type : TypeName,
    message : (result:Omit<Return<any, any, TypeType<TypeName>>, 'message'>)=>MessageType|string = StringType,
) : Validator<unknown, TypeType<TypeName>, TypeofValidatable<unknown, TypeName, MessageType>> {

    return function<Argument extends any, ArgumentType extends TypeType<TypeName>> (value : Argument|ArgumentType) {

        return <Return<any, Argument, TypeType<TypeName>, TypeofValidatable< Argument, TypeName, MessageType>>>
            new TypeofValidatable(value, type, message);

    } as Validator<unknown, TypeType<TypeName>, TypeofValidatable<unknown, TypeName, MessageType>>
}
