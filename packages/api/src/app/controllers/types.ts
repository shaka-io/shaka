import ModelsConnection from "@shaka-js/models";
import { Request, Response } from "express";

export type TypesControllers = {
  all: (req: Request, res: Response) => void;
  index: (req: Request, res: Response) => void;
  health: (req: Request, res: Response) => void;
  webhooks: {
    voltage: (req: Request, res: Response) => void;
    mailgun: (
      req: Request,
      res: Response,
      models: typeof ModelsConnection
    ) => void;
  };
};
