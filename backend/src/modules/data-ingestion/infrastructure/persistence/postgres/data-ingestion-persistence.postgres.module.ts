import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DisasterEventRepositoryProvider } from './repositories/disaster-event.repository.provider';
import { DISASTER_EVENT_REPOSITORY_SYMBOL } from 'src/modules/data-ingestion/domain/repository/DisasterEvent.repository.port';
import { DisasterEventEntity } from './entities/disaster-event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DisasterEventEntity])],
  providers: [DisasterEventRepositoryProvider],
  exports: [DISASTER_EVENT_REPOSITORY_SYMBOL],
})
export class DataIngestionPersistenceModule {}
