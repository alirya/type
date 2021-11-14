import TypeParameters from "./type-parameters";
export default function TypeParameter(
//value : ValueT,
//type : TypeT,
//message : MessageDynamic.Parameters<ValueT, MessageT|string> = TypeofString.Parameters,
{ value, type, message, }) {
    if (message) {
        return TypeParameters(value, type, (value, valid) => message({ value, valid }));
    }
    else {
        return TypeParameters(value, type);
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
//# sourceMappingURL=type-parameter.js.map