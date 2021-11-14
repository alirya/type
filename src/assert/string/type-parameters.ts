import String from "../../string";
import SentencesMust from "@dikac/t-string/message/sentences-must";


export default function TypeParameters<T extends String>(
    value : unknown,
    valid : boolean,
    type : T,
    subject : string = '',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    const sentence =  SentencesMust(valid,[subject]);
    sentence.expect =  ['type of', type];
    sentence.comma =  ['expect'];

    if(!valid && conversion) {

        sentence.actual.push('actual', conversion(value))
    }

    return sentence.message;
}
