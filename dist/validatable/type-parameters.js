import Callback from "@dikac/t-validator/validatable/callback";
import BooleanTypeParameters from "../boolean/type-parameters";
import TypeofString from "../assert/string/type";
export default function TypeParameters(value, type, message = TypeofString.Parameters) {
    return Object.assign(new Callback.Class.Parameters(value, BooleanTypeParameters, message, [type]), { type });
}
//
// export default class Type<ValueT = unknown, TypeT extends String = String, MessageT = unknown>
//     extends MergeWrapper.Parameters<Value<ValueT>, Message<MessageT>, Validatable>
// {
//     readonly type : TypeT;
//
//     constructor(
//         value : ValueT,
//         type : TypeT,
//         message : (result:Readonly<Value<ValueT> & TypeInterface<TypeT> & Validatable>)=>MessageT,
//     ) {
//
//         let container : Value<ValueT> & TypeInterface<TypeT> = {
//             type : type,
//             value : value,
//         };
//
//         let msg = MessageCallback.Function.Parameters(container, TypeBoolean, ()=>message(this));
//
//         super(container, msg, msg);
//
//         this.type = type;
//     }
// }
//# sourceMappingURL=type-parameters.js.map