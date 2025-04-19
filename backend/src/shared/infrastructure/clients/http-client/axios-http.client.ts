import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { HttpClient } from '../../../application/abstractions/http-client/http.client.interface';

@Injectable()
export class AxiosHttpClient implements HttpClient {
  constructor(private readonly httpService: HttpService) {}

  public async get<T>(
    url: string,
    headers?: Record<string, string>,
  ): Promise<T> {
    const { data } = await this.httpService.axiosRef.get<T>(url, { headers });
    return data;
  }

  public async post<RequestPayload, ResponseData>({
    url,
    payload,
    headers,
  }: {
    url: string;
    payload: RequestPayload;
    headers?: Record<string, string>;
  }): Promise<ResponseData> {
    const { data } = await this.httpService.axiosRef.post<ResponseData>(
      url,
      payload,
      {
        headers,
      },
    );

    return data;
  }

  public async put<RequestPayload, ResponseData>(
    url: string,
    payload: RequestPayload,
    headers?: Record<string, string>,
  ): Promise<ResponseData> {
    const { data } = await this.httpService.axiosRef.put<ResponseData>(
      url,
      payload,
      {
        headers,
      },
    );

    return data;
  }

  public async patch<RequestPayload, ResponseData>(
    url: string,
    payload: RequestPayload,
    headers?: Record<string, string>,
  ): Promise<ResponseData> {
    const { data } = await this.httpService.axiosRef.patch<ResponseData>(
      url,
      payload,
      {
        headers,
      },
    );

    return data;
  }

  public async delete<ResponseData>(
    url: string,
    headers?: Record<string, string>,
  ): Promise<ResponseData> {
    const { data } = await this.httpService.axiosRef.delete<ResponseData>(url, {
      headers,
    });

    return data;
  }

  public async head(
    url: string,
    headers?: Record<string, string>,
  ): Promise<void> {
    await this.httpService.axiosRef.head(url, {
      headers,
    });
  }

  public async options(
    url: string,
    headers?: Record<string, string>,
  ): Promise<void> {
    await this.httpService.axiosRef.options(url, {
      headers,
    });
  }
}
