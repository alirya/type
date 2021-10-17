import Value from "@dikac/t-value/value";
import String from "../../string";
import TypeInterface from "../../type/type";
export default function Type<Type extends String>(value: Value<unknown> & TypeInterface<Type>): boolean;
