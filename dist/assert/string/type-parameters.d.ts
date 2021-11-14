import String from "../../string";
export default function TypeParameters<T extends String>(value: unknown, valid: boolean, type: T, subject?: string, conversion?: (value: unknown) => string): string;
