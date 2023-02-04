import String from '../../string';
import TypeString from '../string/type-in';
import Value from '@alirya/value/value';
import Type from '../../type/type';
import {ValidatableParameter, ValidatableParameters} from '@alirya/validator/message/function/validatable';
import DynamicValue from '@alirya/validator/value/validatable';
import Message from '@alirya/message/message';

export function TypeInParameters(
    value : unknown,
    types : String[],
    message : ValidatableParameters<unknown, string, [String[]]> = TypeString.Parameters,
    error : (message:string)=>Error = (v)=>new Error(v),
) : Error {

    return error(message(value, false, types));
}


export type TypeArgument =
    Value &
    {types: String[]}  &
    Message<ValidatableParameter<unknown, string, DynamicValue<unknown> & {types: String[]} /*& Type<String>*/>> &
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
