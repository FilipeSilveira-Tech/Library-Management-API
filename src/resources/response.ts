export interface HttpResponse {
  statusCode: HttpStatusCode;
  success: boolean;
  message?: string;
  timestamp?: string;
  data?: object;
}

export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  FOUND = 302,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  CONFLICT = 409,
  SERVER_ERROR = 500,
}
