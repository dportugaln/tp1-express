import Router from "express";
import { getStarsController } from "../controller/getStars.controller";
import { getStarsbyId } from "../controller/getStarsById";
import { createStarController } from "../controller/createStars.controller";
import { logger } from "../middlewares/logger.middleware";
import { validateStarBody } from "../middlewares/validationMiddleware";

export const router = Router();

router.get('/', getStarsController);
router.get('/:id', getStarsbyId);
router.post('/', validateStarBody, createStarController)





