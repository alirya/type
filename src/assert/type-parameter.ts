import TypeString from "../string";
import Value from "@alirya/value/value";
import Type from "../type/type";
import TypeParameters from "./type-parameters";

export type TypeArgument<TypeName extends TypeString = TypeString> =
    Type<TypeName> & {
        error?:(argument:Type<TypeName> & Value)=>Error
    }

export default function TypeParameter<TypeName extends TypeString = TypeString>(
    value : unknown,
    {
        type,
        error
    } : TypeArgument<TypeName>
) : asserts value is TypeName {

    TypeParameters(value, type, error);
}
