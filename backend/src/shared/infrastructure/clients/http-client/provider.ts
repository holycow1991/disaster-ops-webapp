import { HTTP_CLIENT_PROVIDER_SYMBOL } from 'src/shared/application/abstractions/http-client/http.client.interface';
import { AxiosHttpClient } from './axios-http.client';

export const httpClientProvider = [
  AxiosHttpClient,
  {
    provide: HTTP_CLIENT_PROVIDER_SYMBOL,
    useExisting: AxiosHttpClient,
  },
];
