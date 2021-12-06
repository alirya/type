import String from "../../string";
import Type from "../../type/type";
import Message from "@dikac/t-message/message";
import Dynamic from "@dikac/t-validator/message/function/validatable";
import DynamicValue from "@dikac/t-validator/value/validatable";
export declare type TypeArgument = DynamicValue<unknown> & Type<String> & Message<Dynamic.Parameter<unknown, string, DynamicValue<unknown> & Type<String>>> & {
    error?: (message: string) => Error;
    conversion?: (value: unknown) => string;
    subject?: string;
};
export default function TypeParameter({ value, valid, type, subject, conversion, }: TypeArgument): string;
