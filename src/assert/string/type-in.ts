import {TemplateParameter} from '@alirya/string/function/template.js';
import String from '../../string.js';
import Type from '../../type/type.js';
import DynamicValue from '@alirya/validator/value/validatable.js';

// const templateValid = TemplateParameter({
//     string: '{subject} is type of {type}.',
//     callback:(string)=>string.trim()
// });
//
// const templateInvalid = TemplateParameter({
//     string: '{subject} must type of {type}, actual {actual}.',
//     callback:(string)=>string.trim()
// });

export function TypeInParameters(
    value : unknown,
    valid : boolean,
    types : string[],
    subject  = '',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    const typeNames : string = types.join(', ');

    if(valid) {

        return `${subject} is in type of ${typeNames}.`.trim();

    } else {

        const actual = conversion(value);
        return `${subject} must in type of ${typeNames}, actual type ${actual}.`.trim();
    }

    // const argument : Partial<Record<'subject'|'type'|'actual', string>> = {subject, type};
    //
    // if(valid) {
    //
    //     return templateValid(argument);
    //
    // } else {
    //
    //     argument.actual = conversion(value);
    //
    //     return templateInvalid(argument);
    // }
}


export type TypeInArgument =
    DynamicValue<unknown> &
    // Type<String> &
    {
        types: string[],
        error ?: (message:string)=>Error
        conversion ?: (value:unknown)=>string,
        subject ?: string
    };

export function TypeInParameter(
    {
        value,
        valid,
        types,
        subject,
        conversion,
    } : TypeInArgument
) : string {

    return TypeInParameters(value, valid, types, subject, conversion);

}


namespace TypeIn {
    export const Parameters = TypeInParameters;
    export const Parameter = TypeInParameter;
    export type Argument = TypeInArgument;
}
export default TypeIn;
