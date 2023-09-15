import starsData from "../data/stars.json";
import { Request, Response } from "express";

export async function getStarsController(req: Request, res: Response) {
    const id = Number(req.query.id)
    let stars = starsData
    if (id) {
        stars = starsData.filter((star) => star.id === id)
    }
    res.status(200).json(stars)
}