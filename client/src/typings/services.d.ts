export type RequestMethod =
  | "GET"
  | "HEAD"
  | "POST"
  | "PUT"
  | "DELETE"
  | "CONNECT"
  | "OPTIONS"
  | "TRACE"
  | "PATCH";

export interface RequestHelpersProps {
  route: string;
  baseUrl?: string;
  data?: object;
  method?: RequestMethod;
  contentType?: string;
  headers?: object;
}
