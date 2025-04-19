// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Request } from 'express';
import { Logger } from 'pino';

type RequestState = {
  requestId?: string;
  originIp?: string;
  decodedToken?: any;
};

type RequestContext = {
  logger: Logger;
};

declare module 'express' {
  export interface Request {
    state?: RequestState;
    context: RequestContext;
  }
}
