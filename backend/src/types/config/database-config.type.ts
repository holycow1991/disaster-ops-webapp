export type DatabaseConfig = {
  host: string;
  username: string;
  password: string;
  port: number;
  synchronize: boolean;
  logging: boolean;
  maxConnections: number;
};
