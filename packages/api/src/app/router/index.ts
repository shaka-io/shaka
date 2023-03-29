import { Router } from "express";
import { controllers } from "../controllers";

const router = Router();
router.get("/", controllers.index);
router.get("/health", controllers.health);
router.post("/voltage/webhooks", controllers.voltagewebhooks);
export { router };
