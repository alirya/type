import Guard from "../boolean/type";
import Callback from "@dikac/t-function/assert/callback";
import TypeError from "./throwable/type";
import TypeString from "../string";

export default function Type<TypeName extends TypeString = TypeString>(
    value : unknown,
    type : TypeName,
    error : (value:unknown, type:TypeName)=>Error = TypeError
) : asserts value is TypeName {

    Callback.Parameter<[unknown, TypeName]>([value, type], Guard, error);
}
