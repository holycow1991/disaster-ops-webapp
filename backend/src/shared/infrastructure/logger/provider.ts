import { LOGGER_PROVIDER_SYMBOL } from 'src/shared/application/abstractions/logger/logger.interface';
import { SystemLogger } from './logger';

export const loggerProvider = [
  SystemLogger,
  {
    provide: LOGGER_PROVIDER_SYMBOL,
    useExisting: SystemLogger,
  },
];
