import { Property } from "./Property";

export class Entity {
    name: string;

    properties: Array<Property>;

    constructor(name: string, properties: Array<Property>) {
        this.name = name;
        this.properties = properties;
    }
}
