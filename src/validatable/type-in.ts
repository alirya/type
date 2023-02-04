import {CallbackClassParameters} from '@alirya/validator/validatable/callback';
import String from '../string';
import BooleanTypeInParameters, {TypeInUnion} from '../boolean/type-in';
import {StaticParameters} from '@alirya/validator/message/function/static';
import Simple from '@alirya/validator/validatable/simple';
import Type from '../type';
import ValidatableType from '@alirya/validator/validatable/validatable';
import TypeofString from '../assert/string/type-in';
import StringNative from '../string';
import Value from '@alirya/value/value';
import Message from '@alirya/message/message';
import {ValidatableParameter} from '@alirya/validator/message/function/validatable';
import TypeContainer from '../type/type';
import StrictOmit from '@alirya/object/strict-omit';
import TypeString from '../string';


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
