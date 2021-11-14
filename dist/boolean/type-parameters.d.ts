import Type from "../type";
import TypeString from "../string";
export default function TypeParameters<TypeName extends TypeString>(value: unknown, type: TypeName): value is Type<TypeName>;
