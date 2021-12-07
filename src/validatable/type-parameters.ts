import Callback from "@dikac/t-validator/validatable/callback-class-parameters";
import String from "../string";
import BooleanTypeParameters from "../boolean/type-parameters";
import MessageStatic from "@dikac/t-validator/message/function/static-parameters";
import Simple from "@dikac/t-validator/validatable/simple";
import Type from "../type";
import ValidatableType from "@dikac/t-validator/validatable/validatable";
import TypeofString from "../assert/string/type-parameters";
import StringNative from "../string";

export type TypeType<
    ValueT = unknown,
    TypeT extends String = String,
    MessageT = unknown
> = Simple<ValueT, Type<TypeT>, ValidatableType<unknown, MessageT>> & {type : TypeT};

export default function TypeParameters<ValueT = unknown, TypeT extends String = String, MessageT = unknown>(
    value : ValueT,
    type : TypeT,
    message : MessageStatic<ValueT, Type<TypeT>, false, true, MessageT, [StringNative]>
) : TypeType<ValueT, TypeT, MessageT>;

export default function TypeParameters<ValueT = unknown, TypeT extends String = String>(
    value : ValueT,
    type : TypeT,
) : TypeType<ValueT, TypeT, string>;

export default function TypeParameters<ValueT = unknown, TypeT extends String = String, MessageT = unknown>(
    value : ValueT,
    type : TypeT,
    message : MessageStatic<ValueT, Type<TypeT>, false, true, MessageT|string, [StringNative]> = TypeofString
) : TypeType<ValueT, TypeT, MessageT> {

    return Object.assign(
        new Callback<unknown>(value, BooleanTypeParameters, message, [type]),
        {type}
    ) as TypeType<ValueT, TypeT, MessageT>

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
