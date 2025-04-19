import { registerAs } from '@nestjs/config';

import { IsInt, Min, Max, IsString } from 'class-validator';
import { AppConfig } from '../../../types/config/app-config.type';
import validateConfig from '../../../utils/validateConfig';

class AppConfigEnvValidator {
  @IsString()
  APP_NAME: string;

  @IsInt()
  @Min(0)
  @Max(65535)
  APP_PORT: number;
}

export default registerAs<AppConfig>('app', (): AppConfig => {
  validateConfig(process.env, AppConfigEnvValidator);

  return {
    port: parseInt(process.env.APP_PORT, 10),
    appName: process.env.APP_NAME,
  };
});
