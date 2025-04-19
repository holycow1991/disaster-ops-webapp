import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
const getDataSource = () => {
  return new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    dropSchema: false,
    logging: process.env.NODE_ENV !== 'production',
    entities: [__dirname + '/../../../**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    migrationsTableName: 'typeorm_migrations',
    cli: {
      entitiesDir: 'src',
    },
  } as DataSourceOptions);
};

export const TypeormDataSource = getDataSource();
