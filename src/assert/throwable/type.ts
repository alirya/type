import String from '../../string.js';
import TypeString from '../string/type.js';
import Value from '@axiona/value/value.js';
import Type from '../../type/type.js';
import {ValidatableParameter, ValidatableParameters} from '@axiona/validator/message/function/validatable.js';
import DynamicValue from '@axiona/validator/value/validatable.js';
import Message from '@axiona/message/message.js';

export function TypeParameters(
    value : unknown,
    type : string,
    message : ValidatableParameters<unknown, string, [string]> = TypeString.Parameters,
    error : (message:string)=>Error = (v)=>new Error(v),
) : Error {

    return error(message(value, false, type));
}


export type TypeArgument =
    Value &
    Type<string> &
    Message<ValidatableParameter<unknown, string, DynamicValue<unknown> & Type<string>>> &
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
