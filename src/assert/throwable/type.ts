import String from '../../string.js';
import TypeString from '../string/type.js';
import Value from '@alirya/value/value.js';
import Type from '../../type/type.js';
import {ValidatableParameter, ValidatableParameters} from '@alirya/validator/message/function/validatable.js';
import DynamicValue from '@alirya/validator/value/validatable.js';
import Message from '@alirya/message/message.js';

export function TypeParameters(
    value : unknown,
    type : String,
    message : ValidatableParameters<unknown, string, [String]> = TypeString.Parameters,
    error : (message:string)=>Error = (v)=>new Error(v),
) : Error {

    return error(message(value, false, type));
}


export type TypeArgument =
    Value &
    Type<String> &
    Message<ValidatableParameter<unknown, string, DynamicValue<unknown> & Type<String>>> &
    {
        error ?: (message:string)=>Error
    };

export function TypeParameter(
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


namespace Type {
    export const Parameters = TypeParameters;
    export const Parameter = TypeParameter;
}
export default Type;
