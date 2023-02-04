import Type from '../type';
import TypeString from '../string';
import String from '../string';
import Value from '@alirya/value/value';
import TypeInterface from '../type/type';
import {List} from 'ts-toolbelt';

export type TypeInUnion<TypeName extends TypeString[]> = List.UnionOf<{
    [Index in keyof TypeName] :  TypeName[Index] extends TypeString ? Type<TypeName[Index]> : never;
}>;

export function TypeInParameters<TypeName extends TypeString[]>(
    value : unknown,
    types : [...TypeName]
) : value is TypeInUnion<TypeName> {

    for(const type of types) {

        if(typeof value !== type) {

            return false;
        }
    }

    return !!types.length;
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
