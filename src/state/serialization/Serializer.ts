export interface Serializer {
    serialize<T>(state: T): string;
    deserialize<T>(data: string): T;
}