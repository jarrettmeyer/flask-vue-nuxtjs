import axios, { AxiosResponse } from "axios";

const JSON_CONTENT_TYPE: string = "application/json";

export interface ApiTime {
  time: string;
}

export async function getJson<T>(url: string, defaultValue: T): Promise<T> {
  const response = await axios.get<T>(url);
  if (isValidJsonResponse(response)) {
    return response.data;
  }
  console.warn(`Response is not a valid JSON response.`, response);
  return defaultValue;
}

export function getResponseContentType(response: AxiosResponse<any>): string {
  if (!response || !response.headers || !response.headers.get) {
    return "";
  }
  const contentType = response.headers.get("content-type");
  return contentType || "";
}

export async function getTime(): Promise<ApiTime> {
  const response = await axios.get<ApiTime>("/api/time");
  if (isValidJsonResponse(response)) {
    return response.data;
  }
  return {
    time: "NA"
  };
}

export function isValidJsonResponse(response: AxiosResponse<any>): boolean {
  const statusValid = response.status < 400;
  const contentTypeValid = getResponseContentType(response).includes(JSON_CONTENT_TYPE);
  return statusValid && contentTypeValid;
}
