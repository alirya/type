import String from "../string";
import Value from "@dikac/t-value/value";
import TypeInterface from "../type/type";
export default function TypeParameter<Type extends String>({ value, type }: Value<unknown> & TypeInterface<Type>): boolean;
