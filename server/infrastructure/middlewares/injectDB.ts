import asyncHandler from "express-async-handler";
import db from "../db/models";
import { Request } from "express";

const injectDB = asyncHandler(async (req: Request, _res, next) => {
  req.db = db;

  next();
});

export default injectDB;
