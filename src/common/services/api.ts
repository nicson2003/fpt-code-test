import AsyncStorage from '@react-native-async-storage/async-storage';
import environment from '../../environments';

export enum FetchMethod {
  Get = 'GET',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
}

export interface FetchError {
  statusCode: number;
  error: string;
  message: string;
}

export interface FetchRequest {
  response: Promise<Response>;
  //abort: () => void;
}

export interface ApiParams {
  [key: string]: any;
}

const api = {
  getBaseUrl: (): string => environment.apiBaseUrl,
  getAccessToken: async (): Promise<string | null> => {
    return await AsyncStorage.getItem('token');
  },
  setAccessToken: async (token: string) => {
    try {
      await AsyncStorage.setItem('token', token);
    } catch (e) {
      console.log(e);
    }
  },
  removeAccessToken: async () => {
    try {
      await AsyncStorage.removeItem('token');
    } catch (e) {
      console.log(e);
    }
  },
  get: (path: string, queryParams: ApiParams): Promise<FetchRequest> => {
    return api.fetch(FetchMethod.Get, path, queryParams);
  },
  delete: (path: string, queryParams: ApiParams): Promise<FetchRequest> => {
    return api.fetch(FetchMethod.Delete, path, queryParams);
  },
  patch: (path: string, body: ApiParams): Promise<FetchRequest> => {
    return api.fetch(FetchMethod.Patch, path, body);
  },
  post: (path: string, body: ApiParams): Promise<FetchRequest> => {
    return api.fetch(FetchMethod.Post, path, body);
  },
  put: (path: string, body: ApiParams): Promise<FetchRequest> => {
    return api.fetch(FetchMethod.Put, path, body);
  },
  fetch: async (
    method: FetchMethod,
    path: string,
    params: ApiParams = {},
  ): Promise<FetchRequest> => {
    let url: any = new URL(path, environment.apiBaseUrl);
    const headers = {
      Authorization: `Bearer ${await api.getAccessToken()}`,
    } as any;
    const options: RequestInit = {
      headers,
      method,
    };
    switch (method) {
      case FetchMethod.Get:
      case FetchMethod.Delete:
        url = `${url}?${Object.keys(params)
          .map(prop => [prop, params[prop]].map(encodeURIComponent).join('='))
          .join('&')}`;
        break;
      case FetchMethod.Patch:
      case FetchMethod.Post:
      case FetchMethod.Put:
        (options.headers as any)['content-type'] = 'application/json';
        options.body = JSON.stringify(params);
        break;
    }
    return {
      response: fetch(url.toString(), options),
    };
  },
};

export default api;
