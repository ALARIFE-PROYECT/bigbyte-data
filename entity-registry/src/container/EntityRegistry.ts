import { ClasspathElement, classpathService } from "@bigbyte/classpath";

import { Entity } from "../model/Entity";


class SchemaMapRegistry {

    private registry: Array<Entity>;

    constructor() {
        this.registry = [];

        // const c: ClasspathElement[] = classpathService.getClassByDecorator('@Serve');

        // ! no se cuando iniciar


        const entities = classpathService.getAll().filter(e => e.decorators.length === 0 || e.decorators.includes('@Entity'));
        console.log("🚀 ~ SchemaMapRegistry ~ constructor ~ entities:", entities)

    }
}

export const schemaMapRegistry = new SchemaMapRegistry();
