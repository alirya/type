import NativeList from "../string";
import Type from "../type";
import Validator from "@dikac/t-validator/simple";
import TypeofValidatable from "../validatable/type";
export default function TypeStandard<TypeT extends NativeList = NativeList>(type: TypeT): Validator<unknown, Type<TypeT>, TypeofValidatable<unknown, TypeT, string>>;
