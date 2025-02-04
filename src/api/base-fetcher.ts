import { baseEndpoint, baseURL } from '../constants/endpoints.ts';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

type Payload = {
  chatId: string;
  message: string;
};

export async function baseFetcher(
  endpoint: string,
  method: Method,
  body?: Payload
) {
  const apiUrl = `${baseURL}${baseEndpoint}${endpoint}`;

  try {
    const response = await fetch(apiUrl, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    return await response.json();
  } catch (e) {
    console.error(e);
  }
}
