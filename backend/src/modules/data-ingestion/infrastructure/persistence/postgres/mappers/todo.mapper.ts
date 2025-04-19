import { DisasterEvent } from 'src/modules/data-ingestion/domain/entities/DisasterEvent';
import { DisasterEventEntity } from '../entities/disaster-event.entity';

export class DisasterEventMapper {
  static toDomainObject(_persistenceObject: DisasterEvent): DisasterEvent {
    return new DisasterEvent();
  }

  static toPersistenceObject(domainObject: DisasterEvent): DisasterEventEntity {
    const persistenceObject = new DisasterEventEntity();

    Object.keys(domainObject).forEach((key) => {
      persistenceObject[key] = domainObject[key];
    });

    return persistenceObject;
  }
}
