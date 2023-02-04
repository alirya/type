import Validator from '@alirya/validator/simple';
import TypeofValidatable from '../validatable/type-in';
import StringNative from '../string';
import Type from '../type';
import {SimpleParameters, SimpleParameter} from '@alirya/validator/message/function/simple';
import TypeofString from '../assert/string/type-in';
import TypeContainer from '../type/type';
import Message from '@alirya/message/message';
import SimpleReturn from '@alirya/validator/value/simple';
import Dynamic from '@alirya/validator/value/validatable';
import TypeString from '../string';
import {TypeInUnion} from '../boolean/type-in';

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
