import String from "../../string";


export default function TypeParameters<T extends String>(
    value : unknown,
    valid : boolean,
    type : T,
    subject : string = '',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    const strings : string[] = [];
    strings.push(subject);

    if(valid) {

        strings.push('is')

    } else {

        strings.push('must')
    }


    if(!valid && conversion) {

        strings[2] = strings[2] + ',';
        strings.push('actual', conversion(value))
    }

    return strings.join(' ') + '.';
}
