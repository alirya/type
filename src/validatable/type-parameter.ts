import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import String from "../string";
import MessageDynamic from "@dikac/t-validator/message/function/dynamic";
import Simple from "@dikac/t-validator/validatable/simple";
import Type from "../type";
import TypeContainer from "../type/type";
import ValidatableType from "@dikac/t-validator/validatable/dynamic";
import StrictOmit from "@dikac/t-object/strict-omit";
import TypeParameters from "./type-parameters";

export type TypeType<
    ValueT = unknown,
    TypeT extends String = String,
    MessageT = unknown
> = Simple<unknown, ValueT, Type<TypeT>, ValidatableType<unknown, MessageT>> & {type : TypeT};

export type TypeArgument<
    ValueT = unknown,
    TypeT extends String = String,
    MessageT = unknown
> =
    Value<ValueT> & TypeContainer<TypeT> &
    Partial<Message<MessageDynamic.Parameter<ValueT, MessageT>>>

export default function TypeParameter<ValueT = unknown, TypeT extends String = String, MessageT = unknown>(
    //value : ValueT,
    //type : TypeT,
    //message : MessageDynamic.Parameters<ValueT, MessageT>,
    {
        value,
        type,
        message,
    } : Required<TypeArgument<ValueT, TypeT, MessageT>>
) : TypeType<ValueT, TypeT, MessageT>;

export default function TypeParameter<ValueT = unknown, TypeT extends String = String>(
    // value : ValueT,
    // type : TypeT,
    {
        value,
        type,
    } : StrictOmit<TypeArgument<ValueT, TypeT>, 'message'>
) : TypeType<ValueT, TypeT, string>;

export default function TypeParameter<ValueT = unknown, TypeT extends String = String, MessageT = unknown>(
    //value : ValueT,
    //type : TypeT,
    //message : MessageDynamic.Parameters<ValueT, MessageT|string> = TypeofString.Parameters,
    {
        value,
        type,
        message,
    } : TypeArgument<ValueT, TypeT, MessageT|string>
) : TypeType<ValueT, TypeT, MessageT|string> {

    if(message) {

        return TypeParameters(
            value,
            type,
            (value, valid) => message({value, valid})
        );

    } else {

        return TypeParameters(value, type, );
    }
    //
    //
    // return Object.assign(
    //     new Callback.Class.Parameters(value, BooleanTypeParameters, message, [type]),
    //     {type}
    // ) as TypeType<ValueT, TypeT, MessageT>

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
