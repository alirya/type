import String from "../../string";
import TypeString from "../string/type";
import Dynamic from "@dikac/t-validator/message/function/dynamic";

export default function TypeParameters(
    value : unknown,
    type : String,
    message : Dynamic.Parameters<unknown, string, [String]> = TypeString.Parameters,
    error : (message:string)=>Error = (v)=>new Error(v),
) : Error {

    return error(message(value, false, type));
}
