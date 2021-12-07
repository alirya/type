import String from "../../string";
import Type from "../../type/type";
import Message from "@dikac/t-message/message";
import Dynamic from "@dikac/t-validator/message/function/validatable-parameter";
import DynamicValue from "@dikac/t-validator/value/validatable";
import TypeParameters from "./type-parameters";

export type TypeArgument =
    DynamicValue<unknown> &
    Type<String> &
    Message<Dynamic<unknown, string, DynamicValue<unknown> & Type<String>>> &
    {
        error ?: (message:string)=>Error
        conversion ?: (value:unknown)=>string,
        subject ?: string
    }

export default function TypeParameter(
    // value : unknown,
    // valid : boolean,
    // type : String,
    // subject : string = '',
    // conversion : (value:unknown)=>string = value=>typeof value,
    {
        value,
        valid,
        type,
        subject,
        conversion,
    } : TypeArgument
) : string {

    return TypeParameters(value, valid, type, subject, conversion)

}
