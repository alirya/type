(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-message/sentence", "@dikac/t-object/string/name"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentence_1 = require("@dikac/t-message/sentence");
    const name_1 = require("@dikac/t-object/string/name");
    const sentence = new sentence_1.default(false, '', {
        valid: 'is instanceof of',
        invalid: 'is not instanceof of',
    }, '');
    function Instance(valid, instance, subject = '') {
        sentence.subject = subject;
        sentence.valid = valid;
        sentence.object = name_1.default(instance);
        return sentence.message;
    }
    exports.default = Instance;
});
//# sourceMappingURL=instance.js.map