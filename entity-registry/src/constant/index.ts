/**
 * TODO: Refactorizar codigo. Esta solucion no es la mejor.
 * * Se añadio un metadatado en los decoradores de clase principal ``Reflect.defineMetadata(`${METADATA_CONFIGURATION}=${METADATA_CONFIGURATION_DATA}`, true, Target); // inicializa entity-registry```. este es el que deberia probocar la inicializacion.
 * * Pero todavia no consegui accader a esa metadata desde el entity-registry.
 * 
 * Por ahora se usa este array para saber si existe un decorador que debe inicializar el entity-registry.
 */
export const DECORATOR_APP_NAME = '@App';
export const DECORATOR_ENTITY_NAME = '@Entity';
export const DECORATOR_REQUEST_BODY_NAME = '@RequestBody';