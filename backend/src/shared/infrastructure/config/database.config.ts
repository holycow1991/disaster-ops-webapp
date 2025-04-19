import { registerAs } from '@nestjs/config';

import { IsInt, Min, Max, IsString } from 'class-validator';
import { DatabaseConfig } from '../../../types/config/database-config.type';
import validateConfig from '../../../utils/validateConfig';

export class DatabaseConfigEnvValidator {
  @IsString()
  DB_HOST: string;

  @IsInt()
  @Min(0)
  @Max(65535)
  DB_PORT: number;

  @IsString()
  DB_PASSWORD: string;

  @IsString()
  DB_USERNAME: string;
}

export default registerAs<DatabaseConfig>('database', (): DatabaseConfig => {
  validateConfig(process.env, DatabaseConfigEnvValidator);

  return {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USERNAME,
    synchronize: false,
    maxConnections: process.env.DB_MAX_CONNECTIONS
      ? parseInt(process.env.DB_MAX_CONNECTIONS, 10)
      : 100,
    logging: process.env.NODE_ENV !== 'production',
  };
});
