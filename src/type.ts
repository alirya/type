import TypeString from './string';


type Type<Type extends TypeString> =
    Type extends 'string' ? string :
    Type extends 'object' ? object :
    Type extends 'undefined' ? undefined :
    Type extends 'boolean' ? boolean :
    Type extends 'number' ? number :
    Type extends 'bigint' ? bigint :
    Type extends 'symbol' ? symbol :
    Type extends 'function' ? ()=>any :
    never;

export default Type;
