import String from "../../string";
import Value from "@alirya/value/value";
import Type from "../../type/type";
import Dynamic from "@alirya/validator/message/function/validatable-parameter";
import DynamicValue from "@alirya/validator/value/validatable";
import Message from "@alirya/message/message";
import TypeParameters from "./type-parameters";

export type TypeArgument =
    Value &
    Type<String> &
    Message<Dynamic<unknown, string, DynamicValue<unknown> & Type<String>>> &
    {
        error ?: (message:string)=>Error
    }

export default function TypeParameter(
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
