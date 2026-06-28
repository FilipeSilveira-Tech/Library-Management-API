export interface DefaultResponse {
  statusCode: number;
  success: boolean;
  message?: string;
  timestamp?: string;
  data?: object;
}
