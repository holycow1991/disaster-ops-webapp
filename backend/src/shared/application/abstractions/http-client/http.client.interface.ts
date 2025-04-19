export const HTTP_CLIENT_PROVIDER_SYMBOL = Symbol.for('HttpClient');

export interface HttpClient {
  get<T>(url: string, headers?: Record<string, string>): Promise<T>;

  post<RequestPayload, ResponseData>(requestData: {
    url: string;
    payload: RequestPayload;
    headers?: Record<string, string>;
  }): Promise<ResponseData>;

  put<RequestPayload, ResponseData>(
    url: string,
    payload: RequestPayload,
    headers?: Record<string, string>,
  ): Promise<ResponseData>;

  patch<RequestPayload, ResponseData>(
    url: string,
    payload: RequestPayload,
    headers?: Record<string, string>,
  ): Promise<ResponseData>;

  delete<ResponseData>(
    url: string,
    headers?: Record<string, string>,
  ): Promise<ResponseData>;

  head(url: string, headers?: Record<string, string>): Promise<void>;

  options(url: string, headers?: Record<string, string>): Promise<void>;
}
