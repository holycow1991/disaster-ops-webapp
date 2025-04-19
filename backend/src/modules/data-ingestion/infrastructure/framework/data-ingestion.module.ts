import { Module } from '@nestjs/common';
import { DataIngestionPersistenceModule } from '../persistence/postgres/data-ingestion-persistence.postgres.module';

@Module({
  imports: [DataIngestionPersistenceModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class DataIngestionModule {}
