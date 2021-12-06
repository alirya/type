import Guard from "../boolean/type-parameters";
import Callback from "@dikac/t-function/assert/callback-parameters";
import TypeError from "./throwable/type-parameters";
import TypeString from "../string";

export default function TypeParameters<TypeName extends TypeString = TypeString>(
    value : unknown,
    type : TypeName,
    error : (value:unknown, type:TypeName)=>Error = TypeError
) : asserts value is TypeName {

    Callback<[unknown, TypeName]>([value, type], Guard, error);
}
