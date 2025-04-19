import { Repository } from 'typeorm';
import { Nullable } from '../../../../../../types/nullable';
import { Injectable } from '@nestjs/common';
import { DisasterEventRepository } from 'src/modules/data-ingestion/domain/repository/DisasterEvent.repository.port';
import { DisasterEvent } from 'src/modules/data-ingestion/domain/entities/DisasterEvent';
import { DisasterEventMapper } from '../mappers/todo.mapper';
import { DisasterEventEntity } from '../entities/disaster-event.entity';

@Injectable()
export class DisasterEventPostgresRepository
  extends Repository<DisasterEventEntity>
  implements DisasterEventRepository
{
  async persist(data: DisasterEvent): Promise<DisasterEvent> {
    const todoEntity = await this.save(data);
    return DisasterEventMapper.toDomainObject(todoEntity);
  }

  async findById(id: DisasterEvent['id']): Promise<Nullable<DisasterEvent>> {
    const entity = await this.findOne({
      where: { id },
    });

    return entity ? DisasterEventMapper.toDomainObject(entity) : null;
  }
}
