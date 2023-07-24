import { Request } from "express";
import { DBModels } from "../infrastructure/typings/database";

declare global {
  namespace Express {
    interface Request {
      db: DBModels;
    }
  }
}

export interface ReqWithDB extends Request {
  db: DBModels;
}
