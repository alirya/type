import Guard from '../boolean/type.js';
import {CallbackParameters} from '@alirya/function/assert/callback.js';
import TypeError from './throwable/type.js';
import TypeString from '../string.js';
import Value from '@alirya/value/value.js';
import Type from '../type/type.js';

export function TypeParameters<TypeName extends TypeString = TypeString>(
    value : unknown,
    type : TypeName,
    error : (value:unknown, type:TypeName)=>Error = TypeError.Parameters
) : asserts value is TypeName {

    CallbackParameters<[unknown, TypeName]>([value, type], Guard.Parameters, error);
}



export type TypeArgument<TypeName extends TypeString = TypeString> =
    Type<TypeName> & {
        error?:(argument:Type<TypeName> & Value)=>Error
    };

export function TypeParameter<TypeName extends TypeString = TypeString>(
    value : unknown,
    {
        type,
        error
    } : TypeArgument<TypeName>
) : asserts value is TypeName {

    TypeParameters(value, type, error);
}


namespace Type {
    export const Parameters = TypeParameters;
    export const Parameter = TypeParameter;
}
export default Type;
