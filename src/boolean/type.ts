import Type from '../type';
import TypeString from '../string';
import String from '../string';
import Value from '@alirya/value/value';
import TypeInterface from '../type/type';

export function TypeParameters<TypeName extends TypeString>(
    value : unknown,
    type : TypeName
) : value is Type<TypeName> {

    return typeof value === type;
}

export function TypeParameter<Type extends String>({
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
