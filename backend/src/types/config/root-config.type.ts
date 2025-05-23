import { AppConfig } from './app-config.type';
import { DatabaseConfig } from './database-config.type';

export type RootConfig = {
  app: AppConfig;
  database: DatabaseConfig;
};
