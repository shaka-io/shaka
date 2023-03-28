import { Request, Response } from "express";

export const all = (req: Request, res: Response): void => {
  const errorobj = {
    message: `The requested endpoint '${req.originalUrl}' does not exist.`,
    endpoints: {
      breathe: `GET /health`,
    },
    success: false,
  };
  res.status(404).json(errorobj);
};
