import { Request, Response } from "express";

export const webhooksvoltage = (req: Request, res: Response): void => {
  const { body } = req;

  console.log(req, `req`); // debug
  console.log(JSON.stringify(body, null, 4), `body`); // debug
  console.log(new Date().toISOString()); // debug

  res.status(200).send();
};
