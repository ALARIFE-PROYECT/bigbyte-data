/**
 * * Decorador
 * 
 * Para registrar la clase como un servidor.
 */

import "reflect-metadata";

import { METADATA_DECORATOR_NAME, METADATA_CONFIGURATION, METADATA_CONFIGURATION_DATA } from "@bigbyte/utils/constant";
import { declareDecorator, executeDecorator } from "@bigbyte/events";
import Logger from "@bigbyte/utils/logger";

import { DECORATOR_MONGO_NAME, LIBRARY_NAME } from "../../constant";


const log = new Logger(LIBRARY_NAME);

export const Mongo = (): ClassDecorator => {
    declareDecorator(DECORATOR_MONGO_NAME);

    return (Target: Function): void => {
        log.dev(`${DECORATOR_MONGO_NAME} decorator applied to ${Target.name}`);

        Reflect.defineMetadata(`${METADATA_DECORATOR_NAME}=${DECORATOR_MONGO_NAME}`, true, Target);
        Reflect.defineMetadata(METADATA_CONFIGURATION, METADATA_CONFIGURATION_DATA, Target); // inicializa entity-registry

        executeDecorator(DECORATOR_MONGO_NAME);
    }
}
