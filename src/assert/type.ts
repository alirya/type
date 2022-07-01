import Guard from '../boolean/type';
import {CallbackParameters} from '@alirya/function/assert/callback';
import TypeError from './throwable/type';
import TypeString from '../string';
import Value from '@alirya/value/value';
import Type from '../type/type';

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
