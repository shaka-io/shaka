import ModelsConnection from "@shaka-js/models";
import { Router } from "express";
import { controllers } from "../controllers";

export const routermethod = (models: typeof ModelsConnection): Router => {
  const router = Router();
  router.get("/", controllers.index);
  router.get("/health", controllers.health);
  router.post("/webhooks/voltage", controllers.webhooks.voltage);
  router.post("/webhooks/mailgun", (req, res) =>
    controllers.webhooks.mailgun(req, res, models)
  );

  return router;
};
