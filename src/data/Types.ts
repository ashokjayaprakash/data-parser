import { ClientInfo } from "./ClientInfo";

export interface GenericResponse {
  statuscode: number;
  data: ClientInfo;
}

export interface ParseRequestPayload {
  data: String;
}
