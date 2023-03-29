import { Request, Response } from "express";

export const controllershealth = (req: Request, res: Response): void => {
  res.status(200).send();
};
