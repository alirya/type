import Guard from "../boolean/type";
import Callback from "@dikac/t-function/assert/callback";
import TypeError from "./throwable/type";
export default function TypeParameters(value, type, error = TypeError.Parameters) {
    Callback.Parameter([value, type], Guard.Parameters, error);
}
//# sourceMappingURL=type-parameters.js.map