import { Request, Response } from "express";

export type TypesMediaControllers = {
  health: (req: Request, res: Response) => void;
  _: (req: Request, res: Response) => void;
};
