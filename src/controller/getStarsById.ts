import starsData from "../data/stars.json";
import { Request, Response } from "express";

export async function getStarsbyId(req: Request, res: Response) {
    const id = Number(req.params.id);
    const star = starsData.find((star) => star.id === id);
    if(!star) {
        res.status(404).json({
            error: 'STAR_NOT_FOUND',
            message: `star ${star} not found in the database`
        })
    }
    res.status(200).json(star)
}