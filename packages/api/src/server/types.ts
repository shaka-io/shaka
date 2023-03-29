import ModelsConnection from "@shaka-js/models";
import { Request, Response } from "express";
import { Session, SessionData } from "express-session";
import Redis from "ioredis";
import { ClassesApi } from "../classes";

export type TypesServerContext = {
  req: Request & {
    session: Session & Partial<SessionData & { key1?: string }>;
  };
  res: Response;
  models: typeof ModelsConnection;
  classes: ClassesApi;
  redis: Redis;
};
