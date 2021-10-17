import Validator from "@dikac/t-validator/simple";
import TypeofValidatable from "../validatable/type";
import StringNative from "../string";
import TypeType from "../type";
import Return from "@dikac/t-validator/validatable/simple";
export default function Type<TypeName extends StringNative, MessageType = unknown>(type: TypeName, message: (result: Omit<Return<any, any, TypeType<TypeName>>, 'message'>) => MessageType): Validator<unknown, TypeType<TypeName>, TypeofValidatable<unknown, TypeName, MessageType>>;
export default function Type<TypeName extends StringNative>(type: TypeName): Validator<unknown, TypeType<TypeName>, TypeofValidatable<unknown, TypeName, string>>;
