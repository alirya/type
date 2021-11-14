import String from "../../string";
import Value from "@dikac/t-value/value";
import Type from "../../type/type";
import Dynamic from "@dikac/t-validator/message/function/dynamic";
import DynamicValue from "@dikac/t-validator/value/dynamic";
import Message from "@dikac/t-message/message";
import TypeParameters from "./type-parameters";

export type TypeArgument =
    Value &
    Type<String> &
    Message<Dynamic.Parameter<unknown, string, DynamicValue<unknown> & Type<String>>> &
    {
        error ?: (message:string)=>Error
    }

export default function TypeParameter(
    // value : unknown,
    // type : String,
    // message : Dynamic.Parameter<unknown, string, DynamicValue<unknown> & Type<String>> = TypeString,
    // error : (message:string)=>Error = (v)=>new Error(v),
    {
        value,
        type,
        message,
        error,
    } : TypeArgument
) : Error {

    return TypeParameters(value,
        type,
        (value, valid, type) => message({type, value, valid}),
        error
    );
}
