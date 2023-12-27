import Type from '../type.js';
import TypeString from '../string.js';
import String from '../string.js';
import Value from '@axiona/value/value.js';
import TypeInterface from '../type/type.js';
import {List} from 'ts-toolbelt';

export type TypeInUnion<TypeName extends TypeString[]> = List.UnionOf<{
    [Index in keyof TypeName] :  TypeName[Index] extends TypeString ? Type<TypeName[Index]> : never;
}>;

export function TypeInParameters<TypeName extends TypeString[]>(
    value : unknown,
    types : [...TypeName]
) : value is TypeInUnion<TypeName> {

    for(const type of types) {

        if(typeof value === type) {

            return true;
        }
    }

    return false;
}

export function TypeInParameter<Type extends TypeString[]>({
        value,
        types
    } : Value<unknown> & { types: Type }
) : boolean {

    return TypeInParameters(value, types);
}


namespace TypeIn {
    export const Parameters = TypeInParameters;
    export const Parameter = TypeInParameter;
}
export default TypeIn;
