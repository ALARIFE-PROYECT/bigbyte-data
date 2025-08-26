import { ClasspathElement, classpathService } from "@bigbyte/classpath";

import { DECORATOR_APP_NAME, DECORATOR_ENTITY_NAME, SUPPORTED_DECORATOR_NAMES } from "../constant";
import { Entity } from "../model/Entity";


/**
 * Servicio para registrar las entidades.
 */
class EntityRegistry {

    private registry: Array<Entity>;

    constructor() {
        this.registry = [];

        /**
         * TODO: Refactorizar codigo. Esta solucion no es la mejor.
         * * Se añadio un metadatado en los decoradores de clase principal ``Reflect.defineMetadata(`${METADATA_CONFIGURATION}=${METADATA_CONFIGURATION_DATA}`, true, Target); // inicializa entity-registry```. este es el que deberia probocar la inicializacion.
         * * Pero todavia no consegui accader a esa metadata desde el entity-registry.
         * 
         * Por ahora se usa este array para saber si existe un decorador que debe inicializar el entity-registry.
         */
        const classpathSearchResult: ClasspathElement[] = classpathService.getClassByDecorator(DECORATOR_APP_NAME);
        if (classpathSearchResult.length === 0 || classpathSearchResult.length > 1) {
            throw new Error("There must be exactly one class with the @App decorator.");
        }

        const mainClasspath = classpathSearchResult[0];
        const initRegistry = mainClasspath.decorators.some(d => SUPPORTED_DECORATOR_NAMES.includes(d))

        if (initRegistry) {
            /**
             * TODO: modificar classpath, no estan las interfaces
             * 
             * TODO: modificar classpath, no marca la clase principal
             */
            const entities = classpathService.getAll().filter(e => e.decorators.length === 0 || e.decorators.includes(DECORATOR_ENTITY_NAME));
            console.log("🚀 ~ SchemaMapRegistry ~ constructor ~ entities:", entities)
        }
    }

    getEntityByName(name: string): Entity | undefined {
        return this.registry.find(entity => entity.name === name);
    }
}

export const entityRegistry = new EntityRegistry();
