import { Request, Response } from "express";

export const controllersindex = (req: Request, res: Response): void => {
  const resobj = {
    message: `[shaka] Media file server.`,
    endpoints: {
      health: `GET /health`,
    },
    success: true,
  };
  res.status(200).json(resobj);
};
