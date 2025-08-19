/**
 * * Decorador
 * 
 * Para registrar la clase como Repository del sistema.
 */
import Logger from "@bigbyte/utils/logger";
import { decoratorExecEvent, declareDecorator, executeDecorator } from "@bigbyte/events";
import { METADATA_DECORATOR_NAME } from "@bigbyte/utils/constant";
import { checkUniqueDecorator } from "@bigbyte/utils/utilities";
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
            checkUniqueDecorator(Target);

            const paramTypes: Array<any> = Reflect.getMetadata("design:paramtypes", Target) ?? [];
            componentRegistry.add(Target, paramTypes, { type: ComponentType.REPOSITORY, injectable: true });
        });

        executeDecorator(DECORATOR_REPOSITORY_NAME);
    }
}
