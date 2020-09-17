import SentencesMust from "@dikac/t-string/message/sentences-must";
export default function Type(valid, value, type, subject = '', conversion = value => typeof value) {
    const sentence = SentencesMust(valid, [subject]);
    sentence.expect = ['type of', type];
    sentence.comma = ['expect'];
    if (!valid && conversion) {
        sentence.actual.push('actual', conversion(value));
    }
    return sentence.message;
}
//# sourceMappingURL=type.js.map