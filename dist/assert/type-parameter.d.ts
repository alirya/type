import TypeString from "../string";
import Value from "@dikac/t-value/value";
import Type from "../type/type";
export declare type TypeArgument<TypeName extends TypeString = TypeString> = Type<TypeName> & {
    error?: (argument: Type<TypeName> & Value) => Error;
};
export default function TypeParameter<TypeName extends TypeString = TypeString>(value: unknown, { type, error }: TypeArgument<TypeName>): asserts value is TypeName;
