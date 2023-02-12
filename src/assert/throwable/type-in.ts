import String from '../../string.js';
import TypeString from '../string/type-in.js';
import Value from '@alirya/value/value.js';
import Type from '../../type/type.js';
import {ValidatableParameter, ValidatableParameters} from '@alirya/validator/message/function/validatable.js';
import DynamicValue from '@alirya/validator/value/validatable.js';
import Message from '@alirya/message/message.js';

export function TypeInParameters(
    value : unknown,
    types : string[],
    message : ValidatableParameters<unknown, string, [string[]]> = TypeString.Parameters,
    error : (message:string)=>Error = (v)=>new Error(v),
) : Error {

    return error(message(value, false, types));
}


export type TypeArgument =
    Value &
    {types: string[]}  &
    Message<ValidatableParameter<unknown, string, DynamicValue<unknown> & {types: string[]} /*& Type<String>*/>> &
    {
        error ?: (message:string)=>Error
    };

export function TypeInParameter(
    {
        value,
        types,
        message,
        error,
    } : TypeArgument
) : Error {

    return TypeInParameters(value,
        types,
        (value, valid, types) => message({types, value, valid}),
        error
    );
}


namespace TypeIn {
    export const Parameters = TypeInParameters;
    export const Parameter = TypeInParameter;
}
export default TypeIn;
