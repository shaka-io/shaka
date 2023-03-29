import { Router } from "express";
import { controllers } from "../controllers";

export const router = Router();

router.get("/", controllers._);
router.get("/health", controllers.health);
