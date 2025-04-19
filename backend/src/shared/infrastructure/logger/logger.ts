import { Injectable, Logger } from '@nestjs/common';
import { LoggerPort } from 'src/shared/application/abstractions/logger/logger.interface';

@Injectable()
export class SystemLogger implements LoggerPort {
  private logger: Logger;

  constructor() {
    this.logger = new Logger();
  }

  log(message: string, metadata?: Record<string, any>) {
    this.logger.log(metadata, message);
  }

  error(message: string, metadata?: Record<string, any>) {
    this.logger.error(metadata, message);
  }

  warn(message: string, metadata?: Record<string, any>) {
    this.logger.warn(metadata, message);
  }

  debug(message: string, metadata?: Record<string, any>) {
    this.logger.debug(metadata, message);
  }
}
