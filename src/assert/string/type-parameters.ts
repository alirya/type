import TemplateParameter from '@alirya/string/dist/function/template-parameter';
import String from '../../string';

const templateValid = TemplateParameter({
    string: '{subject} is type of {type}.'
});

const templateInvalid = TemplateParameter({
    string: '{subject} must type of {type}, actual {actual}.'
});

export default function TypeParameters<T extends String>(
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

    // const strings : string[] = [];
    // strings.push(subject);
    //
    // if(valid) {
    //
    //     strings.push('is');
    //
    // } else {
    //
    //     strings.push('must');
    // }
    //
    //
    // if(!valid && conversion) {
    //
    //     strings[2] = strings[2] + ',';
    //     strings.push('actual', conversion(value));
    // }
    //
    // return strings.join(' ') + '.';
}
