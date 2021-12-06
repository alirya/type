import Guard from "../boolean/type-parameters";
import Callback from "@dikac/t-function/assert/callback-parameters";
import TypeError from "./throwable/type-parameters";
export default function TypeParameters(value, type, error = TypeError) {
    Callback([value, type], Guard, error);
}
//# sourceMappingURL=type-parameters.js.map