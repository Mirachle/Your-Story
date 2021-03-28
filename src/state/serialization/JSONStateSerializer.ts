import { Serializer } from './Serializer';
import { MappedState } from './StateMapper';

export class JSONStateSerializer implements Serializer {
    serialize<T>(data: T): string {
        return JSON.stringify(data);
    }

    deserialize<T>(serialized: string): T {
        return JSON.parse(serialized);
    }
}