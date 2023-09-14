import Router from "express";
import { getStarsController } from "../controller/getStars.controller";
import { getStarsbyId } from "../controller/getStarsById";
import { createStarController } from "../controller/createStars.controller";

export const router = Router();

router.get('/stars', getStarsController);
router.get('/stars/:id', getStarsbyId);
router.post('/stars', createStarController)





