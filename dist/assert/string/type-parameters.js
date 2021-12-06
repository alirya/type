export default function TypeParameters(value, valid, type, subject = '', conversion = value => typeof value) {
    const strings = [];
    strings.push(subject);
    if (valid) {
        strings.push('is');
    }
    else {
        strings.push('must');
    }
    if (!valid && conversion) {
        strings[2] = strings[2] + ',';
        strings.push('actual', conversion(value));
    }
    return strings.join(' ') + '.';
}
//# sourceMappingURL=type-parameters.js.map