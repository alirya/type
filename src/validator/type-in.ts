import Validator from '@axiona/validator/simple.js';
import TypeofValidatable from '../validatable/type-in.js';
import StringNative from '../string.js';
import Type from '../type.js';
import {SimpleParameters, SimpleParameter} from '@axiona/validator/message/function/simple.js';
import TypeofString from '../assert/string/type-in.js';
import TypeContainer from '../type/type.js';
import Message from '@axiona/message/message.js';
import SimpleReturn from '@axiona/validator/value/simple.js';
import Dynamic from '@axiona/validator/value/validatable.js';
import TypeString from '../string.js';
import {TypeInUnion} from '../boolean/type-in.js';

export type TypeInParametersReturn<
    TypeName extends TypeString[],
    MessageType = unknown
    > = Validator<unknown, TypeInUnion<TypeName>, MessageType, {types : TypeName}>;

export function TypeInParameters<
    TypeName extends StringNative[],
    MessageType = unknown
>(
    type : TypeName,
    message : SimpleParameters<unknown, TypeInUnion<TypeName>, MessageType, [StringNative[]]>
) : TypeInParametersReturn<TypeName, MessageType>;

export function TypeInParameters<
    TypeName extends StringNative[]
>(
    type : TypeName,
) : TypeInParametersReturn<TypeName, string>;
export function TypeInParameters<
    TypeName extends StringNative[],
    MessageType = unknown
>(
    type : TypeName,
    message : SimpleParameters<unknown, TypeInUnion<TypeName>, MessageType|string, [StringNative[]]> = TypeofString.Parameters,
) : TypeInParametersReturn<TypeName, MessageType|string> {

    return function (value ) {

        return  TypeofValidatable.Parameters(value, type, message);

    } as Validator<unknown, TypeInUnion<TypeName>, MessageType|string, { types: TypeName }>;
}


export type TypeInArgument<
    TypeName extends StringNative[],
    MessageType = unknown
> = { types: TypeName } &
    Message<SimpleParameter<unknown, TypeName, MessageType, { types: TypeName } &
    SimpleReturn<unknown, TypeName, Readonly<Dynamic<unknown>>>>>;

export function TypeInParameter<
    TypeName extends StringNative[],
    MessageType = unknown
>(
    {
        types,
        message,
    } : Required<TypeInArgument<TypeName, MessageType>>
) : TypeInParametersReturn<TypeName, MessageType>;

export function TypeInParameter<
    TypeName extends StringNative[]
>(
    {
        types
    } : Omit<TypeInArgument<TypeName, string>, 'message'>
) : TypeInParametersReturn<TypeName, string>;
export function TypeInParameter<
    TypeName extends StringNative[],
    MessageType = unknown
>(
    {
        types,
        message = TypeofString.Parameter
    } : Required<TypeInArgument<TypeName, MessageType|string>>
) : TypeInParametersReturn<TypeName, MessageType> {

    return function (value ) {

        return  TypeofValidatable.Parameters(value, types, (a)=>message(a));

    } as Validator<unknown, TypeInUnion<TypeName>, MessageType, {types:TypeName}>;
}

namespace Type {
    export const Parameters = TypeInParameters;
    export const Parameter = TypeInParameter;
}
export default Type;
