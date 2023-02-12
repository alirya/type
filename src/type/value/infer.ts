import TypeInterface from '../type.js';

type Infer<Type> = Type extends TypeInterface<infer As> ? As : never;

export default Infer;
