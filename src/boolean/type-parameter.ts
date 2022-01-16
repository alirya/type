import String from "../string";
import Value from "@alirya/value/value";
import TypeInterface from "../type/type";
import TypeParameters from "./type-parameters";

export default function TypeParameter<Type extends String>({
        value,
        type
    } : Value<unknown> & TypeInterface<Type>
) : boolean {

    return TypeParameters(value, type);
}
