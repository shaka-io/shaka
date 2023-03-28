import { Request, Response } from "express";

export type TypesControllers = {
  all: (req: Request, res: Response) => void;
  index: (req: Request, res: Response) => void;
  health: (req: Request, res: Response) => void;
  voltagewebhooks: (req: Request, res: Response) => void;
};
