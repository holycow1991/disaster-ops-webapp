import { DISASTER_EVENT_REPOSITORY_SYMBOL } from 'src/modules/data-ingestion/domain/repository/DisasterEvent.repository.port';
import { DisasterEventPostgresRepository } from './disaster-event.postgres.repository';

export const DisasterEventRepositoryProvider = {
  provide: DISASTER_EVENT_REPOSITORY_SYMBOL,
  useClass: DisasterEventPostgresRepository,
};
