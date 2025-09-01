import 'reflect-metadata';
import { METADATA_CONFIGURATION, METADATA_CONFIGURATION_DATA } from '@bigbyte/utils/constant';
import { ClasspathElement, ClasspathElementType, ClasspathMethod, classpathService, ClasspathType } from '@bigbyte/classpath';
import { componentRegistry } from '@bigbyte/ioc';

import { DECORATOR_APP_NAME, DECORATOR_ENTITY_NAME, DECORATOR_REQUEST_BODY_NAME } from '../constant';
import { Entity } from '../model/Entity';

/**
 * Servicio para registrar las entidades.
 */
class EntityRegistry {
  private registry: Array<Entity>;

  constructor() {
    this.registry = [];

    /**
     * ! no es necesario comprobar si es data
     * * Se insertaran por el decorador @Entity
     */
    // this.initData();
  }

  // private initData(): void {
  //   // busco la clase principal decorada con @App
  //   const classpathSearchResult: ClasspathElement[] = classpathService.getELementByDecorator(DECORATOR_APP_NAME);
  //   if (classpathSearchResult.length === 0 || classpathSearchResult.length > 1) {
  //     throw new Error('There must be exactly one class with the @App decorator.');
  //   }

  //   // compruebo que solo existe un elemento
  //   const mainClasspath = classpathSearchResult[0];

  //   if (!mainClasspath) {
  //     throw new Error('Main classpath element not found.');
  //   }

  //   // se que no existe esa clase en IoC
  //   // Observo los cambios en el IoC para que reaccione al registro de la clase principal
  //   componentRegistry.onComponentByName(mainClasspath.name, (component) => {
  //     const dataMetadata = Reflect.getMetadata(
  //       `${METADATA_CONFIGURATION}=${METADATA_CONFIGURATION_DATA}`,
  //       component.class
  //     );

  //     // si la calse principal esta metadatada metadata:configuration=data
  //     if (dataMetadata && dataMetadata === true) {
  //       this.completeClasspathElements();
  //     }
  //   });
  // }

  // private completeClasspathElements(): void {
  //   classpathService.getAll().forEach((element: ClasspathElement) => {
  //     if (element.decorators?.includes(DECORATOR_ENTITY_NAME)) {
  //       this.internalAddElement(element);
  //     }
  //   });
  // }

  // private completeByType(type: ClasspathType): void {
  //   // classpathService.getElementById();

  //   // recorre recursivamente los tipos y los añade a la entidad
    
  // }

  addEntity(classpathElement: ClasspathElement): void {
    // this.registry.push(entity);
  }

  getEntityByName(name: string): Entity | undefined {
    return this.registry.find((entity) => entity.name === name);
  }
}

export const entityRegistry = new EntityRegistry();
