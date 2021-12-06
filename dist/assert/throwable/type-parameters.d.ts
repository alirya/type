import String from "../../string";
import Dynamic from "@dikac/t-validator/message/function/validatable";
export default function TypeParameters(value: unknown, type: String, message?: Dynamic.Parameters<unknown, string, [String]>, error?: (message: string) => Error): Error;
