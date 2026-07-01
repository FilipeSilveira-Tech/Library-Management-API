import type { Response } from "express";

export interface HttpResponse {
  statusCode: HttpStatusCode;
  success: HttpSuccessStatusType;
  message?: string | null;
  timestamp: string;
  data?: object | object[] | null;
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
export const HttpSuccessStatus = {
  SUCESSO: true,
  FALHA: false,
} as const;

type HttpSuccessStatusType =
  (typeof HttpSuccessStatus)[keyof typeof HttpSuccessStatus];

export const HttpInternalError = (
  message: string = "INTERNAL ERROR - 500",
) => ({
  success: HttpSuccessStatus.FALHA,
  message: "INTERNAL ERROR - 500",
  timestamp: new Date().toISOString(),
});

interface HttpResponseArgs {
  statusCode: HttpStatusCode;
  success: HttpSuccessStatusType;
  message?: string;
  data?: object | object[] | null;
}

export const HttpResponse = ({
  statusCode,
  success,
  message,
  data,
}: HttpResponseArgs) => ({
  statusCode,
  success,
  ...(message && { message }),
  ...(data && { data }),
  timestamp: new Date().toISOString(),
});
