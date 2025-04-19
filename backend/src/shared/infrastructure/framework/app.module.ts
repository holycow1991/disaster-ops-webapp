import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceOptions, DataSource } from 'typeorm';
import appConfig from '../config/app.config';
import databaseConfig from '../config/database.config';
import { TypeOrmConfigService } from '../database/typeorm-config.service';
import { loggerProvider } from '../logger/provider';
import { HttpModule } from '@nestjs/axios';
import { httpClientProvider } from '../clients/http-client/provider';
import { LOGGER_PROVIDER_SYMBOL } from 'src/shared/application/abstractions/logger/logger.interface';
import { DataIngestionModule } from 'src/modules/data-ingestion/infrastructure/framework/data-ingestion.module';

@Global()
@Module({
  providers: [...loggerProvider, ...httpClientProvider],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig],
      envFilePath: '.env.dist',
      ignoreEnvFile: process.env.NODE_ENV === 'production',
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: (options: DataSourceOptions) => {
        return new DataSource(options).initialize();
      },
    }),
    HttpModule,
    CqrsModule.forRoot(),
    DataIngestionModule,
  ],
  exports: [LOGGER_PROVIDER_SYMBOL],
})
export class AppModule {}
