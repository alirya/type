import TypeParameters from "./type-parameters";
import TypeParameter, { TypeArgument } from "./type-parameter";
declare namespace Type {
    const Parameters: typeof TypeParameters;
    const Parameter: typeof TypeParameter;
    type Argument = TypeArgument;
}
export default Type;
