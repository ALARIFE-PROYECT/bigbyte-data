import { ClasspathElement, classpathService } from "@bigbyte/classpath";
import { Component, componentRegistry } from "@bigbyte/ioc";
import { METADATA_CONFIGURATION, METADATA_CONFIGURATION_DATA } from "@bigbyte/utils/constant";

import { Entity } from "../model/Entity";

/**
 * Servicio para registrar las entidades.
 */
class EntityRegistry {

    private registry: Array<Entity>;

    constructor() {
        this.registry = [];

        // const classpathSearchResult: ClasspathElement[] = classpathService.getClassByDecorator('@App');
        // console.log("🚀 ~ SchemaMapRegistry ~ constructor ~ classpathSearchResult:", classpathSearchResult)

        // if (classpathSearchResult.length === 0 || classpathSearchResult.length > 1) {
        //     throw new Error("There must be exactly one class with the @App decorator.");
        // }

        // const mainClasspath = classpathSearchResult[0];
        // console.log("🚀 ~ SchemaMapRegistry ~ constructor ~ mainClasspath:", mainClasspath)
        // const mainComponent: Component | undefined = componentRegistry.getByName(mainClasspath.name);
        // console.log("🚀 ~ SchemaMapRegistry ~ constructor ~ mainComponent:", mainComponent)

        // if (!mainComponent) {
        //     throw new Error(`Main component not found for class ${mainClasspath.name}`);
        // }

        // const metadataKeys = Reflect.getMetadataKeys(mainComponent.class);
        // console.log("🚀 ~ SchemaMapRegistry ~ constructor ~ metadataKeys:", metadataKeys)
        // const initRegistry = metadataKeys.filter(key => key.includes(`${METADATA_CONFIGURATION}=${METADATA_CONFIGURATION_DATA}`)).length > 0;
        // console.log("🚀 ~ SchemaMapRegistry ~ constructor ~ initRegistry:", initRegistry)

        // if (initRegistry) {
        //     const entities = classpathService.getAll().filter(e => e.decorators.length === 0 || e.decorators.includes('@Entity'));
        //     console.log("🚀 ~ SchemaMapRegistry ~ constructor ~ entities:", entities)
        // }
    }

    getEntityByName(name: string): Entity | undefined {
        return this.registry.find(entity => entity.name === name);
    }
}

export const entityRegistry = new EntityRegistry();
