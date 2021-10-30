import MergeWrapper from "@dikac/t-validator/validatable/readonly-wrapper";
import MessageCallback from "@dikac/t-validator/validatable/callback";
import TypeBoolean from "../value/boolean/type";
export default class Type extends MergeWrapper.Parameter {
    constructor(value, type, message) {
        let container = {
            type: type,
            value: value,
        };
        let msg = MessageCallback.Function.Parameter(container, TypeBoolean, () => message(this));
        super(container, msg, msg);
        this.type = type;
    }
}
//# sourceMappingURL=type.js.map