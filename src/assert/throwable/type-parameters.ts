import String from "../../string";
import TypeString from "../string/type-parameters";
import Dynamic from "@alirya/validator/message/function/validatable-parameters";

export default function TypeParameters(
    value : unknown,
    type : String,
    message : Dynamic<unknown, string, [String]> = TypeString,
    error : (message:string)=>Error = (v)=>new Error(v),
) : Error {

    return error(message(value, false, type));
}
