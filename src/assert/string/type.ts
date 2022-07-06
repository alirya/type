import {TemplateParameter} from '@alirya/string/function/template.js';
import String from '../../string.js';
import Type from '../../type/type.js';
import DynamicValue from '@alirya/validator/value/validatable.js';

const templateValid = TemplateParameter({
    string: '{subject} is type of {type}.',
    callback:(string)=>string.trim()
});

const templateInvalid = TemplateParameter({
    string: '{subject} must type of {type}, actual {actual}.',
    callback:(string)=>string.trim()
});

export function TypeParameters<T extends String>(
    value : unknown,
    valid : boolean,
    type : T,
    subject : string = '',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    const argument : Partial<Record<'subject'|'type'|'actual', string>> = {subject, type};

    if(valid) {

        return templateValid(argument);

    } else {

        argument.actual = conversion(value);

        return templateInvalid(argument);
    }
}


export type TypeArgument =
    DynamicValue<unknown> &
    Type<String> &
    {
        error ?: (message:string)=>Error
        conversion ?: (value:unknown)=>string,
        subject ?: string
    };

export function TypeParameter(
    {
        value,
        valid,
        type,
        subject,
        conversion,
    } : TypeArgument
) : string {

    return TypeParameters(value, valid, type, subject, conversion);

}


namespace Type {
    export const Parameters = TypeParameters;
    export const Parameter = TypeParameter;
    export type Argument = TypeArgument;
}
export default Type;
