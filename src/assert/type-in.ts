import Guard from '../boolean/type-in.js';
import {CallbackParameters} from '@axiona/function/assert/callback.js';
import TypeError from './throwable/type-in.js';
import TypeString from '../string.js';
import Value from '@axiona/value/value.js';
import Type from '../type/type.js';

export function TypeInParameters<TypeName extends TypeString[] = TypeString[]>(
    value : unknown,
    types : [...TypeName],
    error : (value:unknown, types:[...TypeName])=>Error = TypeError.Parameters
) : asserts value is TypeName {

    CallbackParameters<[unknown, TypeName]>([value, types], Guard.Parameters, error);
}



export type TypeArgument<TypeName extends TypeString[] = TypeString[]> =
    /*Type<TypeName> & */{
    types: TypeName;
        error?:(argument:{types: TypeName} & Value)=>Error;
    };

export function TypeInParameter<TypeName extends TypeString[] = TypeString[]>(
    value : unknown,
    {
        types,
        error
    } : TypeArgument<TypeName>
) : asserts value is TypeName {

    TypeInParameters(value, types, error);
}


namespace TypeIn {
    export const Parameters = TypeInParameters;
    export const Parameter = TypeInParameter;
}
export default TypeIn;
