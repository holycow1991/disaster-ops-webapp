import { Nullable } from '../../../../types/nullable';
import { DisasterEvent } from '../entities/DisasterEvent';

export const DISASTER_EVENT_REPOSITORY_SYMBOL = Symbol.for(
  'DisasterEventRepository',
);

export interface DisasterEventRepository {
  persist(data: DisasterEvent): Promise<DisasterEvent>;
  findById(id: DisasterEvent['id']): Promise<Nullable<DisasterEvent>>;
}
