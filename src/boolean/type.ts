import Type from '../type.js';
import TypeString from '../string.js';
import String from '../string.js';
import Value from '@alirya/value/value.js';
import TypeInterface from '../type/type.js';

export function TypeParameters<TypeName extends TypeString>(
    value : unknown,
    type : TypeName
) : value is Type<TypeName> {

    return typeof value === type;
}

export function TypeParameter<Type extends TypeString>({
        value,
        type
    } : Value<unknown> & TypeInterface<Type>
) : boolean {

    return TypeParameters(value, type);
}


namespace Type {
    export const Parameters = TypeParameters;
    export const Parameter = TypeParameter;
}
export default Type;
