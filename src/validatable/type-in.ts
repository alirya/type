import {CallbackClassParameters} from '@axiona/validator/validatable/callback.js';
import String from '../string.js';
import BooleanTypeInParameters, {TypeInUnion} from '../boolean/type-in.js';
import {StaticParameters} from '@axiona/validator/message/function/static.js';
import Simple from '@axiona/validator/validatable/simple.js';
import Type from '../type.js';
import ValidatableType from '@axiona/validator/validatable/validatable.js';
import TypeofString from '../assert/string/type-in.js';
import StringNative from '../string.js';
import Value from '@axiona/value/value.js';
import Message from '@axiona/message/message.js';
import {ValidatableParameter} from '@axiona/validator/message/function/validatable.js';
import TypeContainer from '../type/type.js';
import StrictOmit from '@axiona/object/strict-omit.js';
import TypeString from '../string.js';


export type TypeInReturn<
    ValueT = unknown,
    TypeT extends TypeString[] = TypeString[],
    MessageT = unknown
> = Simple<ValueT, TypeInUnion<TypeT>, MessageT, {types : TypeT}>;

export function TypeInParameters<ValueT = unknown, TypeT extends TypeString[] = TypeString[], MessageT = unknown>(
    value : ValueT,
    types : TypeT,
    message : StaticParameters<ValueT, TypeInUnion<TypeT>, false, true, MessageT, [StringNative[]]>
) : TypeInReturn<ValueT, TypeT, MessageT>;

export function TypeInParameters<ValueT = unknown, TypeT extends TypeString[] = TypeString[]>(
    value : ValueT,
    types : TypeT,
) : TypeInReturn<ValueT, TypeT, string>;

export function TypeInParameters<ValueT = unknown, TypeT extends TypeString[] = TypeString[], MessageT = unknown>(
    value : ValueT,
    types : TypeT,
    message : StaticParameters<ValueT, TypeInUnion<TypeT>, false, true, MessageT|string, [StringNative[]]> = TypeofString.Parameters
) : TypeInReturn<ValueT, TypeT, MessageT> {

    return Object.assign(
        new CallbackClassParameters<unknown>(value, BooleanTypeInParameters.Parameters, message, [types]),
        {types}
    ) as TypeInReturn<ValueT, TypeT, MessageT>;

}


export type TypeInArgument<
    ValueT = unknown,
    TypeT extends TypeString[] = TypeString[],
    MessageT = unknown
> =
    Value<ValueT> & { types : TypeT } &
    Partial<Message<ValidatableParameter<ValueT, MessageT>>>;

export function TypeInParameter<ValueT = unknown, TypeT extends TypeString[] = TypeString[], MessageT = unknown>(
    {
        value,
        types,
        message,
    } : Required<TypeInArgument<ValueT, TypeT, MessageT>>
) : TypeInReturn<ValueT, TypeT, MessageT>;

export function TypeInParameter<ValueT = unknown, TypeT extends TypeString[] = TypeString[]>(
    {
        value,
        types,
    } : StrictOmit<TypeInArgument<ValueT, TypeT>, 'message'>
) : TypeInReturn<ValueT, TypeT, string>;

export function TypeInParameter<ValueT = unknown, TypeT extends TypeString[] = TypeString[], MessageT = unknown>(
    {
        value,
        types,
        message,
    } : TypeInArgument<ValueT, TypeT, MessageT|string>
) : TypeInReturn<ValueT, TypeT, MessageT|string> {

    if(message) {

        return TypeInParameters(
            value,
            types,
            (value, valid) => message({value, valid})
        );

    } else {

        return TypeInParameters(value, types);
    }
}


namespace TypeIn {
    export const Parameters = TypeInParameters;
    export const Parameter = TypeInParameter;
    export type Return<ValueT = unknown, TypeT extends TypeString[] = TypeString[], MessageT = unknown>
        = TypeInReturn<ValueT, TypeT, MessageT>;
    export type Argument<ValueT = unknown, TypeT extends TypeString[] = TypeString[], MessageT = unknown>
        = TypeInArgument<ValueT, TypeT, MessageT>;
}
export default TypeIn;
