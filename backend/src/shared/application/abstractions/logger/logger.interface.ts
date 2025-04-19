export const LOGGER_PROVIDER_SYMBOL = Symbol.for('LoggerPort');

export interface LoggerPort {
  log: (message: string, metadata?: Record<string, any>) => void;
  error: (message: string, metadata?: Record<string, any>) => void;
  debug: (message: string, metadata?: Record<string, any>) => void;
}
