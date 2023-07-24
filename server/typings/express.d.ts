import { Request } from "express";
import { IDB } from "../infrastructure/typings/database";

declare global {
  namespace Express {
    interface Request {
      db: IDB;
    }
  }
}

export interface ReqWithDB extends Request {
  db: IDB;
}
