import Validator from "@dikac/t-validator/simple";
import TypeofValidatable from "../validatable/type";
import StringNative from "../string";
import Type from "../type";
import Return from "@dikac/t-validator/validatable/simple";
export default function TypeOf<TypeName extends StringNative, MessageT = unknown>(type: TypeName, message: (result: Omit<Return<any, any, Type<TypeName>>, 'message'>) => MessageT): Validator<unknown, Type<TypeName>, TypeofValidatable<unknown, TypeName, MessageT>>;
