import TypeInterface from '../type';

type Infer<Type> = Type extends TypeInterface<infer As> ? As : never;

export default Infer;
