/**
 * * Decorador
 * 
 * Para registrar la clase como RestController del servidor.
 */


import Logger from "@bigbyte/utils/logger";
import { decoratorExecEvent, declareDecorator, executeDecorator, getDecorators, DecoratorError } from "@bigbyte/events";
import { METADATA_DECORATOR_NAME } from "@bigbyte/utils/constant";
import { ComponentType, componentRegistry } from "@bigbyte/ioc";

import { DECORATOR_REPOSITORY_NAME, LIBRARY_NAME } from "../constant";


const log = new Logger(LIBRARY_NAME);

export const Repository = (): ClassDecorator => {
    declareDecorator(DECORATOR_REPOSITORY_NAME);

    return (Target: Function): void => {
        log.dev(`${DECORATOR_REPOSITORY_NAME} decorator applied to ${Target.name}`);

        Reflect.defineMetadata(`${METADATA_DECORATOR_NAME}=${DECORATOR_REPOSITORY_NAME}`, true, Target);

        decoratorExecEvent.on('last', () => {
            // Valida que la clase no tenga mas de un decorador
            const keys = Reflect.getMetadataKeys(Target);
            const decorators = getDecorators(keys);
            if (decorators.length > 1) {
                throw new DecoratorError(`Class ${Target.name} is decorated with ${decorators.join(', ')} and @Controller() does not allow it.`);
            }

            const paramTypes: Array<any> = Reflect.getMetadata("design:paramtypes", Target) ?? [];
            componentRegistry.add(Target, paramTypes, { type: ComponentType.CONTROLLER, injectable: false });
        });

        executeDecorator(DECORATOR_REPOSITORY_NAME);
    }
}
